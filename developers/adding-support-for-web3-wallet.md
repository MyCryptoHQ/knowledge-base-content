---
title: Adding Support for a Web3 Wallet
tags:
  - MyCrypto
date_published: '2018-05-29'
date_modified: '2021-01-15'
---

## Identifying Your Provider

If you're a web3 wallet developer or user, you'll definitely want to have people see your name and logo when they browse MyCrypto with your browser:

![Web3 on MyCrypto](../assets/developers/adding-support-for-web3-wallet/web3-mycrypto.png)

It's easy to make that happen, just [open a pull request](https://github.com/MyCryptoHQ/MyCrypto) with the following changes:

1. Add a new unique `WalletId` to [`src/types/walletId.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/types/walletId.ts).
2. Add a new entry to [`src/config/wallets.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/config/wallets.ts) using the `WalletId`. Make sure to include a logo (`.svg`) for your project in [`src/assets/images/wallets`](https://github.com/MyCryptoHQ/MyCrypto/tree/master/src/assets/images/wallets) and reference it in the entry.
3. Add a translation entry in [`src/translations/lang/en.json`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/translations/lang/en.json) for the `lid` value provided in step 2.
4. In the `getWeb3Config` function in [`src/utils/web3.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/utils/web3.ts), add a line to detect your wallet type from the Web3 provider, and return the wallet configuration added in step 2.
5. In `WALLET_STEPS` in [`src/components/SignTransactionWallets/index.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/components/SignTransactionWallets/index.ts), add a new line for your `WalletId` and use the default `SignTransactionWeb3` component.
6. Add a new entry for your `WalletId` to `WalletFactory` in [`src/services/WalletService/walletService.ts`](https://github.com/MyCryptoHQ/MyCrypto/blob/master/src/services/WalletService/walletService.ts).

## Suggesting Your Provider

If you'd like for us to suggest your Web3 provider during wallet creation or Web3 unlock as an alternative, please reach out to press@mycrypto.com.
