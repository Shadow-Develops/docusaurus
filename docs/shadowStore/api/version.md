---
sidebar_position: 1
---

# Release Version

The `/api/version/PRODUCT_ID` GET endpoint allows you to retrieve and validate product release versions. It provides three main functions:

- Lists all available release versions for a product
- Checks if the latest version matches your input version
- Retrieves detailed information about a specific version

### Query Parameters

Using this URL queries you can get different information; however, if you just use the base URL you will get the latest version.

| Parameter | Type             | Description                                           | Example                                 |
| --------- | ---------------- | ----------------------------------------------------- | --------------------------------------- |
| getAll    | string (boolean) | If true, will provide an array of releases.           | `/api/version/PRODUCT_ID?getAll=true`   |
| version   | string           | Version number to validate                            | `/api/version/PRODUCT_ID?version=1.0.0` |
| match     | string           | Version number to check if the latest release matches | `/api/version/PRODUCT_ID?match=1.4.2`   |

## Responses

### Success

```json title="Default"
{
	"success": true,
	"data": {
		"title": "awd",
		"version": "2.3.0",
		"desc": "awdadw",
		"date": "2025-05-27T08:43:36.939Z",
		"updated": null
	}
}
```

```json title="?getAll=true"
{
	"success": true,
	"data": [
		{
			"title": "yes",
			"version": "1.0.0",
			"desc": "nga",
			"date": "2025-05-27T08:38:02.200Z",
			"updated": null
		},
		{
			"title": "mhm",
			"version": "2.0.0",
			"desc": "awda",
			"date": "2025-05-27T08:39:19.743Z",
			"updated": null
		},
		{
			"title": "aa",
			"version": "2.2.0",
			"desc": "a",
			"date": "2025-05-27T08:39:38.956Z",
			"updated": null
		},
		{
			"title": "awd",
			"version": "2.3.0",
			"desc": "awdadw",
			"date": "2025-05-27T08:43:36.939Z",
			"updated": null
		}
	]
}
```

```json title="?version=1.0.0"
{
	"success": true,
	"data": {
		"title": "yes",
		"version": "1.0.0",
		"desc": "nga",
		"date": "2025-05-27T08:38:02.200Z",
		"updated": null
	}
}
```

```json title="?match=2.2.0 (Not Latest)"
{
	"success": true,
	"latest": false,
	"data": {
		"latest": {
			"title": "awd",
			"version": "2.3.0",
			"desc": "awdadw",
			"date": "2025-05-27T08:43:36.939Z",
			"updated": null
		},
		"input": {
			"title": "aa",
			"version": "2.2.0",
			"desc": "a",
			"date": "2025-05-27T08:39:38.956Z",
			"updated": null
		}
	}
}
```

```json title="?match=2.3.0 (Latest)"
{
	"success": true,
	"latest": true,
	"data": {
		"title": "awd",
		"version": "2.3.0",
		"desc": "awdadw",
		"date": "2025-05-27T08:43:36.939Z",
		"updated": null
	}
}
```

### Failure

```json title="No releases"
{ "success": false, "message": "No Releases exist for that product." }
```

```json title="?match=2.4.0 (Invalid Version)"
{
	"success": true,
	"latest": false,
	"data": {
		"latest": {
			"title": "awd",
			"version": "2.3.0",
			"desc": "awdadw",
			"date": "2025-05-27T08:43:36.939Z",
			"updated": null
		},
		"input": { "error": "Input version does not exist." }
	}
}
```

```json title="?version=2.4.0 (Invalid Version)"
{ "success": false, "message": "No release with that version found." }
```

## Examples

### NodeJs Fetch

