---
title: 'Why Are Ethereum Gas Prices so High?'
description: Gas and Transaction Fees
tags:
  - Gas
priority: 110
date_published: '2021-02-19'
date_modified: '2021-04-27'
---

### Why are the gas prices so high?!

The Ethereum network has been facing a lot of congestion and higher gas prices due to more usage. More usage is good but it comes with drawbacks if the network isn’t prepared to scale.

When the network usage increases, that means that more transactions are being sent. However, the Ethereum blockchain at its current state can only handle so many transactions at a time, so the list of pending transactions quickly builds up.

You may ask, "How does the network decide which transactions get to go through first?" Normally, you'd think that it's first-come-first-served, but it's not.

Why? Well, the additional element in all of this is the miners. Miners make money off of confirming network transactions, and the money they make is the very same gas that you're inputting. Thus, miners have an incentive to confirm the transactions that will net them the most money (the highest gas price) first. This is all expected.

Therefore, to beat the network congestion and have your transaction be confirmed quickly, you need to raise the gas price (Gwei). BUT, you're not the only one waiting for a transaction to be confirmed, so everyone starts raising their gas prices to push their transaction to the front of the queue. This is why the gas prices build up and up and up and don't go back down until the congestion clears up. This is similar to traffic in real life.
Will any of this change with Ethereum 2.0 and Proof of Stake?
Yes! Ethereum 2.0 comes with many improvements, like sharding, that should reduce the congestion and prices of transactions.

### Will any of this change with EIP-1559?

Somewhat, but not quite. EIP-1559 will improve the UX for transactions and make fees more predictable, but it will not directly lower fees or gas prices. 

That being said, better fee predictability means that the chance of overpaying is reduced. If you apply enough mental gymnastics, this means that EIP-1559 may indirectly reduce your overall fees.

### How can I reduce my gas fees right now?

There are a few things you can do to deal with high gas prices:

* Grin and bear it
* Don’t make unnecessary transactions (every crypto <> crypto trade is a taxable event, anyways, ugh)
* Wait for the gas prices to lower organically (gas prices fluctuate throughout the day)
* Onboard some of your funds onto a sidechain and play around with that for a while
* Read up on some of MakerDAO’s great tips for reducing gas costs
 
### What tools can I use to keep an eye on gas prices?

A few good tools:

* GasNow displays the real-time Ethereum gas prices and updates every few seconds. It also displays the costs for various Ethereum functions so you can get an idea before you submit a transaction
* TxStreet visualizes the real-time traffic on Ethereum and compares it to other chains like Bitcoin
* ETH Gas.watch aggregates gas prices from multiple data sources and allows you to set up email alerts for when the gas prices drop to a certain level

### I have a stuck transaction. What can I do?

* Send with higher gas price next time
* Go outside, look at trees, wait
* [Cancel or replace the transaction](/how-to/sending/checking-or-replacing-a-transaction-after-it-has-been-sent)
* [Learn about gas](/general-knowledge/ethereum-blockchain/what-is-gas)
* [Learn about nonce](/general-knowledge/ethereum-blockchain/what-is-nonce)
* Learn about alternative fee markets
* Call an old friend and have a chat about the good ol' days before COVID and 500 GWEI gas prices
* Hot take it on Twitter and/or ask Vitalik to speed it up

Make sure you understand why your transaction(s) aren't being mined—is it just a low gas price or do you have a low-nonce, low-gas price transaction preventing more recent transactions from being confirmed?
