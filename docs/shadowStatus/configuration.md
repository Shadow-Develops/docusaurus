---
sidebar_position: 2
---

# Configuration

The `config.json` file controls your status page's appearance, behavior, and integrations.

## Basic Configuration

Here's a minimal configuration to get started:

```json title="config.json"
{
	"domain": "https://status.example.com",
	"siteSettings": {
		"siteName": "My Status Page",
		"siteDescription": "Service status for My Company"
	},
	"github": {
		"owner": "your-username",
		"repo": "your-repo-name"
	}
}
```

---

## Full Configuration Reference

### Site Settings

```json
{
	"domain": "https://status.example.com",
	"majorOutageThreshold": 2,
	"siteSettings": {
		"siteName": "My Status Page",
		"siteDescription": "Service status for My Company",
		"metaColor": "#3b5998"
	}
}
```

| Property                       | Type   | Default      | Description                                           |
| ------------------------------ | ------ | ------------ | ----------------------------------------------------- |
| `domain`                       | string | **Required** | Full URL of your status page                          |
| `majorOutageThreshold`         | number | `2`          | Consecutive failures before marking as "Major Outage" |
| `siteSettings.siteName`        | string | **Required** | Display name shown in header                          |
| `siteSettings.siteDescription` | string | `""`         | Description shown below the title                     |
| `siteSettings.metaColor`       | string | `"#3b5998"`  | Theme color for browser/embed meta tags               |

---

### GitHub Integration

```json
{
	"github": {
		"owner": "your-username",
		"repo": "your-repo-name",
		"issuesLabel": "incident",
		"manualMonitorLabel": "manual",
		"maintenanceLabel": "maintenance",
		"announcementLabel": "announce"
	}
}
```

| Property             | Type   | Default         | Description                     |
| -------------------- | ------ | --------------- | ------------------------------- |
| `owner`              | string | **Required**    | GitHub username or organization |
| `repo`               | string | **Required**    | Repository name                 |
| `issuesLabel`        | string | `"incident"`    | Label for incident issues       |
| `manualMonitorLabel` | string | `"manual"`      | Label for manual status updates |
| `maintenanceLabel`   | string | `"maintenance"` | Label for maintenance windows   |
| `announcementLabel`  | string | `"announce"`    | Label for announcements         |

:::tip
Create these labels in your GitHub repository before using them. Go to **Issues** > **Labels** > **New label**.
:::

---

### Design Options

```json
{
	"design": {
		"useLogo": "/img/logo.png",
		"logoDimensions": {
			"width": 200,
			"height": 50
		},
		"showSiteName": true,
		"showDescription": true,
		"showOverallStatus": true,
		"footer": {
			"enabled": true,
			"credits": true
		},
		"statusDot": {
			"enabled": {
				"group": true,
				"monitor": true
			},
			"animation": {
				"group": false,
				"monitor": "ping"
			}
		},
		"recentIncidents": {
			"active": true,
			"number": 5
		},
		"incident": {
			"showCommentAuthor": true,
			"showGithubLink": true
		},
		"announcement": {
			"showIcon": true,
			"showTitle": true,
			"showCommentAuthor": false,
			"showGithubLink": true
		}
	}
}
```

#### Logo & Header

| Property                | Type    | Default | Description                                |
| ----------------------- | ------- | ------- | ------------------------------------------ |
| `useLogo`               | string  | `null`  | Path to logo image (relative to `static/`) |
| `logoDimensions.width`  | number  | `200`   | Logo width in pixels                       |
| `logoDimensions.height` | number  | `50`    | Logo height in pixels                      |
| `showSiteName`          | boolean | `true`  | Show site name in header                   |
| `showDescription`       | boolean | `true`  | Show description below header              |
| `showOverallStatus`     | boolean | `true`  | Show overall status banner                 |

#### Footer

| Property         | Type    | Default | Description                                 |
| ---------------- | ------- | ------- | ------------------------------------------- |
| `footer.enabled` | boolean | `true`  | Show footer                                 |
| `footer.credits` | boolean | `true`  | Show "Powered by Shadow Development" credit |

#### Status Indicators