Please note that the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) was added to native Node.Js in version 18; however, you can use the NPM package [node-fetch](https://www.npmjs.com/package/node-fetch) for older versions.

```js
const response = await fetch(
	`https://example.com/api/version/${PRODUCT_ID}}$?match=${version}`,
	{
		method: 'GET',
		headers: {
			'content-type': 'application/json',
		},
	}
);
if (!response.ok) {
	console.log(
		`❌ Version Check Error: ${response.status}: ${response.statusText}`
	);
	return;
}
const versionData = await response.json();
if (!versionData.success) {
	console.log(
		`❌ Version Check Error: ${versionData.message || 'Unknown Error'}`
	);
} else if (versionData.success && versionData.latest) {
	console.log('✅ Running Latest Version.');
} else {
	console.log(
		`⚠  Update Required! Latest Version: ${versionData.data.latest.version} via https://example.com/releases/${PRODUCT_ID}`
	);
}
```

### NodeJs Native HTTP

_Note: Using fetch is recommended over this for applications that allow it!_

```js
const https = require('https');

https
	.get(
		`https://example.com/api/version/${PRODUCT_ID}?match=${version}`,
		(res) => {
			let data = '';

			res.on('data', (chunk) => {
				data += chunk;
			});

			res.on('end', () => {
				if (res.statusCode !== 200) {
					console.log(`❌ Version Check Error: ${res.statusCode}`);
					return;
				}

				const versionData = JSON.parse(data);
				if (!versionData.success) {
					console.log(
						`❌ Version Check Error: ${versionData.message || 'Unknown Error'}`
					);
				} else if (versionData.success && versionData.latest) {
					console.log('✅ Running Latest Version.');
				} else {
					console.log(
						`⚠  Update Required! Latest Version: ${versionData.data.latest.version} via https://example.com/releases/${PRODUCT_ID}`
					);
				}
			});
		}
	)
	.on('error', (err) => {
		console.log(`❌ Version Check Error: ${err.message}`);
	});
```

### LUA

```lua
local http = require("socket.http")
local ltn12 = require("ltn12")
local json = require("dkjson")

local response = {}
local code, status, headers = http.request {
	url = string.format("https://example.com/api/version/%s?match=%s", PRODUCT_ID, version),
	sink = ltn12.sink.table(response)
}

if code ~= 200 then
	print(string.format("❌ Version Check Error: %s", status))
	return
end

local versionData = json.decode(table.concat(response))
if not versionData.success then
	print(string.format("❌ Version Check Error: %s", versionData.message or "Unknown Error"))
elseif versionData.success and versionData.latest then
	print("✅ Running Latest Version.")
else
	print(string.format("⚠  Update Required! Latest Version: %s via https://example.com/releases/%s",
		versionData.data.latest.version, PRODUCT_ID))
end
```

### PHP

```php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://example.com/api/version/" . $PRODUCT_ID . "?match=" . $version);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
	echo "❌ Version Check Error: " . $httpCode . "\n";
	return;
}

$versionData = json_decode($response, true);
if (!$versionData['success']) {
	echo "❌ Version Check Error: " . ($versionData['message'] ?? 'Unknown Error') . "\n";
} elseif ($versionData['success'] && $versionData['latest']) {
	echo "✅ Running Latest Version.\n";
} else {
	echo "⚠  Update Required! Latest Version: " . $versionData['data']['latest']['version'] .
		 " via https://example.com/releases/" . $PRODUCT_ID . "\n";
}
```

### Python using http.client

```python
import http.client
import json

conn = http.client.HTTPSConnection("example.com")
conn.request("GET", f"/api/version/{PRODUCT_ID}?match={version}")
response = conn.getresponse()

if response.status != 200:
	print(f"❌ Version Check Error: {response.status}")
	conn.close()
	exit()

versionData = json.loads(response.read().decode())
conn.close()

if not versionData['success']:
	print(f"❌ Version Check Error: {versionData.get('message', 'Unknown Error')}")
elif versionData['success'] and versionData['latest']:
	print("✅ Running Latest Version.")
else:
	print(f"⚠  Update Required! Latest Version: {versionData['data']['latest']['version']} "
		  f"via https://example.com/releases/{PRODUCT_ID}")
```

### Python using requests

```python
import requests

try:
	response = requests.get(f"https://example.com/api/version/{PRODUCT_ID}?match={version}")
	response.raise_for_status()

	versionData = response.json()
	if not versionData['success']:
		print(f"❌ Version Check Error: {versionData.get('message', 'Unknown Error')}")
	elif versionData['success'] and versionData['latest']:
		print("✅ Running Latest Version.")
	else:
		print(f"⚠  Update Required! Latest Version: {versionData['data']['latest']['version']} "
			  f"via https://example.com/releases/{PRODUCT_ID}")

