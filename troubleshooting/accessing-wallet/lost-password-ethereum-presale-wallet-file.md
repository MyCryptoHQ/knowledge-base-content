---
title: Lost Password - Ethereum Presale Wallet File
description: Private Keys & Passwords
tags:
  - Private Keys
priority: 0
date_published: '2017-10-08'
date_modified: '2021-10-26'
---

Important note: This article is talking about presale wallets, for regular wallets take a look at the [Lost Password](/troubleshooting/accessing-wallet/lost-ethereum-wallet-password) article.

## I forgot the password to my presale wallet file

While there is no way to guarantee that you will suddenly remember your password again, here are some things to keep in mind:

- The minimum length was 10 characters.
- The password must contain at least one upper case letter, one lower case letter, one symbol, and one number.

You can also try using [pyethrecover](https://github.com/burjorjee/pyethrecover), which will check your wallet against a given file of passwords. The tool requires Python and the bitcoin package from python-pip. If you know at least part of your password, you can use this program to automate the testing of permutations of your known password characters (just add them all to a text file).
