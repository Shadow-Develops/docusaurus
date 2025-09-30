---
sidebar_position: 1
---

# Verify (License System)

If you own and use the [license system](https://shadowdevs.com/store/licensesystem) within Shadow Store, then you can use this api route.

The verification API returns data about the license and product based on the input license key via the request header.\
You will be using a POST method to make a request to `example.com/api/verify` and putting the license key inside the header.

## Responses

```js title="Success"
{
  success: true,
  data: {
    id: 1,
    user: '291528890931871744',
    product: { id: 1, name: 'Product' }
  }
}
```

```js title="Failures"
// Invalid Key
{
  success: false,
  msg: "Invalid Key Provided. | The key you are looking for doesn't exist within the database."
}
// Disabled
{
  success: false,
  msg: 'Disabled Key | The key is currently disabled and unable to be authorized.'
}
// Wrong IP
{
  success: false,
  msg: "Mismatch IP | The provided IP doesn't match the IP linked to the key."
}
```

## Examples

:::warning[WIP]
We are still writing out all the examples!
:::

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
a;
```

### LUA

```lua

```

### PHP

```php

```

### Python using http.client

```py

```

### Python using requests

```py

```

### Powershell

```shell

```
