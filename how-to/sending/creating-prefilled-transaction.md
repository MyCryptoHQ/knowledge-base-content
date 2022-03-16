---
title: How To Create a Pre-Filled Transaction Link
description: Transactions
tags:
  - Transactions
  - Beta
priority: 40
date_published: '2019-01-22'
date_modified: '2022-03-16'
related_articles:
  - general-knowledge/ethereum-blockchain/what-is-gas
---

Pre-filled transactions can be created by appending certain parameters into the query section of a URL.

Pre-filled transactions are a helpful function that allow for many things, including sending transaction requests to others! Instead of telling someone "Okay, send **this** amount to **this** address on **this** network with **this** data, etc. etc.," it allows you to take all the criteria for the transaction and package it up into one neat URL that you can send to someone.

If you create a pre-filled MyCrypto transaction URL and send it to someone, they can input the URL into their browser and it'll automatically take them to the MyCrypto send page and fill it out with the specified parameters.

## Parameters

- `queryType` - The _type_ of pre-filled transaction (use **speedup** in most cases).
- `type` - The _type_ of the transaction (0 for legacy, 2 for EIP-1559 transactions)
- `gasPrice` - The _gas price_ of the transaction (only for legacy txs) (should be in hex wei format. ex: **0x059682f000**).
- `maxFeePerGas` The _max fee_ of the transaction (only for EIP1559 txs) (should be in hex wei format. ex: **0x059682f000**).
- `maxPriorityFeePerGas` The _max priority fee_ of the transaction (only for EIP1559 txs) (should be in hex wei format. ex: **0x059682f000**).
- `gasLimit` - The _gas limit_ field of the transaction (should be in hex format. ex: **0xcb56**).
- `chainId` - The _chainid_ of the network the transaction should be conducted on (ex: **1**).
- `value` - The _value_ of the transaction (should be in hex wei format. ex: **0x8AC7230489E80000**).
- `nonce` - The _nonce_ field of the transaction (should be in hex format. ex: **0xD8**).
- `to` - The _to_ address of the transaction.
- `from` - The _from_ address of the transaction (should correspond to one of the accounts you have added to your dashboard).
- `data` - The _data_ field of the transaction (should be in hex format. ex: **0xa9059cbb0000000000000000000000005dd6e754d37bababeb95f34639568812900fec79000000000000000000000000000000000000000000000104f6e0a229913de8a2**).

### Examples

ETH Transaction

<https://app.mycrypto.com/send?queryType=speedup&gasLimit=0x5208&chainId=1&nonce=0xD8&gasPrice=0x059682f000&from=0x5197B5b062288Bbf29008C92B08010a92Dd677CD&to=0x5197B5b062288Bbf29008C92B08010a92Dd677CD&value=0x8AC7230489E80000&data=0x>

ERC20 Transaction

<https://app.mycrypto.com/send?queryType=speedup&gasLimit=0x5208&chainId=1&nonce=0xD8&gasPrice=0x059682f000&from=0x5197B5b062288Bbf29008C92B08010a92Dd677CD&to=0x6B175474E89094C44Da98b954EedeAC495271d0F&value=0x0&data=0xa9059cbb0000000000000000000000005197B5b062288Bbf29008C92B08010a92Dd677CD000000000000000000000000000000000000000000000104f6e0a229913de8a2>
