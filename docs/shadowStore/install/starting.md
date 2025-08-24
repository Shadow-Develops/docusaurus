---
sidebar_position: 5
---

# Staring Shadow Store

Wonderful job, you have now gotten Shadow Store fully setup and ready to start. These steps should be very easy.

> Ensure that you have [your license key](https://shadowdevs.com/license) within your `.env` file.

Now, we need to make sure that you are in the folder.

```bash
cd /home/shadowstore
```

_Replace `shadowstore` with whatever you named the folder._

Now, install the node packages needed:

```bash
npm install
```

Once that has finished, we can start up the application using `forever`.

```bash
forever start .
```

_If you wish to just test it or run it outside of `forever`, then you can just do `node .`._

---

**Congrats!!**

You have now successfully setup and started Shadow Store! Now, you can enjoy setting up the rest of the settings within the admin panel.
