---
title: Unable to Connect to Custom Node
description: Networks & Nodes
tags:
  - Nodes
  - Networks
priority: 10
date_published: '2017-10-08'
date_modified: '2021-01-15'
---

- Verify the URL you entered is correct.
- If the node is running on a specific port, verify that the port you entered is correct.
- Verify the correct network is selected.

## Locally hosted node

For instructions on connecting to your own local Ethereum node with MyCrypto, [please see this article on running MyCrypto with your own personal node](/developers/run-your-own-node-with-mycrypto).

- Verify that if you are connecting to an http:// node, you are running MyCrypto locally with the [MyCrypto Desktop App](https://download.mycrypto.com/).

- Verify you are running with:

  - Geth: `geth --http --http.corsdomain "*"`
  - OpenEthereum: `openethereum --jsonrpc-cors=all`

- Verify your node is actually up and running.

- Ensure that you do not have a firewall or something else that may be blocking the connection.