| Property                      | Type           | Default  | Description                                                |
| ----------------------------- | -------------- | -------- | ---------------------------------------------------------- |
| `statusDot.enabled.group`     | boolean        | `true`   | Show status dot on groups                                  |
| `statusDot.enabled.monitor`   | boolean        | `true`   | Show status dot on monitors                                |
| `statusDot.animation.group`   | string/boolean | `false`  | Animation for group dots (`"ping"`, `"pulse"`, or `false`) |
| `statusDot.animation.monitor` | string/boolean | `"ping"` | Animation for monitor dots                                 |

#### Incidents & Announcements

| Property                         | Type    | Default | Description                           |
| -------------------------------- | ------- | ------- | ------------------------------------- |
| `recentIncidents.active`         | boolean | `true`  | Show recent resolved incidents        |
| `recentIncidents.number`         | number  | `5`     | Number of recent incidents to show    |
| `incident.showCommentAuthor`     | boolean | `true`  | Show author on incident updates       |
| `incident.showGithubLink`        | boolean | `true`  | Link to GitHub issue                  |
| `announcement.showIcon`          | boolean | `true`  | Show icon on announcements            |
| `announcement.showTitle`         | boolean | `true`  | Show title on announcements           |
| `announcement.showCommentAuthor` | boolean | `false` | Show author on announcement updates   |
| `announcement.showGithubLink`    | boolean | `true`  | Link to GitHub issue on announcements |

---

### Page Width (`design.pageWidth`)

Controls the maximum width of the page content area.

```json
{
	"design": {
		"pageWidth": "auto"
	}
}
```

| Value    | CSS Class      | Description                                       |
| -------- | -------------- | ------------------------------------------------- |
| `"auto"` | _(calculated)_ | Default — width determined by layout/grid columns |
| `"3xl"`  | `max-w-3xl`    | ~768px                                            |
| `"4xl"`  | `max-w-4xl`    | ~896px                                            |
| `"5xl"`  | `max-w-5xl`    | ~1024px                                           |
| `"6xl"`  | `max-w-6xl`    | ~1152px                                           |
| `"7xl"`  | `max-w-7xl`    | ~1280px                                           |

When set to `"auto"` (or omitted), the width adapts based on the monitor layout and `gridColumns` setting. Set an explicit value to override this behavior.

---

### Monitor Display Settings (`design.monitors`)

Controls the monitor list layout and filter bar.

```json
{
	"design": {
		"monitors": {
			"layout": "default",
			"gridColumns": 2,
			"showFilterBar": true,
			"showSearch": true,
			"showStatusFilter": true,
			"showGroupFilter": true,
			"showCollapseButtons": true,
			"showMonitorType": true,
			"showSSL": true
		}
	}
}
```

| Setting               | Type    | Default     | Description                                                                                                  |
| --------------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------ |
| `layout`              | string  | `"default"` | Monitor layout: `"default"` (stacked cards), `"table"` (compact rows), or `"grid"` (multi-column cards)      |
| `gridColumns`         | number  | `2`         | Columns in grid layout. Page width auto-adjusts: 2→`max-w-3xl`, 3→`max-w-5xl`, 4→`max-w-6xl`, 5+→`max-w-7xl` |
| `showFilterBar`       | boolean | `true`      | Show or hide the entire search/filter bar                                                                    |
| `showSearch`          | boolean | `true`      | Show the text search input                                                                                   |
| `showStatusFilter`    | boolean | `true`      | Show the status filter dropdown                                                                              |
| `showGroupFilter`     | boolean | `true`      | Show the group filter dropdown                                                                               |
| `showCollapseButtons` | boolean | `true`      | Show expand/collapse all buttons (default layout only)                                                       |
| `showMonitorType`     | boolean | `true`      | Show the monitor type badge (e.g. `http`, `tcp`) on each monitor card                                        |
| `showSSL`             | boolean | `true`      | Show SSL days-remaining info on `ssl` monitors                                                               |

**Layout examples:**

Table layout (compact rows):

```json
"monitors": { "layout": "table" }
```

3-column grid:

```json
"monitors": { "layout": "grid", "gridColumns": 3 }
```

Minimal — no filter bar:

```json
"monitors": { "layout": "default", "showFilterBar": false }
```

:::note
In `table` and `grid` modes, groups are shown as divider labels rather than collapsible containers.
:::

