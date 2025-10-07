---
sidebar_position: 3
---

# API Requests

The verification API returns data about the license and product based on the input license key via the request header.\
You will be using a POST method to make a request to `/api/verify` and putting the license key inside the header.

## Responses

### Success

```json
{
	"success": true,
	"data": {
		"id": 1,
		"user": "291528890931871744",
		"product": { "id": 1, "name": "Product" }
	}
}
```

### Failure

```json title="Invalid Key"
{
	"success": false,
	"msg": "Invalid Key Provided. | The key you are looking for doesn't exist within the database."
}
```

```json title="Disabled"
{
	"success": false,
	"msg": "Disabled Key | The key is currently disabled and unable to be authorized."
}
```

```json title="Wrong IP"
{
	"success": false,
	"msg": "Mismatch IP | The provided IP doesn't match the IP linked to the key."
}
```

## Examples

### NodeJs Fetch

Please note that the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) was added to native Node.Js in version 18; however, you can use the NPM package [node-fetch](https://www.npmjs.com/package/node-fetch) for older versions.

```js
const response = await fetch('https://example.com/api/verify', {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		key: 'LICENSE_KEY', // Should be a string
	},
	signal: AbortSignal.timeout(10000), // 10 second timeout
});

if (!response.ok) {
	console.log(
		`HTTP ${response.status}: ${response.statusText || 'Internal Server Error'}`
	);
	process.exit(); // Stop application from running
}
const licenseData = await response.json();

if (!licenseData.success) {
	console.log(`Invalid Site License Key | Error Message:\n${licenseData.msg}`);
	process.exit();
}
if (licenseData.data.product.id !== PRODUCT_ID) {
	// PRODUCT_ID must be a number, not a string!
	console.log(
		`Invalid Site License Key | Error Message: Using license key for a different product.`
	);
	process.exit();
}
```

### NodeJs Native HTTP

_Note: Using fetch is recommended over this for applications that allow it!_

```js
const http = require('http');

const options = {
	hostname: 'example.com',
	port: 443,
	path: '/api/verify',
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		key: 'LICENSE_KEY', // Should be a string
	},
};

const req = http.request(options, (res) => {
	let data = '';

	res.on('data', (chunk) => {
		data += chunk;
	});

	res.on('end', () => {
		if (res.statusCode !== 200) {
			console.log(
				`HTTP ${res.statusCode}: ${
					res.statusMessage || 'Internal Server Error'
				}`
			);
			process.exit();
		}

		const licenseData = JSON.parse(data);

		if (!licenseData.success) {
			console.log(
				`Invalid Site License Key | Error Message:\n${licenseData.msg}`
			);
			process.exit();
		}
		if (licenseData.data.product.id !== PRODUCT_ID) {
			// PRODUCT_ID must be a number, not a string!
			console.log(
				`Invalid Site License Key | Error Message: Using license key for a different product.`
			);
			process.exit();
		}
	});
});

req.on('error', (error) => {
	console.error('Error:', error);
	process.exit();
});

// Add timeout of 10 seconds
req.setTimeout(10000, () => {
	req.destroy();
	console.log('Request timeout');
	process.exit();
});

req.end();
```

### LUA

```lua
local http = require("http")
local https = require("https")
local json = require("json")

local req = https.request{
	url = "https://example.com/api/verify",
	method = "POST",
	headers = {
		["content-type"] = "application/json",
		["key"] = "LICENSE_KEY" -- Should be a string
	},
	timeout = 10
}

local response_body, status_code, headers = req:send()

if status_code ~= 200 then
	print(string.format("HTTP %d: %s", status_code, "Internal Server Error"))
	os.exit()
end

local licenseData = json.decode(response_body)

if not licenseData.success then
	print(string.format("Invalid Site License Key | Error Message:\n%s", licenseData.msg))
	os.exit()
end

if licenseData.data.product.id ~= PRODUCT_ID then
	-- PRODUCT_ID must be a number, not a string!
	print("Invalid Site License Key | Error Message: Using license key for a different product.")
	os.exit()
end
```

### PHP

```php
<?php
$ch = curl_init();

curl_setopt_array($ch, [
	CURLOPT_URL => 'https://example.com/api/verify',
	CURLOPT_POST => true,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_TIMEOUT => 10,
	CURLOPT_HTTPHEADER => [
		'Content-Type: application/json',
		'key: LICENSE_KEY' // Should be a string
	]
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode !== 200) {
	die("HTTP $httpCode: Internal Server Error\n");
}

$licenseData = json_decode($response, true);

if (!$licenseData['success']) {
	die("Invalid Site License Key | Error Message:\n" . $licenseData['msg'] . "\n");
}

if ($licenseData['data']['product']['id'] !== PRODUCT_ID) {
	// PRODUCT_ID must be a number, not a string!
	die("Invalid Site License Key | Error Message: Using license key for a different product.\n");
}
```

### Python using http.client

```python
import http.client
import json
import sys

conn = http.client.HTTPSConnection("example.com", timeout=10)

headers = {
	'content-type': 'application/json',
	'key': 'LICENSE_KEY'  # Should be a string
}

try:
	conn.request("POST", "/api/verify", headers=headers)
	response = conn.getresponse()

	if response.status != 200:
		print(f"HTTP {response.status}: {response.reason or 'Internal Server Error'}")
		sys.exit()

	licenseData = json.loads(response.read().decode())

	if not licenseData['success']:
		print(f"Invalid Site License Key | Error Message:\n{licenseData['msg']}")
		sys.exit()

	if licenseData['data']['product']['id'] != PRODUCT_ID:
		# PRODUCT_ID must be a number, not a string!
		print("Invalid Site License Key | Error Message: Using license key for a different product.")
		sys.exit()

finally:
	conn.close()
```

### Python using requests

```python
import requests
import sys

try:
	response = requests.post(
		'https://example.com/api/verify',
		headers={
			'content-type': 'application/json',
			'key': 'LICENSE_KEY'  # Should be a string
		},
		timeout=10
	)

	if response.status_code != 200:
		print(f"HTTP {response.status_code}: {response.reason or 'Internal Server Error'}")
		sys.exit()

	licenseData = response.json()

	if not licenseData['success']:
		print(f"Invalid Site License Key | Error Message:\n{licenseData['msg']}")
		sys.exit()

	if licenseData['data']['product']['id'] != PRODUCT_ID:
		# PRODUCT_ID must be a number, not a string!
		print("Invalid Site License Key | Error Message: Using license key for a different product.")
		sys.exit()

except requests.exceptions.RequestException as e:
	print(f"Request failed: {e}")
	sys.exit()
```

### Powershell

```powershell
$headers = @{
	'content-type' = 'application/json'
	'key' = 'LICENSE_KEY' # Should be a string
}

try {
	$response = Invoke-WebRequest -Uri 'https://example.com/api/verify' `
		-Method 'POST' `
		-Headers $headers `
		-TimeoutSec 10

	if ($response.StatusCode -ne 200) {
		Write-Host "HTTP $($response.StatusCode): Internal Server Error"
		exit
	}

	$licenseData = $response.Content | ConvertFrom-Json

	if (-not $licenseData.success) {
		Write-Host "Invalid Site License Key | Error Message:`n$($licenseData.msg)"
		exit
	}

	if ($licenseData.data.product.id -ne $PRODUCT_ID) {
		# $PRODUCT_ID must be a number, not a string!
		Write-Host "Invalid Site License Key | Error Message: Using license key for a different product."
		exit
	}
}
catch {
	Write-Host "Request failed: $_"
	exit
}
```
