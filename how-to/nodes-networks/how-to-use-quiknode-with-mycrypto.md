---
title: How to Use QuikNode with MyCrypto
description: Networks & Nodes
tags:
  - Nodes
  - Networks
priority: 10
date_published: '2020-08-02'
date_modified: '2020-08-02'
---

[QuikNode](https://quiknode.io/?tap_a=67226-09396e&tap_s=860550-6c3251) is a service that allows you to get your own, personal Ethereum node. Besides Ethereum, they also provide nodes for Bitcoin and Ethereum testnets, with the possibility to choose between a variety of different clients. They provide elastic APIs, dedicated nodes, powerful tools, and analytics, all in one easy-to-use dashboard.

You can get started with QuikNode by creating an account at [quiknode.io](https://quiknode.io/?tap_a=67226-09396e&tap_s=860550-6c3251).

## Finding your endpoint

Once you've created an account, and created your node, you'll be able to find it in your dashboard right away.

![Node overview](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/nodes-overview.png)

After selecting your node, the HTTP Provider URL that you can use in your MyCrypto interface will show up immediately, copy this URL.

![HTTP Provider URL](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/http-provider-url.png)

## Connecting to your endpoint

Let's add this node to your MyCrypto interface! Depending on if you're using the MyCrypto website or [desktop app](https://download.mycrypto.com/), this process might be slightly different. 

* **MyCrypto website**: click the network switcher in the top-right of the interface, where it says "Ethereum (Auto)" by default. Then click the "Add Custom Node" button at the bottom of the menu.

![Network switcher website](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/network-switcher-website.png)

* **MyCrypto desktop app**: find the network switcher on the left-hand side of the interface, where it says "Change Network". Then click the "Add Custom Node" button at the bottom of the menu.

![Network switcher desktop app](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/network-switcher-desktop.png)

A new screen will appear, allowing you to enter the details of your QuikNode instance. For the name, it can be set to anything you'd like. For the network, make sure that it's the same one as you have your QuikNode instance set up to be. In the URL field, you can enter your personal endpoint that you copied earlier from the QuikNode dashboard. 

![Custom node modal](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/add-custom-node.png)

After saving it, your MyCrypto interface will automatically connect to it. You've successfully added your own QuikNode instance to MyCrypto!

![Node connected](../../assets/how-to/nodes-networks/how-to-use-quiknode-with-mycrypto/node-connected.png)
