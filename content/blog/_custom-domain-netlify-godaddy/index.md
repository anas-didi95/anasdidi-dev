---
title: "Configure custom domain for Netlify with GoDaddy"
description: "Step-by-step instruction on how to configure custom domain for Netlify with Godaddy."
author: "Anas Juwaidi"
date: "2020-06-19"
tags: ["dns","netlify","godaddy"]
---

By default, any site deployed to Netlify will be provide with Netlify subdomain using the following template: `[site-name].netlify.app`

However, if we already have an external registered domain from other provider such as GoDaddy, we can configure the DNS provider to point to your domain to Netlify.

Following guide will provide on how to configure DNS from GoDaddy to point to Netlify.

---

## Table of contents
* [Domain Settings in Netlify](#domain-settings-netlify)
* [DNS Configuration](#dns-configuration)
* [References](#references)

---

<a name="domain-settings-netlify"></a>
## Domain Settings in Netlify
Login to Netlify Dashboard, open your project and click **Domain settings**.

![Netlify Dashboard](./0-netlify-dashboard.png)

Add click **Add domain alias** under **Custom domains** box.

Next, enter the domain registered with GoDaddy and click **Yes, add domain** to confirm the domain verification.

![Add custom domain](./1-netlify-add-custom-domain.png)

---

<a name="dns-configuration"></a>
## DNS Configuration

After added, Netlify will try to propagate the DNS changes with GoDaddy. To continue, click **Check DNS configuration** for details required for GoDaddy configuration.

![Check DNS configuration](./2.0-check-dns-configuration.png)

---

<a name="references"></a>
## References

* [Custom Domains in Netlify](https://serverless-stack.com/chapters/custom-domain-in-netlify.html)
* [Configure external DNS for a custom domain](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/#configure-a-subdomain)

