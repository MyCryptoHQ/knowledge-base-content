---
title: Unable to Connect to Custom Node
description: Networks & Nodes
priority: 10
date_published: '2017-10-08'
date_modified: '2018-12-15'
---

* Verify the URL you entered is correct.

* Verify the port you entered is correct.

* Verify that if you are connecting to an http:// node, you are running MyCrypto locally (NOT over https://).

* Verify you are running with:
  * Geth: `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever"`
  * Parity: `parity --jsonrpc-cors "null" --keys-path "dont_put_secret_files_here_ever"`

* You can also run both clients in light client mode, which only downloads the recent state of the blockchain and saves bandwidth:
  * Geth: `geth --rpc --rpccorsdomain "null" --keystore "dont_put_secret_files_here_ever" --syncmode "light"`
  * Parity: `parity --jsonrpc-cors "null" --keys-path "dont_put_secret_files_here_ever" --light`

* Verify your node is actually up and running.

* Try removing the node and adding it again.

* Try changing the node in the top-right corner to ETH (Etherscan.io) or ETH (Infurio.io).

* Try using Google Chrome or a different browser.

* Ensure that you do not have a firewall or something else that may be blocking the connection.
