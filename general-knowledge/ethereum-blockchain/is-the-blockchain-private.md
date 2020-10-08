---
title: Is the Blockchain Private?
description: Diving Deeper
tags:
  - Ethereum
priority: 30
date_published: '2018-04-30'
date_modified: '2020-10-08'
---

> Picture a spreadsheet that is duplicated thousands of times across a network of computers. Then imagine that this network is designed to regularly update this spreadsheet and you have a basic understanding of the blockchain.

— [What is Blockchain Technology? A Step-by-Step Guide For Beginners by Blockgeeks](https://blockgeeks.com/guides/what-is-blockchain-technology/)

The blockchain is a **public**, distributed ledger. It allows anyone, anywhere to view and verify the transactions executed on it. In fact, the primary value of blockchains is that they remove reliance on closed, third-party, centralized systems and bring a new level of transparency through decentralized, shared data.

**So, no, the blockchain is not private.** Every transaction and every bit of information that you broadcast and put on the blockchain is completely public. It can easily be viewed via a blockchain explorer (like [Etherscan.io](https://etherscan.io/) for Ethereum). But even if your blockchain activity can be seen by anyone, it doesn’t require you to broadcast your name, email address, password, date of birth, location, or any other personal information.

Everything is pseudonymous so that your activity is associated with an “address” rather than your actual identity. On Ethereum, an address will look like this: 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520. If you visit [an address page on Etherscan](https://etherscan.io/address/0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520), you can view the holdings of that address and all the transactions that have ever been made to and from that address.

If you make a single transaction from `ADDRESS-1` to `ADDRESS-2`, there is no reason that anyone would know the identity of the owner of either `ADDRESS-1` or `ADDRESS-2` by simply looking at the blockchain.

Unless, for whatever reason, personally identifiable information becomes available.

## What information could become public and how?

### Interacting with other known addresses

One example of public information is a known address. The address above (0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520) is the MyCrypto donation address. It is displayed on the footer of [https://mycrypto.com/](https://mycrypto.com/) and also [labeled on Etherscan.io](https://etherscan.io/address/0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520).

If you were to send a transaction to wallet address 0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520, anyone using Etherscan to view the transaction or your address would know that your address donated to MyCrypto.

### Publishing your address on the web

If you were to publish your address on Reddit or Twitter, your address would be linked to your Reddit username or Twitter handle. If you use your full name on Twitter or have also published your full name on Reddit before, it would be possible for your full name to be linked to your address.

Furthermore, if your address becomes linked to your name and has funds in it, it could make you a target for attackers. Everything is relative: A “small” amount of funds to you may be the monthly salary of an attacker on the other side of the world. The markets are also extremely volatile. Mentioning “I have 10 ETH” in 2015 meant you had $10. In 2018, it meant you had $10,000. In 2020 it could mean you have \$1,000,000. 🚀

If a bad actor decides they want your funds, they could use information available on the web to attempt to attack you and your accounts, such as by [spear-phishing](https://archives.fbi.gov/archives/news/stories/2009/april/spearphishing_040109) or social engineering techniques. If you store your private keys on [Evernote](https://gizmodo.com/2-million-allegedly-stolen-from-cryptocurrency-vlogger-1825290362), Dropbox, [Google Drive](https://medium.com/blockchannel/someone-just-stole-9-000-of-crypto-from-me-dc04e89c289d), or any other cloud storage or note-taking application, those funds could be stolen if that single account is compromised.

For this reason, it isn’t recommended that you publicly post your address on the internet. If you must publicly use an address, create a new address for that purpose alone. Similarly, do not make it known which types of or how much cryptocurrency you hold (or even that you do at all). Just like you don’t leave piles of cash laying around your house or post screenshots of your bank account to Facebook, don’t publish your cryptocurrency addresses or screenshots of your balances.

For more information on how to protect yourself and your funds, [you can visit here](/staying-safe).

### Sharing your address with someone so they can pay you

Let’s say your friend wants to send you some ETH to pay you back for the nice dinner you enjoyed last week. You give them your address. Your friend now knows your address. The world may not know, but your friend does.

If the address is a new, independent address, then your friend can’t learn anything about your crypto-habits or interests from that account. However, what if you used that address to purchase something unlawful? Or make a donation to an organization they disagree with? Or both?

Perhaps you don’t care if your friend knows what your funds have gone toward, but maybe you do. Maybe you don’t care if your friend knows your religious or political affiliations, but maybe you do. Maybe you don’t care right now, but that may change in the future. As the adage goes, “Better safe than sorry.”

These are all things to keep in mind when sharing addresses, both publicly and privately. We don’t typically broadcast our spending habits to the world but if you aren’t careful, you could accidentally reveal more than you intended when it comes to the blockchain.

### Interacting with Dapps or smart contracts

Ethereum is unique because it is more than just transactions that can be saved to the blockchain. Transactions can also include additional information via the “data” parameter.

For example, if you purchase an [ENS name](https://ens.domains/) like [your-first-name-and-last-name].eth, that information is also on the blockchain and linked to the address you used to bid on the name. If you use that same address for all of your Ethereum activity, you’ve now lost the pseudonymity that the blockchain was designed to provide.

Another way this could happen is if you use some social media Dapps (decentralized applications). [Peepeth](https://peepeth.com/), for example, asks you to link the address you use to sign up with to a profile that includes a photo, username, and any other information you might post on the Dapp. If your Ethereum account holds anything substantial, you’ve now publicly broadcasted information a hacker could use to target you and your funds.

To show you how much information may be gleaned from this, let’s take a look at our CEO Taylor’s peepeth profile, [https://peepeth.com/tay](https://peepeth.com/tay).

- Her name is “Taylor Monahan.”
- She uses the Ethereum address 0xd161f7fa342dcefeafdeb0827b83a400f57ad0a4.
- [She likes sunsets](https://peepeth.com/tay/peeps/QmXDxs7XpizujWz5ka2MATNVJ1JD27sH1TqARhpsUsxJ1a).

None of this information is necessarily bad. She is a public face, for better or worse, and this information is known. She also chose to use the Ethereum address 0xd161f7fa342dcefeafdeb0827b83a400f57ad0a4 exclusively for Peepeth.

However, what happens if next year she wants to anonymously donate to a controversial cause? What if she doesn't want anyone to know that it is her donating? Well, if she uses the same address she used on Peepeth to make the donation, it would be fairly easy to discover who made the donation and, therefore, her donation to the controversial cause wouldn’t be anonymous.

### Using Web3 extensions

Web3 extensions like MetaMask allow you to interact with the distributed web and Dapps that operate on the Ethereum blockchain more easily. This is done by injecting web3.js (a web3 javascript library created by the Ethereum Foundation) into the header of every website that is accessed. Theoretically, a site could collect this data to maintain a list of users that are using the web3-injection (likely cryptocurrency users), as well as to track public information like your public Ethereum address whenever your extension is logged in. With this information, websites can serve targeted ads to you or collect public address data about their users. One of the ways to fix this is to create a whitelist for web3-injection, where only whitelisted sites will have the web3 data injected into their header. [MetaMask](https://metamask.io/) is currently pursuing this.

## How to stay (more) anonymous

- The good news is that addresses are really, really easy to make. You can have an unlimited number of addresses and use them all for different purposes. Perhaps one is your business’ donation account. Perhaps one is for your cold savings. Perhaps one is what you give to close friends when they need to pay you back. This reduces the number of links between addresses and allows you to keep your interests, financial situation, and identity separate.
- As mentioned above, limit when and where you publish your address to the web if you want to remain as secure as possible. Google indexes everything and once your address is out there, it’s going to be there for a long time.
- Be mindful of what information you are revealing when interacting with Dapps, especially those that do create some sort of “identity.” Use different addresses for different Dapps when appropriate.
- Be especially careful when publishing information to the blockchain that you may want to delete in the future. That bad meme, typo, or full name may be on the blockchain forever.

## Related articles

- [https://blockgeeks.com/guides/what-is-blockchain-technology/](https://blockgeeks.com/guides/what-is-blockchain-technology/)
- [http://www.dummies.com/software/other-software/the-transparency-of-bitcoin/](http://www.dummies.com/software/other-software/the-transparency-of-bitcoin/)
- [https://lisk.io/academy/blockchain-basics/benefits-of-blockchain/blockchain-transparency-explained](https://lisk.io/academy/blockchain-basics/benefits-of-blockchain/blockchain-transparency-explained)
- [https://lisk.io/academy/blockchain-basics/benefits-of-blockchain/blockchain-privacy-explained](https://lisk.io/academy/blockchain-basics/benefits-of-blockchain/blockchain-privacy-explained)
- [https://blog.ethereum.org/2016/01/15/privacy-on-the-blockchain/](https://blog.ethereum.org/2016/01/15/privacy-on-the-blockchain/)
- [https://en.bitcoin.it/wiki/Address_reuse](https://en.bitcoin.it/wiki/Address_reuse)
