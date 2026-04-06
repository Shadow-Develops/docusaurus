---
sidebar_position: 6
pagination_next: null
pagination_prev: null
---

# Analytics

Shadow Store includes a built-in analytics dashboard that tracks store performance, traffic, and revenue, all without any third-party tracking scripts required.

## Accessing Analytics

Navigate to **Admin Panel > Analytics**. Access requires the `viewInsights` or `owner` permission.

## Date Ranges

Select the time period to analyze using the date range selector. Available presets:

- Today
- Yesterday
- Last 30 minutes
- Last 12 hours
- Last 7 days
- Last 30 days
- Last 90 days
- Last 365 days
- Last week
- Last month
- **Custom**: pick any start and end date with the date picker

Your selection is saved between sessions.

## Comparison Mode

Compare the selected period against a reference period to spot trends. Options:

- **None**: show only the selected period
- **Previous period**: same duration, directly before the selected range
- **Previous year**: same date range one year ago
- **Previous year (same day of week)**: year-over-year with day-of-week alignment
- **Custom**: choose a custom comparison date range

When a comparison is active, charts display both periods with the comparison as a dashed line.

## Metrics

### Revenue & Sessions

A dual-axis line chart showing daily Revenue (left axis) and Sessions (right axis) over the selected period. Comparison data is overlaid when enabled.

### Average Order Value

The mean revenue per completed order for the period.

### Conversion Funnel

Tracks how visitors progress through the purchase flow:

1. Sessions
2. Added to Cart
3. Reached Checkout
4. Completed Checkout

### Payment Method Breakdown

Pie chart showing the split of completed orders by payment method:

- Stripe
- PayPal
- Free (zero-value orders)

### Traffic Sources

Pie chart showing where sessions originated:

- **Direct**: no referrer
- **Search**: Google, Bing, DuckDuckGo, Yahoo, Brave, Ecosia, Baidu, Yandex
- **Social**: YouTube, Twitter/X, Instagram, Discord, TikTok, Reddit, Twitch, LinkedIn, Pinterest
- **Unknown**: referrer present but uncategorized

### Device Breakdown

Split of sessions by device type: Desktop, Mobile, Tablet.

### Top Products by Revenue

Horizontal bar chart ranking products by revenue generated in the selected period.

## Exporting Data

Use the export buttons in the top-right of the analytics dashboard to download data for the currently selected date range:

- **CSV**: spreadsheet-compatible format with sales, sessions, and downloads
- **JSON**: structured data for programmatic use

## Subscription Analytics

Navigate to **Admin Panel > Analytics > Subscriptions** for subscription-specific metrics.

### Key Metrics

- **MRR** (Monthly Recurring Revenue): current month revenue from active subscriptions
- **ARR** (Annual Recurring Revenue): projected 12-month revenue based on MRR
- **Active Subscriptions**: count of currently active subscriptions
- **Monthly Churn Rate**: percentage of subscriptions cancelled in the last 30 days

### Status Breakdown

Count of subscriptions in each state:

- Active
- Pending Renewal
- Paused
- Cancelled
- Expired

### Customer Metrics

- New subscribers (last 30 days)
- Cancellations (last 30 days)
- Average subscription lifetime in days

### Recent Subscriptions

A table of the most recent subscriptions showing customer name, plan, price, status, and creation date.

## Permissions

| Permission     | Access                             |
| -------------- | ---------------------------------- |
| `owner`        | Full access                        |
| `viewInsights` | View all analytics and export data |
