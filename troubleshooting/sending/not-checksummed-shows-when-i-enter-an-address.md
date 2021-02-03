---
title: "Error: 'Not Checksummed' When Entering Address"
description: Sending & Receiving
tags:
  - Addresses
priority: 80
date_published: '2017-07-05'
date_modified: '2021-01-15'
---

A checksummed address is an address that contains uppercase letters, as specified in [EIP-55](https://eips.ethereum.org/EIPS/eip-55). Checksummed addresses are meant to help prevent users from sending transactions to the wrong address.

There are two versions of Ethereum addresses: those that contain uppercase letters and those that don't:

`0x4bbeeb066ed09b7aed07bf39eee0460dfa261520`

`0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520`

Both addresses are exactly the same, except for the uppercase vs lowercase letters. Capitalization simply means the address has a checksum. Both will work exactly the same and have your funds.

The one that is all lowercase is "not checksummed," meaning that you could mistype a letter or number. If you mistype the address and send the transaction, your ETH will be gone forever.

Alternatively, if you use the checksummed version of an address and mistype it, it will tell you that it's an invalid address when you go to submit the transaction.

For this reason, we warn you when your address is not checksummed. You are still free to send funds to it, but you should double-check the address before doing so, _especially_ if you hand-typed it.

MyCrypto automatically shows your addresses as the checksummed version, and also gives you the checksummed version when you click the "copy" button next to any of the addresses you've added to MyCrypto.

**To help others implement best practices, make sure to contact your favorite Ethereum organizations about adopting this standard to help protect their users (YOU!).**
