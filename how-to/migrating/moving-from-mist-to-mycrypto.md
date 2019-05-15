---
title: '[Mist ➡ MyCrypto] Access Your Mist Wallet With MyCrypto'
description: Migrating to/from MyCrypto
priority: 50
date_published: '2019-05-15'
date_modified: '2019-05-15'
---

Recently, it was announced that the Mist Browser and Ethereum Wallet [will not be developed/supported further](https://medium.com/@avsa/sunsetting-mist-da21c8e943d2).

MyCrypto is one of the [recommended Mist alternatives](https://medium.com/@omgwtfmarc/mist-migration-patterns-6bcf066ac383), and thankfully, it’s an easy transition.

## How do I find my Mist wallet?

When you originally used Mist, your wallet was generated with a keystore file, encrypted by a password that you set.

Any keystore files that you used with Mist are, by default, stored on your computer. To access them via Mist, open Mist and select `File > Backup > Accounts`.

The location of the files depends on your operating system:

* Linux: `~/.ethereum/keystore`
* MacOS: `/Library/Ethereum/keystore`
* Windows: `%APPDATA%\Ethereum\keystore`

Keystore file names begin with `UTC--` followed by a timestamp and address.

## How do I use my Mist wallet with MyCrypto?

Once you’ve found your keystore file, you can easily use this same wallet with the MyCrypto Desktop App. If you can’t find your keystore file, scroll down to the “How do I find my Mist wallet?” section.

**Step 1**: Download the MyCrypto Desktop App at [https://download.mycrypto.com](https://download.mycrypto.com).

**Step 2**: Install the MyCrypto Desktop App.

**Step 3**: Open the MyCrypto Desktop App and click **Keystore File**.

![Choose To Access Via Keystore File](assets/how-to/migrating/moving-from-mist-to-mycrypto/AccessWalletKeystore.png)

**Step 4**: Click **SELECT WALLET FILE** and navigate to your Keystore File.

**Step 5**: Enter the password that you set when you originally created the wallet. Click **Unlock**.

![Select Keystore File](assets/how-to/migrating/moving-from-mist-to-mycrypto/InsertKeystore.png)

**Step 6**: Voilà! You’ve successfully accessed your Mist wallet with MyCrypto.

Now you can send, receive, and otherwise manage your funds!

*Note: Transitioning from Mist is the perfect time to consider upgrading to a hardware wallet. A keystore file is generally acceptable if you’re confident in your personal security, but a hardware wallet is recommended if you want to take an extra step and be even more secure. [Here are some of our recommendations](https://support.mycrypto.com/staying-safe/hardware-wallet-recommendations).*

## How do I use my Mist wallet to interact with smart contracts now?

If you’re looking to interact with smart contracts with your Mist wallet (keystore file), the best place to do so is with the [MyCrypto Desktop App](https://download.mycrypto.com). Simply open the app and click on the ‘Contracts’ tab. When you go to sign a transaction within a smart contract, you’ll be prompted to input your keystore file and password.

---

We’d like to extend our gratitude to [Alex Van de Sande](https://twitter.com/avsa) and the rest of the team for all their hard work on Mist and the Ethereum wallet, and for recommending MyCrypto as one of the Ethereum wallet alternatives.
