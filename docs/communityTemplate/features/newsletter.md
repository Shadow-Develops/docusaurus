---
sidebar_position: 4
---

# Newsletter

The newsletter system lets you manage a mailing list and send email campaigns to your subscribers. Requires the `manageNewsletter` permission.

## Subscriber Management

Go to **Admin Panel > Newsletter > Subscribers** to view and manage your mailing list.

The subscriber list shows each subscriber's email, join date, status (active/unsubscribed), and which categories they are subscribed to. You can search by email.

### Adding Subscribers

- **Manual add** - enter an email address directly to add a subscriber
- **Bulk import** - import a CSV file of email addresses

### Categories

Newsletter categories let subscribers choose which types of content they want to receive. Go to **Admin Panel > Newsletter > Categories** to manage them.

Each category has:

- **Name** - shown to subscribers when choosing what to subscribe to
- **Description** - optional explanation of what the category covers
- **Public** - whether subscribers can choose this category themselves, or if it's admin-only (all subscribers are added silently)

When creating a **Newsletter section** on the home page, you can configure which categories appear in the subscription form and which are selected by default.

### Unsubscribes

Subscribers can unsubscribe at any time via the unsubscribe link included in every campaign email. Their status updates to `unsubscribed` and they will not receive future campaigns.

## Sending Campaigns

Go to **Admin Panel > Newsletter > Campaigns** to create and send email campaigns.

### Creating a Campaign

| Field        | Notes                                                          |
| ------------ | -------------------------------------------------------------- |
| **Subject**  | Email subject line                                             |
| **Content**  | Email body - supports Markdown                                 |
| **Category** | Send to subscribers of a specific category, or all subscribers |
| **Status**   | `draft` while editing, updates to `sent` after sending         |

Campaigns can be saved as drafts and edited before sending.

### Sending

Click **Send** to deliver the campaign. Sending is immediate - there is no scheduled send option. A confirmation prompt is shown before the campaign is dispatched.

After sending, the campaign record shows the send timestamp and delivery status.

### Discord Notifications

When a campaign is sent, Community Template can automatically post an announcement to a Discord channel. Configure the channel ID and ping role in **Admin Panel > Discord > Notifications**.

## Subscriber Subscribe Page

Users can subscribe at `/newsletter/subscribe`. The page shows the subscription form (email input + optional category selector). The form matches the configuration of the Newsletter section you place on your home page.
