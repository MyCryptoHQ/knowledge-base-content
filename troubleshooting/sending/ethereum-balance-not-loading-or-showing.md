---
title: Balances Not Loading or Showing on MyCrypto
description: Addresses & Balances
priority: 2
date_published: '2017-06-20'
date_modified: '2018-11-29'
---

This is most likely due to the fact that either you are behind a firewall, you have refreshed the page a bunch of times and hit your hourly API limit, or our nodes are under extreme strain and are refusing to return your balance information.

The easiest way to check your balance is actually not by unlocking your wallet. You only need your address in order to see your balance. It is not recommended that you enter your private key anywhere if you just want to check on the balance or see incoming / outgoing transactions. Instead...

#### ETH

Paste your address into the search bar and it will pull up your address and transaction history on:

* [https://etherscan.io/](https://etherscan.io/).

* [https://www.etherchain.org/](https://www.etherchain.org/).

#### Tokens

* Via [https://ethplorer.io/](https://ethplorer.io/): This entire site is dedicated to token transactions and their balances.

* Via [https://etherscan.io/](https://etherscan.io/): Your token balances are in the dropdown in the header section thingy. Your transfers can be viewed on the ["Token Transfers"](https://etherscan.io/address/0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520#tokentxns) tab.

* Via [https://www.etherchain.org/](https://www.etherchain.org/): Your tokens are displayed on the left sidebar.


#### ETC

[https://gastracker.io/](https://gastracker.io/). Paste your address into the search bar and it will pull up your address and transaction history.


### If you need to send some tokens and they aren't loading, here are some things you can try to troubleshoot:

1. Hard refresh the page. On Chrome on OSX, you hit `cmd`+`shift`+`r`. On a PC, it's `ctrl`+`shift`+`r`.

2. Check your internet / firewall.

3. Try connecting to a different network in the top-right corner. Choosing one that you are not currently connected to may solve your problem. If you are interacting with the Ethereum blockchain, you have four nodes to choose from:

  *    MyCryptoAPI.com
  *    Etherscan.io
  *    Infura.io
  *    Blockscale.net
