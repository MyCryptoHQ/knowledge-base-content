---
title: Securely store & guard your private key by drewshaver
description: Security & Phishing
tags:
  - Safety & Security
  - Phishing
priority: 80
date_published: '2017-07-05'
date_modified: '2021-10-26'
---

This guide assumes that you just received a Trezor and Cryptosteel in the mail. Which hardware wallet you chose is not integral to the guide -- any hardware wallet will do. The cryptosteel is not necessary to follow the guide, but protects against fire, flood, and decay, and so comes highly recommended.\*

## Onwards

This is awesome that you already ordered a [hardware wallet](/staying-safe/hardware-wallet-recommendations)! Of course, you have to recognize the serious responsibility that comes from holding your own private key. If you lose it, make a mistake, forget your passphrase, etc, no one can save you, truly you are in control of your own destiny :)

## Terminology -- Secret Recovery Phrase

This will be a list of 12-24 english words, taken from a master list of 2048 possible words, and is also often referred to as your private key or Secret Recovery Phrase.

These words are what you store in the cryptosteel. Every word is unique given the first 4 letters, e.g., these and thesaurus cannot both be words because they both start with 'thes'. So you'll notice the cryptosteel only has space for 4 letters on each word. It is incredibly important that you keep your Secret Recovery Phrase safe from prying eyes. **NEVER store it digitally -- in a text file, in an encrypted file, in a picture, just don't do it.** That will violate the security model of the Trezor (which is that your Secret Recovery Phrase only gets stored on the Trezor and is never exposed to a potentially compromised machine, all general purpose computing devices are potentially infected).

## Before you Get Started

- Before moving significant funds around, always start with a test transaction of a small amount to make sure you got everything right.
- Also, it is very important that you are able to recover your Trezor from the Secret Recovery Phrase. What you should do, to start, is transfer a small amount of BTC, like .005. Then, complete the process of storing your Secret Recovery Phrase in your cryptosteel (transferring the words from paper to the steel). Then, wipe your Trezor, and follow instructions to recover Trezor from Secret Recovery Phrase, using your cryptosteel as a reference (don't use any other backup—use the backup you will be using in the future in case you actually lose / destroy / need to reset your Trezor.

Now, if you load up your wallet and have access to the test amount of BTC, great! You can now lose or otherwise destroy your Trezor and rest assured that you can recover from the cryptosteel.

## Importance of guarding and securing your Secret Phrase

- Anyone that views and remembers Secret Recovery Phrase can take all your crypto.
- Never ever store this anywhere digitally, except for loading it into the Trezor.
- If you lose your Secret Recovery Phrase AND your hardware wallet breaks, or becomes otherwise unusable, your crypto are all lost forever.

Obviously, this would be quite devastating -- and this is why the Trezor and cryptosteel are so important. The Trezor protects your private key from hackers, in case your computer is infected with malware. And the cryptosteel protects the Secret Recovery Phrase from fire, flood, etc.

## Passwords

One big decision you will have to make is whether to use a passphrase or not. The point of a passphrase is to protect your Secret Recovery Phrase -- if you have a strong passphrase and someone gains access to your Secret Recovery Phrase, it is of no value to them. The passphrase is like an extra word tacked on to the end of your Secret Recovery Phrase, though it is free form like a password, and you should never write it down. If you do use one, make sure it has upper case, lower case, numbers , and symbols, should be at least 10 characters, ideally longer. There are pros and cons to both using a passphrase vs not using a passphrase.

Without a passphrase, there is nothing to forget. You are protected from yourself and it is easier to manage things like inheritance. But you are not protected from a thief finding your Secret Recovery Phrase.

With a passphrase, a thief needs to steal your Secret Recovery Phrase and install a keylogger on your machine, which is a much more difficult attack to execute. BUT, if you forget your passphrase, your crypto is lost forever, there is no way to recover. You could potentially write it down, and store it, somewhere geographically separate from where you keep the Secret Recovery Phrase.

Last thing I'll say.. no one knows what the future holds but a bear market is likely on the horizon, and could last for years (2014 and first half of 2015 was the last long bear market). So, pick an amount you plan to invest, and make buys strategically over time (1-3yrs). This way, if the market dips hard after your first couple buys, you are actually happy cause that means you are going to buy a bunch of cheap coins. And if the market goes up, then you're starting off with returns, so also happy.

I'd recommend keeping at least 15-40% of your blockfolio in Bitcoin, depending on your tolerance for risk and horizon for needing to spend the funds. Think of it like bonds vs stocks in a traditional portfolio. Also, try out the app 'blockfolio' for your phone to track your net asset value.
