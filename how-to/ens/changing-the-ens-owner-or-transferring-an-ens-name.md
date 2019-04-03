---
title: Changing the ENS owner or transferring an ENS Name
description: ENS
priority: 70
date_published: '2017-07-05'
date_modified: '2019-04-01'
---

## Transferring a domain (best practice!)

1. Search for your domain on [Etherscan](https://etherscan.io/enslookup?q=yourname.eth)
2. Copy the `Label Hash`.
3. Go to the [Contracts](https://mycrypto.com/contracts/interact) page and select `ENS - Eth Registrar (Auction) 0x6090a6e47849629b7245dfa1ca21d94cd15878ef` from the dropdown menu. 
4. Optional but recommended: set a lower gas price (like 1 GWEI) via the slider in the header to save on fees.
5. Access and choose the `transfer` call.
6. Paste the `LabelHash` from [Etherscan](https://etherscan.io/) into the `_hash` field.
7. Paste the `address` of the new owner in the `newOwner` field. 
8. Unlock your wallet and send.

## Only setting owner

*WARNING: If you only change the owner, the deed owner can get the name back.*

1. Search for your domain on [Etherscan](https://etherscan.io/enslookup?q=yourname.eth)
2. Copy the `NameHash`.
3. Go to the [Contracts](https://mycrypto.com/contracts/interact) page and select `ENS - Registry" (0x314159265dD8dbb310642f98f50C066173C1259b)` from the dropdown menu. 
4. Optional but recommended: set your preferred gas price via the slider in the footer.
5. Access and choose the `setOwner` call. Paste the `NameHash` (not LabelHash) from [Etherscan](https://etherscan.io/) into the `node` field.
6. Paste the `address` of the new owner in `newOwner`. 
7. Unlock your wallet and rock and roll.
