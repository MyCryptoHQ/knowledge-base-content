---
title: Adding a New Network to MyCrypto
description: Contributor Info
priority: 61
date_published: '2018-05-29'
date_modified: '2018-06-19'
---

Adding support for your Ethereum-like network is easy, assuming it isn't significantly different from the Ethereum network. To make sure your network is well supported, we require the following:

* Must have at least one reliable, working node.

* Must be EIP155 compliant with a unique Chain ID this is not used by any other MyCrypto-supported network.

* Must have a block explorer that can view addresses, transactions, and blocks.

* Should not have a token name that conflicts with a more popular token.
  * This will break equivalent fiat values and may confuse users. You can check this at <https://www.cryptocompare.com/>.
  
If you meet all of those requirements, you simply need to [make a pull request](https://github.com/MyCryptoHQ/MyCrypto) with the following changes:

1. Add a deterministic path (aka dpath) to `common/configs/dpath.ts` for your network, even if it just uses Ethereum's default path.
2. Add at least one node to `common/libs/nodes/configs.ts`.
3. Add your network configuration to `common/features/config/networks/static/reducer.ts`.
4. Add your network's key (matching the key in `reducer.ts`) to `shared/types/network.d.ts`.

If you'd like to provide users with a direct link to your network without having to select it from the dropdown, you can send a URL like <https://mycrypto.com/account?network={network}> where `{network}` is the key from the `reducer.ts` config.

## Example

[This commit exemplifies the process described above.](https://github.com/MyCryptoHQ/MyCrypto/pull/1962/files)

## Adding a Node

If you'd only like to add a node to support an existing network, all you need to do is follow step 2 listed above. Nodes are automatically load-balanced based on performance, so your node will automatically get utilized by anyone using the network. Thanks for supporting the ecosystem!
