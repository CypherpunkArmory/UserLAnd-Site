---
title: "How to run GIMP on Android"
description: "Run the real desktop GIMP image editor on an Android phone or tablet. Install GIMP from Google Play, open it, and edit photos with touch-to-mouse controls."
apps: [gimp]
answer: "Install the <strong>GIMP</strong> app from Google Play. It runs the full Linux desktop edition of GIMP on your phone or tablet, so you get the same layers, filters, brushes and plug-ins as on a PC, with touch gestures mapped to mouse actions."
order: 10
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>GIMP</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Open GIMP and edit"
    text: "GIMP opens in a desktop window. Open a photo from <code>Pictures</code>, or start a new canvas with File → New."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "The full GIMP desktop app for photo retouching, image composition and drawing"
  - "Layers, masks, filters, brushes and the GIMP plug-ins you know"
  - "Adjustable desktop scaling, so menus are readable on a phone or roomy on a tablet"
  - "Direct access to Android folders such as Documents and Pictures"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install GIMP in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install gimp</code>. GIMP does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Is this the real GIMP or a lookalike?"
    a: "It is the Linux desktop edition of GIMP, adapted to run on Android. The GIMP team did not make the app, but the editor inside it is GIMP itself."
  - q: "Can I open and save photos from my phone's gallery?"
    a: "Yes. Your Linux home folder links to Android's Pictures, Documents and other folders, so you can open a photo, edit it and save it back without importing or exporting."
  - q: "Does it work with a stylus, mouse or keyboard?"
    a: "Touch works out of the box. A Bluetooth or USB mouse and keyboard also work, which makes long editing sessions much easier on a tablet."
  - q: "Can I run GIMP on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install gimp</code> in its terminal. GIMP saves you those setup steps."
related: [apps/inkscape, guides/run-linux-apps-free-with-userland, linux/linux-desktop-on-android]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
