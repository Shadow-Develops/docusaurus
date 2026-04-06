---
sidebar_position: 1
---

# Requirements

:::info[Hosting Notice]
Blog Builder is a Node.js based application, so it requires a VPS or Dedicated server to operate. Shared hosting will NOT work.
:::

With Blog Builder being a Node.js based website in mind, this document covers the assets that are needed and recommended to run everything smoothly.

> Keep in mind all documentation for installation are designed around using an Ubuntu 24.04 LTS Linux VPS. Ubuntu 22.04 LTS or similar are likely to work just the same as well; however, we do not currently offer documentation for any other OS.

## What is needed?

- VPS or Dedicated Server (Ubuntu is recommended OS)
- Your own Domain (EX: `yourdomain.com`)
- A valid license key from [shadowdevs.com](https://shadowdevs.com/store/blogbuilder)
- A MongoDB connection string (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- SMTP credentials or a [SendGrid](https://sendgrid.com/) API key (required for login to work)

### System Requirements

<table class="w-full">
  <thead>
    <tr>
      <th>Minimum</th>
      <th>Recommended</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>OS:</b> Ubuntu 24.04 LTS<br/><b>CPU Cores:</b> 1<br/><b>RAM:</b> 1gb<br/><b>Storage:</b> 10gb</td>
      <td><b>OS:</b> Ubuntu 24.04 LTS<br/><b>CPU Cores:</b> 2<br/><b>RAM:</b> 2gb<br/><b>Storage:</b> 20gb+</td>
    </tr>
  </tbody>
</table>

_Disk requirements increase with the number of uploaded images. Each uploaded image generates a WebP version, a thumbnail, and a blur placeholder._

---

### Need a Server?

If you are looking for quality and reliable hosting then check out [Nexus Hosting](https://billing.nexushosts.com/aff.php?aff=9)! They are what we use and recommend with their amazing reliability, quality, and affordability.
