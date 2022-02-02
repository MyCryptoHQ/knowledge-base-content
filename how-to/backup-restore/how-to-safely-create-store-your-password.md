---
title: How to Safely Create and Store Your Password
description: Getting Started
tags:
  - Quill
priority: 100
date_published: '2022-02-02'
date_modified: '2022-02-02'
---

Quill requires you to set up a secure password upon your first time getting started, and uses the [zxcvbn password strength estimator](https://github.com/dropbox/zxcvbn) to ensure your security. The estimator will give you tips on bolstering any password that isn't up to snuff.

Thinking up and remembering strong passwords on your own can be quite challenging, so we highly recommend using a password manager or password generator to automatically create a really complex one. You should only use this password for Quill, and no other service.

Be aware that if you lose your Quill password, it'll be gone forever. In the event that you lose your password, you can reset your Quill interface, but this will result in you losing your Quill settings. **Always** make an offline backup of your Secret Recovery Phrase(s), or you might risk losing access to your funds.

## Setting up a Password Manager

The two most recommended and accessible solutions for password managers are [LastPass](https://www.lastpass.com/how-lastpass-works) and [1Password](https://1password.com/). These are “cloud-based,” although all your secret data is protected and encrypted by a “Master Password” that never leaves your computer / device. This means that there is no “forgot password” button and no way to access your account if you forget your master password.

This level of security when it comes to your master password is paramount since if it were to be compromised, an attacker would gain access to any and all passwords, notes, card information, address information, private keys, SSH information, or other secure information you put in the password manager. Most obviously, an attacker can now use this information to access your accounts. Less obviously, they have a list of all the passwords you have historically used.

There are also local password manager solutions, such as [KeePass](https://keepass.info/), which don't use any cloud-based backup. These can be used fully offline and stored on a USB thumb drive.

### Action Items

_Note: Not all of these may be available for your specific password manager._

1. Update your master password to ensure it is really, really, really strong, unique, secure, and unforgettable. Don't store the password anywhere except written down, off a computer, where it cannot be lost or damaged.
2. If you use LastPass, 1Password, or another solution that supports 2FA, enable 2FA via Google Authenticator and / or a hardware device like Yubico.
3. Remove any email or SMS Account Recovery.
4. See if there is a “security email” or “secondary email” that can be set up to receive notifications about new logins and security alerts. This helps prevent an attacker from intercepting and deleting these emails if they gain access to your primary email.
5. Enable auto logouts after a certain period of time to ensure there aren’t any random open sessions floating around.
6. Remove any trusted devices that you aren’t actively using.
7. Remove any mobile devices that you aren’t actively using.
8. Once you have passwords in your password manager, check out their “[security challenge](https://helpdesk.lastpass.com/lastpass-security-challenge/)” or “[watchtower](https://support.1password.com/watchtower/).” This will help you update duplicate and weak passwords and highlight your weak spots. Repeat periodically.

If your password manager is a local solution, ensure that your backups are in offline storage and your local devices are encrypted.
