---
sidebar_position: 3
---

# Newsletter API

The Newsletter API allows users to subscribe and unsubscribe from your store's newsletter programmatically. This API is used by newsletter forms throughout your site and can be integrated into custom implementations.

## Endpoint

```
POST /api/newsletter
```

## Request Format

The API accepts `multipart/form-data` with the following fields:

### Required Fields

**`email`** (string)

- The email address to subscribe/unsubscribe
- Must be a valid email format
- Required for all operations

### Optional Fields

**`action`** (string)

- Action to perform: `"subscribe"` or `"unsubscribe"`
- Default: `"subscribe"`

**`token`** (string)

- Unsubscribe token (required only for unsubscribe action)
- Generated automatically on subscription
- Included in unsubscribe links sent via email

## Subscribe Operation

Subscribe a new email address to the newsletter.

### Request Example

```javascript
const formData = new FormData();
formData.append('email', 'user@example.com');
formData.append('action', 'subscribe');

const response = await fetch('/api/newsletter', {
	method: 'POST',
	body: formData,
});

const result = await response.json();
```

### Response Examples

**Success (New Subscription)**

```json
{
	"success": true,
	"message": "Successfully subscribed!"
}
```

**Success (Re-subscription)**

```json
{
	"success": true,
	"message": "Successfully resubscribed!"
}
```

**Error (Already Subscribed)**

```json
{
	"success": false,
	"message": "Email already subscribed"
}
```

**Error (Invalid Email)**

```json
{
	"success": false,
	"message": "Invalid email format"
}
```

### Subscription Behavior

1. **New Subscriber**: Email doesn't exist in database

   - Creates new subscriber record
   - Generates unique unsubscribe token
   - Sets `subscribed: true`
   - Records subscription timestamp
   - Stores source as `newsletter_section`

2. **Re-subscription**: Email exists but is unsubscribed

   - Updates existing record
   - Sets `subscribed: true`
   - Records new subscription timestamp
   - Removes unsubscribe timestamp
   - Keeps existing unsubscribe token

3. **Already Subscribed**: Email exists and is active
   - Returns error message
   - No database changes

## Unsubscribe Operation

Unsubscribe an email from the newsletter using the unsubscribe token.

### Request Example

```javascript
const formData = new FormData();
formData.append('email', 'user@example.com');
formData.append('action', 'unsubscribe');
formData.append('token', 'a1b2c3d4e5f6...');

const response = await fetch('/api/newsletter', {
	method: 'POST',
	body: formData,
});

const result = await response.json();
```

### Response Examples

**Success**

```json
{
	"success": true,
	"message": "Successfully unsubscribed"
}
```

**Error (Invalid Token)**

```json
{
	"success": false,
	"message": "Invalid unsubscribe link"
}
```

**Error (Missing Token)**

```json
{
	"success": false,
	"message": "Unsubscribe token required"
}
```

### Unsubscribe Behavior

1. **Valid Token**: Email and token match in database

   - Sets `subscribed: false`
   - Records unsubscribe timestamp
   - Keeps email in database for re-subscription
   - Keeps unsubscribe token

2. **Invalid Token**: Email/token combination doesn't match

   - Returns error message
   - No database changes

3. **Missing Token**: No token provided
   - Returns error message
   - No database changes

## Database Schema

Newsletter subscribers are stored with the following fields:

```javascript
{
  email: "user@example.com",          // Email address
  subscribed: true,                    // Current subscription status
  subscribedAt: ISODate("2024-01-15"), // Initial subscription date
  unsubscribedAt: ISODate("..."),      // Last unsubscribe date (if any)
  unsubscribeToken: "a1b2c3d4...",     // Unique token for unsubscribe
  source: "newsletter_section",        // Where they subscribed from
  metadata: {}                          // Additional tracking data
}
```

## Email Validation

The API validates email addresses using a standard regex pattern:

```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**Valid Examples:**

- `user@example.com`
- `name.surname@company.co.uk`
- `test+tag@domain.org`

**Invalid Examples:**

- `invalid.email` (no @)
- `@domain.com` (no local part)
- `user@` (no domain)
- `user @domain.com` (contains space)

## Integration Examples

### HTML Form

```html
<form action="/api/newsletter" method="POST">
	<input type="email" name="email" placeholder="Enter your email" required />
	<input type="hidden" name="action" value="subscribe" />
	<button type="submit">Subscribe</button>
</form>
```

### JavaScript (Fetch API)

```javascript
async function subscribeToNewsletter(email) {
	const formData = new FormData();
	formData.append('email', email);

	try {
		const response = await fetch('/api/newsletter', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			alert(data.message);
		} else {
			alert('Error: ' + data.message);
		}
	} catch (error) {
		alert('Network error: ' + error.message);
	}
}
```

### Unsubscribe Link in Emails

Unsubscribe links should include both the email and token:

```html
<a href="https://yourstore.com/unsubscribe?email=user@example.com&token=abc123">
	Unsubscribe from this list
</a>
```

Then handle it with JavaScript:

```javascript
// On unsubscribe page
const params = new URLSearchParams(window.location.search);
const email = params.get('email');
const token = params.get('token');

if (email && token) {
	const formData = new FormData();
	formData.append('email', email);
	formData.append('action', 'unsubscribe');
	formData.append('token', token);

	fetch('/api/newsletter', {
		method: 'POST',
		body: formData,
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.success) {
				document.getElementById('message').textContent = data.message;
			}
		});
}
```

## HTTP Status Codes

The API returns the following HTTP status codes:

- `200 OK` - Successful operation (subscribe/unsubscribe)
- `400 Bad Request` - Invalid input (missing email, invalid format, etc.)
- `500 Internal Server Error` - Server error

## Error Handling

All errors return a JSON response with `success: false`:

```json
{
	"success": false,
	"message": "Error description"
}
```

**Common Error Messages:**

- `"Email is required"` - No email provided
- `"Invalid email format"` - Email doesn't match validation pattern
- `"Email already subscribed"` - Attempt to subscribe existing active subscriber
- `"Unsubscribe token required"` - Missing token for unsubscribe action
- `"Invalid unsubscribe link"` - Email/token combination not found
- `"An error occurred"` - Server-side error

## Security Considerations

### Token Security

- Unsubscribe tokens are generated using `crypto.randomBytes(32)`
- Tokens are 64 characters long (hex encoded)
- Tokens are unique per subscriber
- Tokens never expire (allows unsubscribe anytime)

### Email Privacy

- Emails are stored securely in MongoDB
- No email validation emails are sent (to prevent spam)
- Unsubscribed emails are kept in database (not deleted)
- Allows re-subscription without data loss

### Rate Limiting

Consider implementing rate limiting on the client side:

- Disable submit button after click
- Add cooldown period between requests
- Validate on client before sending to API

## Usage in Shadow Store

Shadow Store uses this API in multiple locations:

1. **Homepage Newsletter Section**: Main subscription form
2. **Footer Newsletter**: Site-wide subscription form
3. **Admin Newsletter Tool**: Manual subscriber management
4. **Email Templates**: Automated unsubscribe links

## Viewing Subscribers

To view and manage subscribers:

1. Navigate to **Admin Panel > Pages > Newsletters**
2. View all subscribers with their status
3. See subscription/unsubscription dates
4. Manually manage subscriber list
5. Send newsletters to active subscribers
