---
title: System Mapping
description: A description of systems
priority: 90
date_published: '2019-05-08'
date_modified: '2019-05-08'
---

## Overview

This document is meant to allow hackers to skip the recon stage and get straight into trying to find vulnerabilities. It outlines the in-scope domains, the software behind them, and a brief description of their functions.

Our responsible disclosure program is run on HackerOne - [https://hackerone.com/mycrypto](https://hackerone.com/mycrypto).

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

<!-- Domain: *.mycrypto -->

### (www.)mycrypto.com

**What it does**

This is the domain for our main application - the interface for the blockchain. This is where users will come to interact with their funds, and sign transactions with private keys.

**What to look for**

Since the platform is non-custodial (meaning we don't store users' keys), we are especially interested in how a bad actor could exploit potential attack vectors to steal user funds/keys.

The application is open-source on GitHub https://github.com/mycryptohq/mycrypto.

**What it runs on**

The domain itself points to an AWS instance and is delivered using CloudFront.

It is built with Typescript and Javascript (React framework).

https://builtwith.com/mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### buy.mycrypto.com

**What it does**

This is an application that uses Simplex to enable users to purchase ETH and BTC with a credit card. The purchasing process is handled by Simplex but the UI is hosted by MyCrypto.

**What to look for**

The application is a simple UI form that redirects the user to Simplex. We are interested in ways the application can be exploited to redirect users away from Simplex. Since it is stateless, your best bet is reflected XSS (type II) or DOM-based XSS (type-0).

The application is open-source on GitHub: https://github.com/MyCryptoHQ/buy.mycrypto.com.

**What it runs on**

The application is delivered via Cloudflare and runs on an Express server.

It is built with Javascript.

https://builtwith.com/buy.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### support.mycrypto.com

**What it does**

This is our knowledge base, which contains a lot of articles that we point users to when they are in need of support. It is viewed as a trusted source of truth for users.

**What to look for**

As the application is viewed as a trusted source of truth, we are interested in ways a bad actor could modify the contents of an article to misinform users or otherwise use the platform to give false information.

The application is open-source on GitHub: https://github.com/MyCryptoHQ/knowledge-base.

**What it runs on**

The application is delivered via GitHub pages.

It is built with Typescript and Javascript (Gatsby framework).

https://builtwith.com/support.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### overflow.mycrypto.com

**What it does**

This is a product page for some of our peripheral systems/applications that we use within our main product (mycrypto.com). 

**What to look for**

The application is essentially a directory for some of the other products we manage. Your route is reflected XSS (type II) or DOM-based XSS (type-0). 

The application is open-source on GitHub: https://github.com/MyCryptoHQ/Overflow.

**What it runs on**

The application is delivered via GitHub pages.

It is built with Typescript and Javascript (React framework).

https://builtwith.com/overflow.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### about.mycrypto.com

**What it does**

An application detailing who is on the team and any job opening we have available.

**What to look for**

The application is essentially a directory of jobs and people who work for MyCrypto. Links to dead off-domain profiles that can be harnessed to give false information to users is one attack vector that we are interested in.

The application is open-source on GitHub: https://github.com/MyCryptoHQ/about.mycrypto.com.

**What it runs on**

The application is delivered via GitHub pages and cached behind Cloudfront.

It is built with Javascript.

https://builtwith.com/about.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### beta.mycrypto.com

**What it does**

This sub-domain for our main application is our public staging area for all new features that will go into production after the development cycle is completed.

**What to look for**

Since the platform is non-custodial (meaning we don't store users keys), we are especially interested in how a bad actor could exploit potential attack vectors to steal user funds/keys (such as altering a transaction to sign).

The application is open-source on GitHub: https://github.com/mycryptohq/mycrypto.

**What it runs on**

The application is delivered via GitHub pages.

It is built with Typescript and Javascript (React framework).

https://builtwith.com/beta.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### download.mycrypto.com

**What it does**

This application offers a download (Electron app) of our main product (mycrypto.com) for users to run offline. There are alow tools available also on the site that can be used to verify download checksums.

**What to look for**

As the downloaded application is utilized for signing transactions, we are interested in invalid signed checksums being published/spoofed or any methods that can be used to circumvent the legitimate application from being downloaded.

The application is open-source on GitHub: https://github.com/MyCryptoHQ/download.mycrypto.com.

The downloaded application is generated with Electron based on our main repo https://github.com/MyCryptoHQ/mycrypto

**What it runs on**

The domain itself points to an AWS instance and delivered using CloudFront.

It is built with Typescript and Javascript.

https://builtwith.com/download.mycrypto.com

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

<!-- Domain: *.etherscamdb.info -->

### etherscamdb.info

**What it does**

This application indexes details on scams within the ecosystem, read from a YAML file. It offers a simple GET API to return various pieces of data from the YAML file.

It has reporting functionality by which users can input data and submit to a PHP script hosted on a separate server.

**What to look for**

As the application is a source of trust for users, we are interested in ways you can harness the application to deliver bad data (i.e.: XSS or unvalidated redirects). 

The application is open-source on GitHub: https://github.com/MrLuit/EtherScamDB.

**What it runs on**

It is hosted on a Ubuntu server, serving via Express server.

It is built with Javascript (NodeJS).

https://builtwith.com/etherscamdb.info

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

<!-- Domain: *.cryptoscamdb.org -->

### cryptoscamdb.org

**What it does**

This application indexes details on scams within the ecosystem, read from a YAML file. It offers a simple GET API to return various pieces of data from the YAML file.

It has reporting functionality by which users can input data and submit to a script hosted on a separate server.

**What to look for**

As the application is a source of trust for users, we are interested in ways a bad actor can harness the application to deliver bad data (i.e.: XSS or invalidated redirects). Including the frontend, we are interested in any unauthorized successful requests on restricted endpoints.

The application is open-source on GitHub https://github.com/CryptoScamDB/frontend-gatsby with a backend API https://github.com/CryptoScamDB/api.cryptoscamdb.org.

**What it runs on**

It is served via AmazonS3 and cached with Cloudfront.

It is built with Typescript and Javascript (Gatsby framework).

https://builtwith.com/cryptoscamdb.org

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

<!-- Domain *.ambo.io -->

### ambo.io

**What it does**

This is the homepage of Ambo, which details the product and provides download links

**What to look for**

As it is the source of truth for anything Ambo related, we are interested in ways a bad actor can modify data without authorization. There is a CMS backend, so we are interested in any unauthorized access and other exploits that would allow someone to post malicious content.

**What it runs on**

It is served via Godaddy. 

It is built with PHP 5.6 (Wordpress platform).

https://builtwith.com/ambo.io

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### ambo.herokuapp.com

**What it does**

This is a communication proxy between the Ambo iOS app and third-party APIs. It does inbound and outbound data transfers - including creating 0x protocol orders.

**What to look for**

No user secrets are stored/sent here but because sends data to the app, we are interested in modifications to the requests that can confuse users, display bad data, and/or alter 0x order creation.

**What it runs on**

It is served on a Heroku Dyno.

It is built with Express and NodeJs. 

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### Ambo iOS App

**What it does**

A mobile wallet that serves as a gateway for accessing decentralized protocols (ie 0x) and storing users' keys that are used to access their Ethereum funds.

**What to look for**

Wallet creation process (key derivation process and such), interaction with protocols, transfer and storage of tokens and Ether, and/or manipulation of transactions.

**What it runs on**

It is served via the iOS App Store. 

It is built using Swift 4.2, made for devices >= iOS11.0. 

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### analytics.mycryptoapi.com

**What it does**

A self-hosted analytics platform. 

**What to look for**

Any unauthorized access or data leakage. Although we don't store any personal identifiable information for analytics (it's all anonymized data), we consider any outsider eyes a threat.

**What it runs on**

It is hosted on an Amazon EC2 instance proxied with ELB.

It is built using Matomo (Piwik) for the analytics

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### gas.mycryptoapi.com

**What it does**

This is a hosted solution for the estimated of gas needed for Ethereum transactions.

**What to look for**

Being able to modify the values returned to get people to spend either too much gas (waiting money/making transactions super expensive) or too little, which can make transactions stall in "pending" so long that it upsets the user experience.

**What it runs on**

The service is routed through Cloudfront with Amazon S3. 

The application is running in an ECS container.

![separator](../../assets/general-knowledge/about-mycrypto/system-mapping/separator.png)

### proxy.mycryptoapi.com

**What it does**

This is a web proxy to relay API requests to third-parties.

**What to look for**

This is our main gateway to retrieve data for our applications. We are mainly interested in any exposure of secret keys to APIs or modification of cached results, which could upset the user experience by giving false information.

**What it runs on**

The service is routed through Cloudfront to an Amazon API Gateway.
