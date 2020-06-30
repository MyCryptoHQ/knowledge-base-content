---
title: Unable to Connect to Custom Node
description: Networks & Nodes
tags:
  - Nodes
  - Networks
priority: 10
date_published: '2017-10-08'
date_modified: '2020-06-30'
---

For instructions on connecting to your own local Ethereum node with MyCrypto, please see [this](/developers/run-your-own-node-with-mycrypto) article.

* Verify the URL you entered is correct.

* Verify the port you entered is correct.

* Verify that if you are connecting to an http:// node, you are running MyCrypto locally (NOT over https://).

* Verify you are running with:
  * Geth: `geth --rpc --rpccorsdomain "*"`
  * Parity: `parity --jsonrpc-cors "*"`

* You can also run both clients in light client mode, which only downloads the recent state of the blockchain and saves bandwidth:
  * Geth: `geth --rpc --rpccorsdomain "*" --syncmode "light"`
  * Parity: `parity --jsonrpc-cors "*" --light`

* Verify your node is actually up and running.

* Try removing the node and adding it again.

* Try changing the node in the MyCrypto interface to Etherscan or Infura, then change back.

* Try using Google Chrome or a different browser.

* Ensure that you do not have a firewall or something else that may be blocking the connection.
