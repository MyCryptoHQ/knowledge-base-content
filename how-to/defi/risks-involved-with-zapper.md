---
title: Risks Involved With Zapper
description: Risks involved with Zapper
tags:
  - Beta
  - Decentralized Finance
priority: 40
date_published: '2020-05-06'
date_modified: '2020-10-08'
---

If you’d like information on how to open and close zaps, please visit our [How To Use Zapper](/how-to/defi/how-to-use-zapper) article.

## More Information About Zapper

Zaps are created by none other than [Zapper](https://zapper.fi) (formerly known as DeFiZap)! With the intent to help users gain access to decentralized finance (“DeFi”) protocols, Zapper takes complicated processes and turns them into one-click solutions.

In addition to this easy entry into otherwise complicated DeFi protocols, it’s all noncustodial. You retain complete control of your funds and can manage everything manually if you’d like.

MyCrypto’s Zapper integration aims to take this one step further and allows one-step access to DeFi protocols without having to leave the comfort of your dashboard.

Visit [Zapper](https://zapper.fi) to learn more.

## The Risks Involved With Zapper

There are a myriad of risks when you try to make money with your money. This statement is true for all of finance. BUT, when you try to make more crypto with your crypto, there are multiple additional layers of risk.

### Market Risks

Market risks need to be considered in traditional stock markets but these risks are amplified in cryptocurrency due fewer regulations and larger speculation. Whenever you invest in a cryptocurrency, you’re exposing yourself to the potential gains and losses of that cryptocurrency. We’ve seen ETH at $100 and we’ve seen ETH at $1000. That’s a massive difference, and while swings that large are uncommon, they’ve clearly happened. If a drastic decrease in price is going to shake up your world, you need to be careful. Markets can swing quickly in a direction that you don’t want.

### Smart Contract Risks

The elephant in the room with decentralized finance risk is the fact that all of these DeFi protocols store your money via smart contracts, and a smart contract is only as good as it’s code… and oftentimes the code is not good. If the code for a smart contract is not good enough, it can result in your funds being locked and inaccessible forever, or being drained by a malicious actor who took advantage of flaws in the code. A common way to make sure the code is good is by having in-depth audits, but even then there is no guarantee of safety. To add a cherry on top, there’s no real insurance for this stuff either. If you lose it, it’s lost.

The two risk types listed above are the most common and most impactful types of risk involved with DeFi, but there are layers involved with each of these that can, in the right circumstances, bankrupt you. We highly, highly recommend that you dive into this further and arm yourself with knowledge so you can confidently make decisions. [Please read this](https://medium.com/mycrypto/risky-business-defi-and-ethereums-coming-of-age-story-4d99465ad102).

## A Few Terms You Should Know

- Decentralized Finance (DeFi)

  - Short for decentralized finance, DeFi refers to financial services for crypto, such as borrowing, lending, and trading, that are usually facilitated using smart contracts on the blockchain. They are often open-source and noncustodial.

- Uniswap Pools & Liquidity

  - A pool is a pool of tokens. On Uniswap, each token has its own pool.
  - Liquidity is the amount of tokens available in any given pool. If a pool has very little tokens, it has low liquidity. If there are many tokens, it has high liquidity.
  - A user can contribute their own tokens to the various pools on Uniswap, increasing liquidity.
  - Separately, when a user goes to exchange one token for another on Uniswap, they tap into the available tokens in the respective pools. If you’ve contributed liquidity to the pool(s) that the user is tapping into, you’ll get a small share of the exchange fee. The more liquidity that you’ve supplied to a pool, the larger your share is.

- Exposure

  - Exposure is the inherent risk in an investment. If the only asset you hold is Ether, you are 100% exposed to the effects of ETH’s price fluctuations. If you diversify some of your investments into other assets, you reduce your ETH exposure - you are less affected by ETH’s price fluctuations.

- Stablecoin

  - Stablecoins are a class of token that are pegged to the price of a reserve asset, offering more stability in price. Many stablecoins, like DAI and Tether, are pegged to the price of 1 US Dollar. Holding a stablecoin means your potential losses are minimized, but you’ll also lose out on potential gains.

- Synthetic ETH (sETH)

  - Synthetic assets are artificial. You can use the Synthetix platform’s tokens (SNX) to “create” any synthetic asset - synthetic ETH (sETH), synthetic BTC (sBTC), and others. The point of this is if you’d like to create exposure to an asset (because synthetic assets are pegged to the price of the real asset) without actually having that asset. So, for example, if you didn’t have ETH but wanted the price action (aka gains and losses) of ETH, you could mint synthetic ETH. Generally you don’t need to do things with synthetic assets, but there are cases for it like with the sETH Unipool zap, which allows you to take your share of the fees from other users trading in the ETH/sETH Uniswap pool.

- Fund
  - Fund is a term used to describe any money that you’ve set aside for a certain purpose, similar to what you’re doing when you put some of your assets into a zap with the goal of gaining on it! This term is not specific to cryptocurrency - it is a term used in all areas of finance.

## Frequently Asked Questions

### Is Zapper safe?

There's always risk when interacting with DeFi and smart contracts, and Zapper is an experimental project that is in beta. Using a service like Zapper to interact with protocols for you does add a small amount of additional risk, but most of the risk stems from the actual protocols that are being interacted with.

### Which protocols does Zapper interact with?

At this time, Zapper enables access to the following protocols:

- [Compound](http://compound.finance)

  - Compound is a protocol that allows you to borrow and lend assets. Lending assets yields returns in the form of an interest rate.

- [Kyber](http://kyber.network)

  - Kyber is a protocol that allows the exchange of cryptocurrencies.

- [Uniswap](http://uniswap.io)

  - Uniswap is a protocol that allows the exchange of cryptocurrencies. Uniswap allows users to contribute liquidity to pools, and liquidity providers yield returns in the form of transfer fees.

- [Synthetix](https://synthetix.exchange/)
  - Synthetix is a synthetic asset platform that allows users to gain exposure to forex, cryptocurrencies, and commodities trading.

### Which Zaps are available?

MyCrypto’s Zapper integration will initially allow you to access three Zaps:

- DAI Unipool: Swaps 50% of ETH for DAI (using Uniswap) and contributes both ETH & DAI to Uniswap DAI Pool.
- sETH Unipool: Swaps 50% of ETH for sETH (using Uniswap) and contributes both ETH & sETH to the Uniswap sETH Pool.
- Compound Dai Pool: Swaps 100% of ETH for DAI (using Kyber Network) and contributes it to Compound.

We’ll be working to add more Zaps over time, but you can access all of the Zaps via [Zapper.fi](https://www.zapper.fi/).

### How's the MyCrypto integration different from Zapper.fi?

The MyCrypto Zapper integration uses the same process as the Zapper.fi process. MyCrypto’s Zapper integration adds an extra layer of convenience by allowing you to access Zaps without having to leave MyCrypto.

For the full list of available Zaps, visit [Zapper.fi](https://www.zapper.fi/).

### After entering a Zap, how do I exit?

To exit a Zap, please visit [Zapper.fi](https://www.zapper.fi/), go to the Zap that you’re currently engaged with, and follow the steps that they outline.

### How do I see my Zapper balances?

Due to technical limitations, at this time we’re only currently able to give an estimate on some Zap balances, and Zapper recommends checking [pools.fyi](https://pools.fyi/) to view some of your balances/returns. Over time, as we and Zapper explore this further, we anticipate that there will be a better solution for this.
