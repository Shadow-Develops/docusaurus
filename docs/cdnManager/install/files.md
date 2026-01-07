---
sidebar_position: 3
---

# Files & Nginx

Now it is time to actually install the files, database, and setup Nginx! Please ensure you have completed the steps within [Getting Started](/cdnManager/install/getting-started) first!

:::info
We will be using [WinSCP](https://winscp.net/eng/index.php) to all file viewing, editing, and transferring. You may use another SFTP viewer if you prefer.
:::

## Files

This is likely the easiest part of the guide, as it is just creating some folders and dragging files.

1. Open your `/home` folder and create a new folder called `cdnmanager`. _(You may call it anything you like, just keep in mind the guide will refer to it as `cdnmanager`.)_
2. Using WinSCP, copy and paste the contents of the zip you downloaded from our website into `/home/cdnmanager`.
   ![cdnmanager-WinSCP](/img/docs/cdnmanager-WinSCP.png)

## Nginx Configuration

Using WinSCP please head to `/etc/nginx/sites-available/default` as it is the default Nginx site configuration file.\
Delete all the default contents from the file, if you haven't made any changes to it before.

Replace the contents with the below and ensure you set the correct `port` and `domain` based on your needs.

```nginx
server {

  server_name example.com; # Change domain to your domain

  location / {
    proxy_pass http://localhost:3001; # Change the port if needed.
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
  }
    error_page 502 =500 /502.html;
    location = /502.html {
        root  /home/cdnmanager/static;
    }
}
```

Now, head to `/etc/nginx/` and open the `ngnix.conf` file, then you will add `client_max_body_size 50G;` inside your `http` section.\
Your `http` section, if you've not made any other edits, will look like this:\
_Note: The 50G stands for 50 gigabytes, and you may modify this if you need to upload bigger files! Looking up the nginx documentation can be helpful._

```nginx
http {

	##
	# Basic Settings
	##

	sendfile on;
	tcp_nopush on;
	types_hash_max_size 2048;
	# server_tokens off;

	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# SSL Settings
	##

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	##
	# Logging Settings
	##

	access_log /var/log/nginx/access.log;

	##
	# Gzip Settings
	##

	gzip on;

	# gzip_vary on;
	# gzip_proxied any;
	# gzip_comp_level 6;
	# gzip_buffers 16 8k;
	# gzip_http_version 1.1;
	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

	##
	# Virtual Host Configs
	##

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;

	client_max_body_size 50G;
}
```

Once you've set everything correctly, save the file, and then restart Nginx:

```bash
sudo systemctl restart nginx
```

You can check the status with `sudo systemctl status nginx` if you want!

### Issue SSL Certificate

We will be using Certbot to issue a SSL certificate, so we want to run the following command but make sure to replace `example.com` with your domain.

```bash
sudo certbot --nginx -d example.com
```

You will get asked for some details, like your email (but it isn't shown to the public).\
When asked about a redirect method, select option `2`.\
Now that you have issued a certificate, we will want to make sure it self renews:

```bash
sudo certbot renew --dry-run
```

## Database

This is 100% the easiest part of the install process, since you have to do NOTHING! Within the `server.js` file, we have written code to automatically populate the database. This means, as long as you have MongoDB running properly then once you configure CDN Manager, the database will get automatically populate with the base data, and if you ever break the database the script will automatically fix any major errors.
