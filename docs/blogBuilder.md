---
sidebar_position: 1
---

# Blog Builder

Welcome to the official documentation for [Blog Builder](https://shadowdevs.com/store/blogbuilder). Blog Builder is a self-hosted CMS platform designed for running blogs.

## FAQ

- **What kind of server do I need?**
  - Blog Builder requires a VPS or dedicated server running Ubuntu 22.04+ LTS. Shared hosting will not work. Node.js 20+ and MongoDB 6.0+ are required.
  - _Our friends over at [Nexus Hosting](https://billing.nexushosts.com/aff.php?aff=9) have wonderful hosting options._

- **Is a license required?**
  - Yes. A valid license key from [shadowdevs.com](https://shadowdevs.com/license) is required. The application verifies the license on startup.

- **What happens if the license server is unreachable?**
  - Blog Builder includes a 72-hour grace period. If the license server cannot be contacted at startup, the application continues running for up to 72 hours before it stops accepting requests.

- **How do users log in?**
  - Blog Builder uses passwordless email authentication. Users enter their email address and receive a 6-digit code by email. The code expires after 10 minutes.

- **How do I create the first admin account?**
  - Set the `OWNERS` environment variable to a comma-separated list of email addresses before starting the application. When those addresses first log in, they automatically receive the `owner` permission which grants full admin access.

- **Is email required?**
  - Yes. Email is required for the login system, without a working email provider configured, login codes cannot be sent and no one can sign in.

- **Where are uploaded files stored?**
  - All uploaded images and files are stored in the `uploads/` directory on the server and served via the `/cdn/` path. This directory is created automatically on first run and must be backed up separately.

- **Can I run multiple blogs?**
  - Yes. In addition to the main blog at `/blog`, any custom page with the "Has Blog" option enabled gets its own blog category at `/[page-slug]/blog`. Posts can be scoped to these categories independently.

- **Where do I get support?**
  - Join the [Shadow Development Discord](https://discord.gg/shadowdevs) or use the [Web Contact Page](https://shadowdevs.com/contactus) for support.
