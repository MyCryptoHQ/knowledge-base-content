---
title: How to stay safe during ICOs and other periods
description: Security & Phishing
priority: 89
date_published: '2018-04-30'
date_modified: '2018-11-29'
---

## Domain verification

### The problem

There are many website clones of ICOs with fake contribution addresses. Sometimes they use character substitutions in
the domain (e.g., an "i" becomes an "l" in the scam site). Sometimes they use IDN domains which are harder to see with your eye
(e.g., a "c" becomes a "ƈ").

![/images/security/how-to-stay-safe/idn-demo-domains.png](/images/security/how-to-stay-safe/idn-demo-domains.png)

### The solutions

These are various tools that you can use to protect yourself.

#### Install browser extensions

There are many browser extensions that offer similar functionality to protect you against the fake domains (IDN homograph
attack domains, fake project domains, other scam domains).

* EtherAddressLookup - 
[Github](https://github.com/409H/EtherAddressLookup) - 
[Chrome extension](https://chrome.google.com/webstore/detail/etheraddresslookup/pdknmigbbbhmllnmgdfalmedcmcefdfn)

* EtherSecurityLookup - 
[Github](https://github.com/409H/EtherSecurityLookup) - 
[Chrome extension](https://chrome.google.com/webstore/detail/ethersecuritylookup/bhhfhgpgmifehjdghlbbijjaimhmcgnf)

* MetaMask - 
[Github](https://github.com/MetaMask/metamask-extension) - 
[Chrome extension](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) - 
[Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/) -
[Brave extension](https://brave.com/)

* Cryptonite -
[Chrome extension](https://chrome.google.com/webstore/detail/cryptonite-by-metacert/keghdcpemohlojlglbiegihkljkgnige) -
[Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/cryptonite-by-metacert/) -
[Opera extension](https://addons.opera.com/en/extensions/details/cryptonite-by-metacert/)

##### Use bookmarks

You should *never* rely on links people send you, or results in a search engine. You should always type the address manually
and then bookmark it and start using the bookmark every time.

## 0x address verification

### The problem

Once you've sent ETH (or any other crypto or token) and the transaction has been confirmed on the network, it is *irreversible*. So you need to ensure that
you have the correct address when you sign your transactions.

During ICO phases, many communication channels (Slack, Telegram, Discord, Twitter, etc.) are slammed with fake accounts
promoting "the contribution address."

### The solution

#### Confirm the address

You can confirm the address for an ICO with some simple checks:

* Search the address on block explorers and check for comments.
* Typically, ICO addresses are contract addresses. If the address given to you doesn't have a contract, it's *usually* a scam.

Alternatively, get your wallet provider to implement the EtherScamDB JS library to show a visual indication: `etherscamdb-js-address-validation` [Github](https://github.com/409H/etherscamdb-js-address-validation#etherscamdb-js-address-validation-package) &mdash; [NPMJS](https://www.npmjs.com/package/etherscamdb-js-address-validation).

## Twitter

### The problem

Twitter has recently become a prime spot for scammers to pretend to be famous account holders by copying their name and 
profile picture and announcing giveaways.

An example

![/images/security/how-to-stay-safe/trust-trading-scam-twitter.PNG](/images/security/how-to-stay-safe/trust-trading-scam-twitter.PNG)

### The solution

There are various ways by which you can "ignore" these scammers.

#### Muting key scammer phrases

You can go into your [Twitter settings and mute words/phrases](https://twitter.com/settings/muted_keywords) so you won't see them. Here's a bunch of phrases you could ignore:

```text
give-away
give away
giving away
giveaway
Get BTC or ETH for free
``` 

![/images/security/how-to-stay-safe/how-to-mute-words-twitter.png](/images/security/how-to-stay-safe/how-to-mute-words-twitter.png)

#### Disabling notifications from fresh accounts

This one can be quite aggressive, but Twitter allows you to block notifications from accounts that fit certain
criteria. If you go to your [Notifications settings](https://twitter.com/settings/notifications_timeline), you can select
your preference.

We recommend ticking the following:

* Those who haven't confirmed their phone number
* Those who haven't confirmed their email
* Those with a new account

This should prevent you from getting notifications from people tweeting at you regarding scam ICOs, pretending to be an
ICO you follow, and other types of phishers / scammers.

#### Installing [EtherSecurityLookup](https://github.com/409H/EtherSecurityLookup#ethersecuritylookup)

This browser extension comes with functionality that will highlight similar account handles to those "verified" by the 
extension and show a "verified" icon next to the handle on your timeline.

![/images/security/how-to-stay-safe/esl-fake-account-twitter.png](/images/security/how-to-stay-safe/esl-fake-account-twitter.png)
