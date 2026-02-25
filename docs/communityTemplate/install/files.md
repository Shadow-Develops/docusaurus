---
sidebar_position: 3
---

# Files & Nginx

Now it's time to upload the Community Template files, configure Nginx, and set up SSL. Make sure you've completed [Getting Started](./getting-started) before continuing.

:::info
This guide uses [WinSCP](https://winscp.net/eng/index.php) for file transfers and editing. Any SFTP client will work.
:::

## Upload Files

1. In your `/home` directory on the server, create a new folder called `communitytemplate`.\
   _(You can name it anything - just remember the name for future steps.)_

2. Extract the zip you downloaded from [shadowdevs.com](https://shadowdevs.com) and copy its contents into `/home/communitytemplate` using WinSCP.

## Nginx Configuration

Open `/etc/nginx/sites-available/default` in WinSCP. Delete all existing content and replace it with the following, updating the domain and port to match your setup:

```nginx
server {

  server_name community.yourdomain.com; # Replace with your domain

  location / {
    proxy_pass http://localhost:5173; # Match your PORT from .env
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
  }

  error_page 502 =500 /502.html;
  location = /502.html {
    root /home/communitytemplate/static;
  }
}
```

Next, open `/etc/nginx/nginx.conf` and add `client_max_body_size 50G;` inside the `http { }` block. If you haven't edited this file before, it will look something like this (add the line near the bottom of the block):

```nginx
http {

	##
	# Basic Settings
	##

	sendfile on;
	tcp_nopush on;
	types_hash_max_size 2048;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# SSL Settings
	##

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
	ssl_prefer_server_ciphers on;

	##
	# Logging Settings
	##

	access_log /var/log/nginx/access.log;

	##
	# Gzip Settings
	##

	gzip on;

	##
	# Virtual Host Configs
	##

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;

	client_max_body_size 50G;
}
```

_Adjust `50G` if you want to restrict the maximum upload size._

Save and restart Nginx:

```bash
sudo systemctl restart nginx
```

Verify with: `sudo systemctl status nginx`

### Issue SSL Certificate

Run Certbot to get a free SSL certificate. Replace `community.yourdomain.com` with your actual domain:

```bash
sudo certbot --nginx -d community.yourdomain.com
```

You'll be asked for your email address (not shown publicly). When prompted about redirects, select option `2` to redirect all HTTP traffic to HTTPS.

Set up automatic renewal:

```bash
sudo certbot renew --dry-run
```

## Database

No action needed here. Community Template automatically initializes the MongoDB database on first startup - it creates all required collections, indexes, and seeds default settings automatically.
