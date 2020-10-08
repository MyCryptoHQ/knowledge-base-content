---
title: Ethereum Address Has Uppercase and Lowercase Letters
description: Addresses & Balances
tags:
  - Ethereum
  - Addresses
priority: 10
date_published: '2017-07-05'
date_modified: '2020-10-08'
---

> What does it mean if my address has uppercase and lowercase letters?

There are two versions of Ethereum addresses: one that contains uppercase letters and one that does not.

`0x7cb57b5a97eabe94205c07890be4c1ad31e486a8`

`0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8`

The one that is all lowercase is "not checksummed," meaning that you could mistype a letter or number, send it off, and it would be lost forever. If you use the checksummed version and mistype it, it will tell you that it's an invalid address.

For this reason, we warn you when your address is not checksummed. You can still send to it without issue but you should double-check the address before doing so, _especially_ if you hand typed it.

If you are sending to one of your own wallets, you can save the checksummed address via the "View Wallet Info" page and copy the address displayed there.

Both addresses are exactly the same in how they work and can access your funds, except for the uppercase vs lowercase letters. Capitalization simply means the address has a checksum.