---

### Monitor Search & Filter

The search and filter bar appears automatically above the monitor list. Each control can be individually disabled via `design.monitors` settings above.

| Control                   | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| **Search box**            | Filters monitors by name (case-insensitive substring match)                      |
| **Status dropdown**       | Shows only monitors with a specific status (e.g. Degraded, Major Outage)         |
| **Group dropdown**        | Shows only monitors from a selected group, or "Ungrouped" for top-level monitors |
| **Clear button**          | Resets all active filters (appears only when a filter is active)                 |
| **Expand / Collapse all** | Opens or closes all groups simultaneously (default layout only)                  |

When filters produce no results, a "No monitors match your filters." message is shown in place of the list.

---

### History Graph Settings (`design.historyGraph`)

Controls the 90-day history chart that appears below each monitor.

```json
{
	"design": {
		"historyGraph": {
			"defaultTab": "status",
			"showStatusTab": true,
			"showResponseTimeTab": true
		}
	}
}
```

| Setting               | Type    | Default    | Description                                               |
| --------------------- | ------- | ---------- | --------------------------------------------------------- |
| `defaultTab`          | string  | `"status"` | Which tab is shown by default: `"status"` or `"response"` |
| `showStatusTab`       | boolean | `true`     | Show the 90-day status bar chart tab                      |
| `showResponseTimeTab` | boolean | `true`     | Show the response time line graph tab                     |

**Examples:**

Show response time graph by default:

```json
"historyGraph": { "defaultTab": "response", "showStatusTab": true, "showResponseTimeTab": true }
```

Status bars only (no response time tab):

```json
"historyGraph": { "defaultTab": "status", "showStatusTab": true, "showResponseTimeTab": false }
```

Response time only (no status bars):

```json
"historyGraph": { "defaultTab": "response", "showStatusTab": false, "showResponseTimeTab": true }
```

:::note
When only one tab is enabled, the tab buttons are hidden and that view is shown directly with no toggle.
:::

---

### Page Section Order (`design.pageOrder`)

Controls the order in which page sections are rendered. Omit a section ID to hide it entirely.

```json
{
	"design": {
		"pageOrder": [
			"overall-status",
			"announcements",
			"active-incidents",
			"monitors",
			"upcoming-maintenance",
			"recent-incidents"
		]
	}
}
```

| Section ID             | Description                              |
| ---------------------- | ---------------------------------------- |
| `overall-status`       | The overall system status banner         |
| `announcements`        | Service announcements from GitHub Issues |
| `active-incidents`     | Currently active incidents               |
| `monitors`             | The full monitor list with filter bar    |
| `upcoming-maintenance` | Scheduled future maintenance windows     |
| `recent-incidents`     | Recently resolved incidents              |

Unknown IDs are silently ignored. To hide a section, remove it from the array.

---

### Overall Status Text

Customize the messages shown in the overall status banner:

```json
{
	"overallStatusText": {
		"operational": "All systems are running smoothly.",
		"degraded": "Some systems are experiencing issues.",
		"major": "We're experiencing a major outage.",
		"maintenance": "Scheduled maintenance is in progress."
	}
}
```

---

### Status Levels

Define the available status levels for incidents and monitors:

```json
{
	"statusLevels": {
		"operational": {
			"label": "Operational",
			"color": "success",
			"priority": 0
		},
		"degraded": {
			"label": "Degraded Performance",
			"color": "warning",
			"priority": 1
		},
		"partial": {
			"label": "Partial Outage",
			"color": "warning",
			"priority": 2
		},
		"major": {
			"label": "Major Outage",
			"color": "error",
			"priority": 3
		},
		"maintenance": {
			"label": "Under Maintenance",
			"color": "info",
			"priority": 4
		}
	}
}
```

| Property   | Type   | Description                                                          |
| ---------- | ------ | -------------------------------------------------------------------- |
| `label`    | string | Display text for this status                                         |
| `color`    | string | Color theme: `"success"`, `"warning"`, `"error"`, or `"info"`        |
| `priority` | number | Higher number = worse status. Used to determine overall/group status |

:::info[Priority Logic]
When calculating overall or group status, the system uses the highest priority among all monitors. For example, if one monitor is `major` (priority 3) and others are `operational` (priority 0), the overall status shows "Major Outage".

