---
title: How to Use Your TREZOR Hardware Wallet with MyCrypto
description: Accessing your Wallet
priority: 3
date_published: '2018-04-18'
date_modified: '2018-12-14'
---



The TREZOR is one of the best and easiest-to-use cryptocurrency hardware wallets out there It is available for purchase [here](https://shop.trezor.io/?offer_id=10&aff_id=1735). While the TREZOR supports a wide range of cryptocurrencies, this guide was specifically written for using Ether and ERC-20 tokens with MyCrypto.

<div class="alert alert-info">
  When connecting to your TREZOR, you do not generate a new wallet on MyCrypto. Your TREZOR is your wallet and you use your TREZOR device now to store and send Ether & tokens.
</div>


##  Initial Setup

1. **Plug your device into your computer** using the USB cable provided.

2. **Go to the URL displayed on your device.** You can use the buttons on your device to confirm/deny actions. ![](https://i.imgur.com/3krRHps.jpg) ![](https://i.imgur.com/nFt5R6p.jpg)

3. **Read all the information** shown to you on your TREZOR device and on the TREZOR initialization pages. Take your time—this device is going to be protecting your funds! ![](https://i.imgur.com/9XgRqKi.jpg) ![](https://i.imgur.com/WKuHHe3.jpg)

4. **Click the "Done, let's go!" button**.
    * You will then be redirected to [wallet.trezor.io](https://wallet.trezor.io/). This is where you will be setting up your TREZOR.

5. **Enter a name for your TREZOR.**

6. **Click "Continue."**

7. **Enter a new PIN** that you will use to access your TREZOR any time you want to access your wallets.
    *  Make sure this pin is hard to guess, so that others won't be able to get access to your TREZOR.
    *  If you are not sure how PINs work with the TREZOR, look [here](http://doc.satoshilabs.com/trezor-user/enteringyourpin.html) for more information.
    *  E.g., I want to set "8963" as a pin. This would mean that I have to click the lower-left button, then the middle-right button, then the lower-middle button, and finally the upper-left button. ![](https://i.imgur.com/A6zBzI3.jpg) ![](https://i.imgur.com/CJERk10.jpg)

8. **Re-enter the PIN you just created.**
    *  Be aware that the order of the numbers on the display of your TREZOR has changed, so you will have to click different buttons on your computer in order to enter the correct PIN. ![](https://i.imgur.com/jCWKVML.jpg) ![](https://i.imgur.com/zvs3p8A.jpg)

9. **Write down your recovery words.**
    *  The TREZOR will give you 24 random words that you will have to write down on the provided card that came in the box. These are the recovery words, also known as a seed phrase.
    *  You will have to use these words to restore your TREZOR in case it fails or you accidentally reset it.
    *  **Do not save these recovery words on your computer or take a photo of these words with your phone.** Doing so means you are just as unsafe as using a normal private key.
    *  Always write them down physically using pen and paper, and keep this paper safe. ![](https://i.imgur.com/27wfOOI.jpg) ![](https://i.imgur.com/DnPRxNY.jpg)

10. **Confirm your recovery words.**
    *  Once you've written down all of the words, it will ask you to confirm your recovery phrase in order to make sure that you've written them down correctly. ![](https://i.imgur.com/VwxBKXC.jpg)

###### Now your TREZOR is all set up and ready to be used!




## Connecting to your TREZOR with MyCrypto

###### It's time to access your TREZOR using MyCrypto! In order to do so, go to [MyCrypto.com](https://mycrypto.com/).

1. Plug in your TREZOR.

2. Select the TREZOR option on MyCrypto.

3. Click the blue `Connect to TREZOR` button on MyCrypto. ![](https://i.imgur.com/sbtmPkz.png) ![](https://i.imgur.com/0DYJzXJ.png)

4. A window reading "Export public key for "Ether Account Number [...]" will pop up. Click "Export." ![](https://i.imgur.com/pGcr5Vx.png)

5. A list of your Ethereum addresses will be displayed on MyCrypto, all of which are accessible via your TREZOR. Select one of these addresses. ![](https://i.imgur.com/d9ekI6V.png)

6. Once you select one of the addresses, the interface looks just the same as if you were to enter your private key to access it; it's no different.

###### Your TREZOR is ready to be used!



## Transferring funds from your private key to the TREZOR

###### Sending ETH or tokens to your TREZOR works the same as sending to any other address.

1. Pick one of the addresses on the list when you access your TREZOR.

2. Copy this address to your clipboard.

3. Unlock your original Ethereum account address (via private key, MetaMask, or JSON file—wherever you are transferring from).

4. Paste your TREZOR address into the "To Address" field and send your ETH and tokens.

5. The next time you unlock your TREZOR wallet, you will be able to see your safely-stored funds!




## Sending funds FROM your TREZOR

###### In order to send from your TREZOR hardware wallet, connect to your TREZOR per the instructions above.

1. You should now see a "Send Ether & Tokens" view on MyCrypto.com.

2. The address displayed under "Account Address" on the right side of the screen should match the address you selected earlier.

![](https://i.imgur.com/6TMYHBC.png)

3. Enter the address you would like to send to in the `To Address:` field.

4. Enter the `Amount` you would like to send.

5. If you are sending tokens, click the `Scan for Tokens` button.

6. Then select the token you would like to send from the dropdown next to Amount.

7. Use the `Transaction Fee` slider to select how much [gas](https://support.mycrypto.com/gas/what-is-gas-ethereum.html) to use for your transaction. ![](https://i.imgur.com/KteZ6QV.png)

8. Click the `Send Transaction` button when you are ready to go. *(Don't worry, you will be able to review the transaction before it is sent).* ![](https://i.imgur.com/ehmhdcG.png)

9. A pop-up will appear. Click `Details` for a more information about your transaction. Please double check the information before you click send. ![](https://i.imgur.com/0tvFXdy.png)

10. After you click `Send Transaction`, a green message should appear at the bottom of your screen. You can click the buttons to view and verify the transaction on Etherscan, Etherchain, or MyCrypto to check the transaction status. ![](https://i.imgur.com/VaY7g4h.png)


<div class="alert alert-info">
  [If your transaction never shows up on Etherscan / Etherchain / MyCrypto after a new minutes, you may need to send with more gas. Click to learn more about gas.](https://support.mycrypto.com/gas/).
</div>





## Restoring your TREZOR

*  TREZOR made a clear and easy-to-follow guide on how to restore your TREZOR [here](https://doc.satoshilabs.com/trezor-user/recovery.html).




## Troubleshooting

*  TREZOR has an extensive knowledge base that you can find [here](https://trezor.io/support/), and MyCrypto's is [here](https://support.mycrypto.com/). There is a big chance that any issue you might encounter is already listed on one of them.

*  If you need further assistance, reach out to [TREZOR](https://satoshilabs.kayako.com/conversation/new/2) or [MyCrypto](https://support.mycrypto.com/) support.
