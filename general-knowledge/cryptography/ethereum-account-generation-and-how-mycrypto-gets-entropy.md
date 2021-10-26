---
title: Ethereum Account Generation & How MyCrypto gets Entropy
description: Best Of
tags:
  - Safety & Security
  - Ethereum
  - MyCrypto
priority: 2
date_published: '2017-07-05'
date_modified: '2021-10-26'
---

MyCrypto uses the `window.crypto` method which is a cryptographically secure pseudo-random number generator. It does not matter if you are online or offline.

**A key will not be generated if this method is not supported by a particular implementation or if something fails during the initialization of the crypto method.** In our opinion, it is more secure to generate a key using only this method instead of adding complexity and opening ourselves up to failures or half-failures by combining different methods of generating randomness. Especially with the range of browsers and operating systems today, running tests for every circumstance ever is serious undertaking.

![Don't roll your own](../../assets/general-knowledge/cryptography/ethereum-account-generation-and-how-does-mycrypto-get-entropy/dont-roll-your-own.jpg)

This avoids situations (see: TrueCrypt) where you think you are happily RNG-ing away with proper entropy (e.g., using the Windows Crypto API and mouse movements) but since the Windows Crypto API actually didn't initialize, you're really only getting entropy from mouse movements. As the TrueCrypt audit stated, "When this happens, Truecrypt
should barf and catch fire. Instead it silently accepts this failure and continues to generate keys." We don't generate keys in that situation, because we avoid that situation entirely. No `window.crypto` = no key generated.

Browsers (Chrome, Firefox, Edge) implement the specification for `window.crypto` which partially relies on entropy for the OS.

As far as entropy on your system itself: it's no longer the case that a new computer has little or no entropy. That window has been vastly reduced to very specific times during boot where there is no system activity or the entropy sources are completely unavailable. This obviously doesn't apply here as you have already booted AND already opened your browser. In addition, as described in the specification: "these sources should be used to **seed** a cryptographic pseudo-random number generator that can then return suitable values efficiently".

## Standard methods from where entropy comes from for CSPRNGs:

- Windows: `RtlGenRandom`
- Linux: `getrandom` (if available) or `/dev/urandom` (older Linux kernels)
- OpenBSD: `getentropy()` or `arc4random_buf()` with ChaCha20 (not RC4)
- Other Unix-like systems (including macOS): `/dev/urandom`

## Summary

The good news is is that we're relying on things that really really smart groups of people to build and maintain how our keys are generated. There are glorious amount of specs (and even specs about testing those specs). The bad news is...if something in the above fail spectacularly, your insecurely generated ETH wallet is going to be the least of the world's issues.
