---
title: Why does my Private Key open TWO Addresses?
description: Private Keys & Passwords
tags:
  - Private Keys
  - Addresses
priority: 60
date_published: '2017-07-05'
date_modified: '2020-10-08'
---

## Mismatched Private Key / Address

Please be sure that you are **carefully and accurately** typing in your private key. A single wrong character will open a different wallet than "yours."

For reference, private keys looks like this: `afdfd9c3d2095ef696594f6cedcae59e72dcd697e2a7521b1578140422a4f890`

Be sure that you are using the same option and same key / file from when you first unlocked your wallet. Essentially, you need to do the same thing each time you open your wallet.

If you saved another version (e.g., the UTC / Keystore file), it may also be worth testing that as well.

You had to unlock your wallet in order to obtain your address from MyCrypto. Therefore, it is nearly impossible to not have saved this file and unlocked it correctly. Think back and repeat the exact steps you made when you unlocked it. Which private key type did you use to access that address?

If you think you may have mistyped a private key, here is a snippet that will help you check each letter for a mistype. Keep in mind this assumes you mistyped a single character. If you mistyped more than one, it will take exponentially longer.

Scroll to the bottom of <https://legacy.mycrypto.com/helpers.html>, enter your private key and address, and see if that resolves to anything.

---

## Related Articles

- [Finding multiple missing characters in private key](https://gist.github.com/domalak/f72414b6be6bbe497416f11bfe0d224a)
- [Find multiple missing characters of the very end of a private key](/troubleshooting/accessing-wallet/missing-characters-of-private-key)
