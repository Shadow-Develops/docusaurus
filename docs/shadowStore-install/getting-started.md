---
sidebar_position: 2
---

# Getting Started

This document will help you get your server setup and ready to get Shadow Store running on it!

:::warning[Reminders]

You must be doing this on a VPS or dedicated server, and keep in mind all install guides are for an Ubuntu 24.04 LTS Linux VPS.\
We will also be using Cloudflare for all domain routing and SSL certificates.

:::

Make sure that you have read through our [prerequisites](/docs/shadowStore-install/prerequisites) to prevent any issues later on.\
And if you haven't already, make sure you have an [A record](https://www.cloudflare.com/learning/dns/dns-records/dns-a-record/) on your domain pointed to the IP of your server.

Before we begin, lets make sure everything is up to date and you have curl installed:

```bash
sudo apt update
sudo apt install curl
```

---

## Install Node.Js

Node.Js is a very popular framework for Javascript used to manage many different types of applications. Shadow Store is one type of application that requires it to be run, and since Node.Js has many versions we will be using Node Package Manager (NVM) to ensure the correct version is installed and running on our system.

Install NVM and the correct Node.Js version:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

nvm install 23.1.0
```

If you want to see if it has installed and is running the correct node version (23.1), you can run: `node --version` in your console.

## Install Nginx

Nginx is the program that we will use to route and proxy all Shadow Store so it properly appears to the world on your domain.

```bash
sudo apt install nginx
```

You will be prompted to press `Y` while installing, do it.\
Once it is installed, you should be able to navigate to your servers IP and you will be met with the default nginx page (seen below).\
`http://server_IP`

![nginx_default](https://shadowdevs.com/img/showcase/nginx_default.png)\
If you see this, you've got nginx install correctly! _Congrats!_

## Installing MongoDB

MongoDB is the database program which Shadow Store uses to store all its data. MongoDB is a JSON based database software which makes it easy to read and understand.
