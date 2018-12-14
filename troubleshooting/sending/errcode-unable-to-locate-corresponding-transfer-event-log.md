---
title: 'Error: Unable to Locate Corresponding Transfer Event Log'
description: Tokens
priority: 50
date_published: '2018-01-25'
date_modified: '2018-11-29'
---



## Why does this keep happening?!

This error appears on [etherscan.io](https://etherscan.io) when a sender tries to transfer out more tokens than they have.

#### Generally, this can happen due to a few possible events:

*   When adding a [custom token](https://support.mycrypto.com/tokens/adding-new-token-and-sending-custom-tokens.html):
    *   You specified an incorrect token contract address (resulting in an attempt to send a token that you have none of).
    *   You specified an incorrect token decimal (e.g., inadvertently attempting to send 50,000,000 of a token as opposed to 5,000 of it).
*   When sending a default token:
    *   You specified a higher amount to send than what you actually own.

#### How can I stop this from happening?

*   Remove and [re-add the custom token](https://support.mycrypto.com/tokens/adding-new-token-and-sending-custom-tokens.html).
    *   Be sure to specify the correct decimals and token contract address this time (look up the name of the token on [ethplorer.io](https://ethplorer.io)).
*   Make sure that you are attempting to send no more than the same amount of tokens that you have.