except requests.RequestException as e:
	print(f"❌ Version Check Error: {str(e)}")
```

### Powershell

```powershell
try {
	$response = Invoke-WebRequest -Uri "https://example.com/api/version/$PRODUCT_ID`?match=$version" -Method GET

	if ($response.StatusCode -ne 200) {
		Write-Host "❌ Version Check Error: $($response.StatusCode)"
		return
	}

	$versionData = $response.Content | ConvertFrom-Json
	if (-not $versionData.success) {
		Write-Host "❌ Version Check Error: $($versionData.message ?? 'Unknown Error')"
	}
	elseif ($versionData.success -and $versionData.latest) {
		Write-Host "✅ Running Latest Version."
	}
	else {
		Write-Host "⚠  Update Required! Latest Version: $($versionData.data.latest.version) via https://example.com/releases/$PRODUCT_ID"
	}
}
catch {
	Write-Host "❌ Version Check Error: $($_.Exception.Message)"
}
```

## Live/Editable Example

```jsx live
function VersionChecker(props) {
	const [versionStatus, setVersionStatus] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const domain = 'shadowdevs.com';
	const PRODUCT_ID = '24';
	const version = ''; // Adding a value will run the match query

	useEffect(() => {
		checkVersion();
	}, []);

	async function checkVersion() {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				`https://${domain}/api/version/${PRODUCT_ID}${
					match.length > 0 ? `?match=${version}` : ''
				}`,
				{
					method: 'GET',
					headers: {
						'content-type': 'application/json',
					},
				}
			);

			if (!response.ok) {
				const errorMsg = `Version Check Error: ${response.status}: ${response.statusText}`;
				setError(errorMsg);
				console.log(`❌ ${errorMsg}`);
				setLoading(false);
				return;
			}

			const versionData = await response.json();

			if (!versionData.success) {
				const errorMsg = `Version Check Error: ${
					versionData.message || 'Unknown Error'
				}`;
				setError(errorMsg);
			} else if (versionData.success && versionData.latest) {
				setVersionStatus({
					type: 'latest',
					message: 'Running Latest Version.',
				});
			} else {
				setVersionStatus({
					type: 'update',
					message: `Update Required! Latest Version: ${versionData.data.latest.version}`,
					url: `https://${domain}/releases/${PRODUCT_ID}`,
				});
			}
		} catch (err) {
			const errorMsg = `Network Error: ${err.message}`;
			setError(errorMsg);
		}

		setLoading(false);
	}

	return (
		<div
			style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}
		>
			<h2>Version Check Status</h2>

			{loading && <div style={{ color: '#666' }}>🔄 Checking version...</div>}

			{error && (
				<div
					style={{
						color: '#dc3545',
						padding: '10px',
						background: '#f8d7da',
						borderRadius: '4px',
					}}
				>
					❌ {error}
				</div>
			)}

			{versionStatus && versionStatus.type === 'latest' && (
				<div
					style={{
						color: '#28a745',
						padding: '10px',
						background: '#d4edda',
						borderRadius: '4px',
					}}
				>
					✅ {versionStatus.message}
				</div>
			)}

			{versionStatus && versionStatus.type === 'update' && (
				<div
					style={{
						color: '#856404',
						padding: '10px',
						background: '#fff3cd',
						borderRadius: '4px',
					}}
				>
					⚠️ {versionStatus.message}
					<br />
					<a
						href={versionStatus.url}
						target='_blank'
						rel='noopener noreferrer'
						style={{ color: '#004085' }}
					>
						Download Latest Version
					</a>
				</div>
			)}

			<button
				onClick={checkVersion}
				disabled={loading}
				style={{
					marginTop: '15px',
					padding: '8px 16px',
					background: '#007bff',
					color: 'white',
					border: 'none',
					borderRadius: '4px',
					cursor: loading ? 'not-allowed' : 'pointer',
					opacity: loading ? 0.6 : 1,
				}}
			>
				{loading ? 'Checking...' : 'Check Again'}
			</button>
		</div>
	);
}
```

### Result
