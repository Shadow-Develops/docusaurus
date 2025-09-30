---
sidebar_position: 4
---

# Configuration

You now have the server and files setup, so we can get to configuring the basics. So, we will go over every line of the `.env` file.\
Since we use keys for payment processors, login methods, and similar we want to store them safely within your `.env` file rather then the database.

## Basics

1. `LICENSE_KEY=`
   1. You get this from https://shadowdevs.com/license and should be a simple string. This your license from us to use Shadow License System.
2. `PORT=`
   1. By default its `5173`, but you can change it to any 4 character number.
3. `MONGO_URL=`
   1. The MongoDB URL for your database. If you do not add any password lock to your database and leave it as local only, you can use something like this: `mongodb://127.0.0.1:27017/shadowstore`
   2. If you also are using Shadow Store, then this database **NEEDS TO BE THE SAME AS SHADOW STORE**!
4. `ORIGIN=`
   1. Your full domain, include the `https://`. Ex: `https://shadowdevs.com`
5. `PUBLIC_DOMAIN=`
   1. Just your domain name for the website. Ex: `shadowdevs.com`

## Discord

6. `DISCORD_CLIENT_ID=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > General Information. It would be the `Application ID`.
7. `DISCORD_CLIENT_SECRET=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > OAuth2. It will be the `Client Secret`.
8. `BOT_TOKEN=`
   1. You can find this on the [Discord Developer Application](https://discord.com/developers/applications) > Bot. It is the `Token`.
9. `OWNERS=[""]`
   1. This must always be an array (`[""]`), and should contain the Discord User IDs for people you want to login with owner permissions.

## Advanced

These settings should remain the same way as seen below / provided in the download, unless you know what you are doing.

20. `BODY_SIZE_LIMIT=5368709120`
    1.  This increases the base SvelteKit body size limit to 10gbs.
21. `HOST=localhost`
    1.  This modifies how SvelteKit interacts with itself.
