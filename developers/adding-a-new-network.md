---
title: Adding a New Network to MyCrypto
description: Contributor Info
tags:
  - Networks
  - MyCrypto
priority: 61
date_published: '2018-05-29'
date_modified: '2021-06-23'
---

Please see [this article](/general-knowledge/about-mycrypto/supported-networks) for a list of networks that are currently supported by MyCrypto.

Adding support for your Ethereum-like network is easy, assuming it isn't significantly different from the Ethereum network. To make sure your network is well supported, we require the following:

- Must have at least one reliable, working node.

- Must be EIP-155 compliant with a unique Chain ID that is not used by any other MyCrypto-supported network.

- Must have a block explorer that can view addresses, transactions, and blocks.

- Should not have a token name that conflicts with a more popular token.
  - This may confuse users. You can check this at [CryptoCompare](https://www.cryptocompare.com/).

If you meet all of those requirements, you simply need to [make a pull request](https://github.com/MyCryptoHQ/MyCrypto) with the following changes:

1. Add a new `NetworkId` to [`src/types/networkId.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/types/networkId.ts).
2. In [`src/database/data/networks.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/database/data/networks.ts), add an entry using the `NetworkId` as the key. The `dPaths` field specifies default derivation paths for usage in hierarchical deterministic wallets (Ledger, Trezor, Secret Recovery Phrase). Note: Ledger may block your network's chain ID to only be used in specific derivation paths.
3. If you need to add a new derivation path for your network, you can do so in [`src/config/dpaths.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/config/dpaths.ts). Simply add an object and variable for the derivation path, and then add the variable to the `DPathsList` array.
4. Add one or more nodes to [`src/database/data/nodes.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/database/data/nodes.ts) using the `NetworkId` provided earlier.

## Example

[This commit exemplifies the process described above.](https://github.com/MyCryptoHQ/MyCrypto/commit/48028144986547f5e443101b10f11baac6bfbc74#diff-ced52679f30edd8ca077b5a52488edaec6a4d1adeababc5b5f022152024cd7db)

## Adding a Node

If you'd only like to add a node to support an existing network, all you need to do is follow step 4 listed above. Nodes are automatically load-balanced based on performance, so your node will automatically get utilized by anyone using the network. Thanks for supporting the ecosystem!
