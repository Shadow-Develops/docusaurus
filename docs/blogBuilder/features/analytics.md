---
sidebar_position: 6
---

# Analytics

Blog Builder includes a built-in analytics dashboard that tracks site visits, blog views, and user registrations. No third-party analytics service required.

:::info
Analytics data is recorded in real time as events occur. Charts reflect the database state at the time of the page load.
:::

## Admin Panel

- **Location:** Admin Panel > Analytics (`/admin/analytics`)
- **Required permission:** `viewInsights`

## Tracked Event Types

| Event          | When It's Recorded                                         |
| -------------- | ---------------------------------------------------------- |
| `visit`        | Every public page load (includes referrer and device info) |
| `blog_view`    | When a published blog post is opened                       |
| `registration` | When a new user account is created                         |

## Available Metrics

- Total page visits
- Unique sessions (approximated by IP)
- Daily visit chart
- Hourly distribution
- Day-of-week distribution
- Top referrer sources
- Referrer type breakdown (direct / social / search / unknown)
- Device type breakdown (desktop / tablet / mobile)
- Period-over-period comparison

## Referrer Classification

Referrers are automatically classified into the following categories:

| Type      | Examples                                                                           |
| --------- | ---------------------------------------------------------------------------------- |
| `social`  | YouTube, Twitter/X, Instagram, Facebook, TikTok, Reddit, Discord, Twitch, LinkedIn |
| `search`  | Google, Bing, DuckDuckGo, Yahoo, Brave Search                                      |
| `direct`  | No referrer header (direct traffic or dark social)                                 |
| `unknown` | Any other referrer not matched to the above                                        |

## Date Ranges

Select a time range using the preset picker:

- Today
- Yesterday
- Last 7 days
- Last 30 days
- Last 90 days
- Last 365 days
- Custom date range

## Period Comparison

Compare the selected period against:

- **Previous period** — The same duration immediately preceding the selected range
- **Previous year** — The same date range from one year ago (year-over-year)

Comparison values and percentage changes are shown alongside each metric.
