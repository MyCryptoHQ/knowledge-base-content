---
title: 'Cannot See the Extended Validation (''MyCrypto, Inc.'') Certificate'
description: Security & Phishing
priority: 85
date_published: '2017-12-28'
date_modified: '2018-12-15'
---

On MyCrypto.com you should be able to see the Extended Validation Certificate (EV SSL) in your  URL bar. However, some anti-virus applications like BitDefender prevent you from seeing the EV SSL. These antivirus applications essentially perform a man-in-the-middle attack. Simply put, they scan all your traffic from and to MyCrypto by replacing the original SSL certificate.

This can cause a security risk, as you are not able to verify whether you are on the right URL. Fortunately, the way to solve this is by simply disabling the SSL scanning feature of your antivirus application.

### How To Disable SSL Scanning

If you are using BitDefender, please follow these steps in order to solve the issue:

1. Open BitDefender.
2. Click on `View Features`.
3. Click on the settings icon under the `Web Protection` section.
4. Disable the `Scan SSL` option.

Now, if you restart your browser, you should be able to see the EV SSL on MyCrypto.

If you are using another antivirus application and you are having this issue, the steps should be very similar. Look for web protection settings in the antivirus configuration and look for something similar to SSL scanning.
