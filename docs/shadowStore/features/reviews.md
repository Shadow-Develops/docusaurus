---
sidebar_position: 8
pagination_next: null
pagination_prev: null
---

# Reviews

The Reviews system enables customers to leave product feedback with star ratings, helping build trust and provide valuable insights. The system includes moderation tools, reporting capabilities, and verification to ensure only genuine customers can review products.

## Leaving a Review

### Customer Workflow

1. Customer purchases a product
2. After purchase, they can access the review form
3. Navigate to `/reviews/create` or find the review button on the product page
4. Fill in the review:
   - **Star Rating**: 1-5 stars (required)
   - **Review Title**: Short summary (optional)
   - **Review Text**: Detailed feedback
5. Submit review
6. Review enters "Pending" status for moderation

### Purchase Verification

Reviews are automatically verified:

- System checks if the user has purchased the product
- Only customers who own the product can submit reviews
- Prevents fake or spam reviews
- Displays "Verified Purchase" badge on approved reviews

## Review Statuses

Reviews can have the following statuses:

- **Pending**: Awaiting moderator approval
- **Approved**: Published and visible to all users
- **Rejected**: Not approved for publication
- **Reported**: Flagged by users for review
- **Removed**: Hidden from non-staff

## Review Moderation

### Moderation Queue

Access the moderation queue at **Admin Panel > Reviews**

**View Filters:**

- **Pending**: Reviews awaiting approval
- **Reported**: Reviews flagged by users
- **All**: Complete review list

### Moderating Reviews

For each review, moderators can:

**Approve**

- Publishes the review
- Makes it visible on product pages
- Sends notification to reviewer (optional)

**Reject**

- Removes review from public view
- Can include rejection reason
- Notifies reviewer (optional)

**Delete**

- Permanently removes the review
- Cannot be undone
- Use for spam or abuse

**Send to Pending**

- Returns approved review to pending status
- Useful for re-review after edits
- Hides from public view temporarily

**Clear Reports**

- Removes report flags
- Keeps review approved
- Use when reports are unfounded

### Moderation Actions

1. Navigate to **Admin Panel > Reviews**
2. Select the review to moderate
3. Review the content:
   - Star rating
   - Review text
   - Reporter reasons (if reported)
   - User information
   - Product details
4. Choose action:
   - Approve with optional message
   - Reject with reason
   - Delete permanently
   - Clear reports
5. Action applied immediately

## Reporting Reviews

### User Reporting

Customers can report inappropriate reviews:

1. Find the review on a product page
2. Click "Report Review"
3. Select or enter report reason:
   - Spam or fake
   - Offensive content
   - Not related to product
   - Misleading information
   - Other (custom reason)
4. Submit report

### Moderator Review of Reports

1. Navigate to **Admin Panel > Reviews**
2. Click "Reported" filter
3. View reported reviews with:
   - Number of reports
   - Report reasons
   - Original review content
4. Take appropriate action:
   - Approve and clear reports (if unfounded)
   - Remove review (if violates policies)
   - Contact reviewer for clarification

## Review Display

### Product Pages

Reviews are displayed on product pages:

- Average star rating (calculated from all approved reviews)
- Total number of reviews
- Individual reviews with:
  - Star rating
  - Reviewer name
  - Review date
  - "Verified Purchase" badge
  - Review text
  - Helpful/not helpful votes (if enabled)

### Review Sorting

Reviews can be sorted by:

- Most recent
- Highest rated
- Lowest rated
- Most helpful (if voting enabled)

## Review Settings

Configure review settings at **Admin Panel > Reviews > Settings**

**General Settings:**

- Enable/disable reviews globally
- Require purchase to review
- Auto-approve reviews (bypass moderation)
- Allow anonymous reviews
- Display reviewer names
- Enable review voting (helpful/not helpful)

**Moderation Settings:**

- Email notifications for new reviews
- Email notifications for reported reviews
- Notification recipients
- Auto-reject spam (basic filtering)

**Display Settings:**

- Reviews per page
- Default sort order
- Show verified purchase badge
- Show review dates
- Allow review editing by users

## Review History

Track review changes and moderation actions:

- Review creation date
- Status changes with timestamps
- Moderator actions
- Report history
- User edits (if allowed)

Access history from the review detail page in the admin panel.

## Permissions

### Admin Permissions

To moderate reviews, users must have:

- `owner` - Full store owner access
- `manageReviews` - Review moderation permissions

### Customer Permissions

Customers can:

- Leave reviews on purchased products
- Edit their own reviews (if enabled)
- Report inappropriate reviews
- View all approved reviews
