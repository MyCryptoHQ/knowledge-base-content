---
title: 'How to Import a Private Key, Keystore File, or Secret Phrase'
description: Quill
tags:
  - Quill
priority: 100
date_published: '2022-02-02'
date_modified: '2022-02-02'
---

Besides [setting up a brand new Quill wallet](/how-to/quill/getting-started-with-quill), it's also possible to import already existing private keys, keystore files, or Secret Recovery Phrases (mnemonic phrases) to your Quill instance.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/add-button.png)

To get started with importing a new account, find the "+" button in the top right of your Quill interface.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/import-account-button.png)

Click "Import an Account", and follow the instructions of the wallet type that you want to import.

<Accordion>
<AccordionItem title="Importing a Secret Recovery Phrase">

If you already used Quill previously, and wish to import your Secret Recovery Phrase, take a look at our article on [Restoring Your Quill Account(s)](/how-to/quill/how-to-restore-quill-accounts).

However, Quill also allows you to import any 12- or 24-word phrase generated with other wallets.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/enter-secret-phrase.png)

Enter your Secret Recovery Phrase in the correct order. If you've used a password previously, enter it in the password field. Keep in mind that the password field is optional, and other accounts will show up with different passwords. Read more on [how Secret Recovery Phrases work](/general-knowledge/cryptography/how-do-mnemonic-phrases-work).

Once you enter your phrase and additional password, click "Next."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/select-derivation.png)

A list of addresses derived from the phrase you entered will appear. Select any that you would like to add to Quill, and click "Review Security Details".

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/security-note.png)

Review the security pointers, and continue by clicking "Acknowledge and Continue."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/backup-phrase.png)

Quill will then ask you to ensure that you're safely storing your Secret Recovery Phrase, and also allows you to print a paper backup if desired. Once you make sure your phrase is stored safely, continue by clicking "My Phrase is Stored Safely, Add Account."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/success-add.png)

</AccordionItem>
<AccordionItem title="Importing a Private Key">

A raw private key is a string of 64 characters, consisting of a combination of characters between A-F and 0-9.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/enter-private-key.png)

Click "Private Key" and enter your private key. Hit "Review Security Details" to go to the next step.

If you get an error or are unable to continue, make sure that you entered your private key correctly and no characters are missing.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/security-note.png)

Review the security pointers and continue by clicking "Acknowledge and Continue."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/backup-priv-key.png)

Quill will then ask you to ensure that you're safely storing your private key, and also allows you to print a paper backup if desired. Once you make sure your key is stored safely, continue by clicking "My Phrase is Stored Safely, Add Account."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/success-add.png)

You've successfully added your Secret Recovery Phrase account(s) to Quill! Head on over to app.mycrypto.com to add your account(s) to your MyCrypto Dashboard.

</AccordionItem>
<AccordionItem title="Importing a Keystore File">

Keystore files, commonly known as UTC/JSON files, are files that are generated using a private key + a password of your choosing, essentially encrypting the private key.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/select-keystore.png)

Click "Keystore," and either drag and drop your keystore file into Quill or click "Browse" to select the keystore file on your computer. Enter the password associated with this keystore file and hit "Review Security Details" to go to the next step.

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/security-note.png)

Review the security pointers, and continue by clicking "Acknowledge and Continue."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/backup-keystore.png)

Quill will then ask you to ensure that you're safely storing your private key, and also allows you to print a paper backup if desired. Once you make sure your key is stored safely, continue by clicking "My Phrase is Stored Safely, Add Account."

![](../../assets/how-to/quill/how-to-import-private-key-keystore-file-phrase/success-add.png)

You've successfully added your Secret Recovery Phrase account(s) to Quill! Head on over to app.mycrypto.com to add your account(s) to your MyCrypto Dashboard.

</AccordionItem>
</Accordion>