Exception: `maintenance` (priority 4) only applies during active maintenance windows, not as a "worst" status.
:::

---

### Notifications

Configure Discord and webhook notifications:

```json
{
	"notifications": {
		"defaultEnabled": true,
		"numberOfDown": 1,
		"discord": {
			"enabled": true,
			"defaultPingRole": "",
			"pingForReturn": false
		},
		"webhook": false
	}
}
```

| Property                  | Type    | Default | Description                                                   |
| ------------------------- | ------- | ------- | ------------------------------------------------------------- |
| `defaultEnabled`          | boolean | `true`  | Enable notifications by default for monitors                  |
| `numberOfDown`            | number  | `1`     | Consecutive failures before sending notification              |
| `discord.enabled`         | boolean | `false` | Enable Discord notifications                                  |
| `discord.defaultPingRole` | string  | `""`    | Role to ping: `""` (none), `"everyone"`, `"here"`, or role ID |
| `discord.pingForReturn`   | boolean | `false` | Ping when service recovers                                    |
| `webhook`                 | boolean | `false` | Enable generic webhook notifications                          |

See the [Notifications guide](./notifications) for detailed setup instructions.

---

## Complete Example

<details>
<summary>Click to expand full config.json example</summary>

```json title="config.json"
{
	"domain": "https://status.example.com",
	"majorOutageThreshold": 2,
	"siteSettings": {
		"siteName": "Example Status",
		"siteDescription": "Real-time status for Example services",
		"metaColor": "#3b5998"
	},
	"github": {
		"owner": "example-org",
		"repo": "status-page",
		"issuesLabel": "incident",
		"manualMonitorLabel": "manual",
		"maintenanceLabel": "maintenance",
		"announcementLabel": "announce"
	},
	"design": {
		"useLogo": "/img/logo.png",
		"logoDimensions": {
			"width": 200,
			"height": 50
		},
		"showSiteName": true,
		"showDescription": false,
		"showOverallStatus": true,
		"footer": {
			"enabled": true,
			"credits": true
		},
		"statusDot": {
			"enabled": {
				"group": true,
				"monitor": true
			},
			"animation": {
				"group": false,
				"monitor": "ping"
			}
		},
		"recentIncidents": {
			"active": true,
			"number": 5
		},
		"incident": {
			"showCommentAuthor": false,
			"showGithubLink": true
		},
		"announcement": {
			"showIcon": true,
			"showTitle": false,
			"showCommentAuthor": false,
			"showGithubLink": true
		},
		"pageWidth": "auto",
		"historyGraph": {
			"defaultTab": "status",
			"showStatusTab": true,
			"showResponseTimeTab": true
		},
		"monitors": {
			"layout": "default",
			"gridColumns": 2,
			"showFilterBar": true,
			"showSearch": true,
			"showStatusFilter": true,
			"showGroupFilter": true,
			"showCollapseButtons": true,
			"showMonitorType": true,
			"showSSL": true
		},
		"pageOrder": [
			"overall-status",
			"announcements",
			"active-incidents",
			"monitors",
			"upcoming-maintenance",
			"recent-incidents"
		]
	},
	"overallStatusText": {
		"operational": "All systems are running smoothly.",
		"degraded": "Some systems are experiencing issues.",
		"major": "We're experiencing a major outage.",
		"maintenance": "Scheduled maintenance is in progress."
	},
	"statusLevels": {
		"operational": {
			"label": "Operational",
			"color": "success",
			"priority": 0
		},
		"degraded": {
			"label": "Degraded Performance",
			"color": "warning",
			"priority": 1
		},
		"partial": {
			"label": "Partial Outage",
			"color": "warning",
			"priority": 2
		},
		"major": {
			"label": "Major Outage",
			"color": "error",
			"priority": 3
		},
		"maintenance": {
			"label": "Under Maintenance",
			"color": "info",
			"priority": 4
		}
	},
	"notifications": {
		"defaultEnabled": true,
		"numberOfDown": 1,
		"discord": {
			"enabled": true,
			"defaultPingRole": "",
			"pingForReturn": false
		},
		"webhook": false
	}
}
```

</details>
