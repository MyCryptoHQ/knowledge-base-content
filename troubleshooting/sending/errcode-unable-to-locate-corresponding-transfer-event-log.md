---
title: 'Error: Unable to Locate Corresponding Transfer Event Log'
description: Tokens
priority: 30
date_published: '2018-01-25'
date_modified: '2019-04-01'
---

## Why does this keep happening?!

This error appears on [Etherscan](https://etherscan.io) when a sender tries to transfer out more tokens than they have.

### Generally, this can happen due to a few possible events:

* When [adding a custom token](/how-to/sending/sending-and-adding-tokens):
  * You specified an incorrect token contract address (resulting in an attempt to send a token that you have none of).
  * You specified an incorrect token decimal (e.g., inadvertently attempting to send 50,000,000 of a token as opposed to 5,000 of it).

* When sending a default token:
  * You specified a higher amount to send than what you actually own.

### How can I stop this from happening?

* Remove and [re-add the custom token](/how-to/sending/sending-and-adding-tokens).
  * Be sure to specify the correct decimals and token contract address this time (look up the name of the token on [Ethplorer](https://ethplorer.io)).

* Make sure that you are attempting to send no more than the same amount of tokens that you have.
