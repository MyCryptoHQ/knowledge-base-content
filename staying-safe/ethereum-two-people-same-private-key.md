---
title: Ensuring MyCrypto Doesn't Give Different People the Same Private Key
description: Security & Phishing
tags:
  - Safety & Security
  - Private Keys
priority: 50
date_published: '2017-07-05'
date_modified: '2020-09-15'
---

"How does Ethereum ensure that two people aren't given the same key?"

<https://ethereum.stackexchange.com/questions/4299/account-uniqueness-guaranteed>

---

First of all, a wallet's private key is not given, it is randomly generated. Then the public key is derived from it and, finally, the address is derived from the public key. It is remotely possible that someone else could randomly generate the same private key, but the chances of that happening are unbelievably tiny. Let's take things into perspective.

---

Since every Ethereum address starts with '0x' and is followed by 40 hexadecimal characters, and hexadecimal characters have 16 options (a-f and 0-9), there are 16^40 possible Ethereum addresses. 16^40 = 2^2^2^40 = 2^160 possible addresses.

That's `1,461,501,637,330,902,918,203,684,832,716,283,019,655,932,542,976`.

That means you can actually pick a private key yourself. Just pick a number between `0` and `1461501637330902918203684832716283019655932542976`.

Go ahead, just pick one. Don't tell anyone! There, that's your private key. That number gives you access to all the funds in that account.

If you happened to pick one that someone else is using, you now have access to all of their funds. If someone else happens to pick the one that you just picked, now they have access to all of your funds. That's why it's important that the one you picked is truly random and that you never let anyone see it.

It's that simple. Pick a number, that's your account. Cross your fingers that nobody else picks it!

The mind-blowing part is that this is actually secure. That number up there is so large that if you truly did a good job picking your number randomly, then the odds that anyone else picks it is infinitesimal. (1/that number).

Don't believe me? Go ahead, there are billions of dollars worth of value in the blockchain. You're welcome to set up a computer program to generate tons of these numbers and check each one to see whether it has any money in it.

Disclaimer: NEVER actually pick your private key out of your own brain. It turns out humans are really bad at picking random numbers, even when we think we're good at it. Use a secure random number generator like the one in MyCrypto, Ledger, or Trezor.

---

Also, there are approximately 7.5 x 10^18 grains of sand on Earth.

That's

`7500000000000000000`

compared to

`1461501637330902918203684832716283019655932542976`

That number is so unfathomably big that even if you were to generate one address for each grain of sand on Earth every second, and do it for as long as the galaxy is old, ~13.21 billion years, you'd still be nowhere near likely to have found even a single duplicate.

But what makes it impossible to find and brute force any specific address is the fact that it would cost more energy than is stored by the sun.

---

The estimated age of the universe is about 4.32 x 10^17 seconds. In order to check half of the possible addresses in 4.32 x 10^17 seconds, you would need to make approx 1.6 x 10^31 addresses per second. That's 16 nonillion addresses. Per second. For the entire history of the universe so far. That's to cover half of the addresses.

Even if the blockchain is in active, vigorous use for the next ten thousand years, the chances of a duplicate private key are stochastically zero.

---

## Related articles

* [Couldn't everybody put in random private keys, look for a balance, and send to their own address?](/staying-safe/couldnt-everybody-put-in-a-random-key-and-send-to-own-address)

## Sources

* [Adapted from this Reddit thread](https://www.reddit.com/r/ethereum/comments/6fr2lx/updated_its_time_to_get_real_stop_relying_on/diki8iz/)
* [A video about keys](http://decypher.tv/series/ethereum-development/video/2)
