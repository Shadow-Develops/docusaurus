---
sidebar_position: 5
---

# Starting Community Template

You're almost there! With the server configured and files uploaded, these final steps will get Community Template running.

> Make sure your [license key](https://shadowdevs.com/license) is in your `.env` file before continuing.

Navigate to your installation folder:

```bash
cd /home/communitytemplate
```

_Replace `communitytemplate` with whatever you named your folder._

Install the Node.js dependencies:

```bash
npm install
```

Start the application with Forever:

```bash
forever start .
```

_To run without Forever (e.g., for testing), use `node .` instead._

---

**Congrats!**

Community Template is now running. Open your domain in a browser and you should see your new site. Head to `/admin` to start configuring your site settings, home page sections, navbar, and more.
