---
title: "How to run desktop Firefox on Android"
description: "Run the desktop version of Firefox, with desktop extensions and developer tools, on Android using FoxBox from Google Play."
apps: [foxbox]
answer: "Install <strong>FoxBox</strong> from Google Play. It runs a Linux desktop build of Firefox on Android, so you get desktop extensions, developer tools and real desktop websites, not the mobile versions."
order: 100
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>FoxBox</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Browse like on a PC"
    text: "Firefox opens as a desktop window. Websites see a desktop browser, so you get full desktop layouts and features."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "Desktop page rendering, so sites behave as they do on a PC"
  - "Standard desktop Firefox extensions"
  - "Developer tools"
  - "A built-in file manager for files on your device, once you grant permission"
  - "Sound support"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install desktop Firefox in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install firefox-esr</code>. FoxBox does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "How is this different from Firefox for Android?"
    a: "Desktop Firefox has different features from the Android app, and websites act differently in a real desktop browser, even when you request the desktop site."
  - q: "Is FoxBox made by Mozilla?"
    a: "No. FoxBox is not Firefox itself and is not a Mozilla project. It is a compatibility layer that runs a Linux desktop build of Firefox."
  - q: "Can I run desktop Firefox on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install firefox-esr</code> in its terminal. FoxBox saves you those setup steps."
related: [apps/thunderbird, apps/libreoffice, guides/run-linux-apps-free-with-userland]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
