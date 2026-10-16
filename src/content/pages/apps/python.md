---
title: "How to run Python on Android with IDLE"
seoTitle: "How to run Python (IDLE) on Android"
description: "Write, run and debug Python on Android with IDLE, Python's own editor and shell. Install IDLE from Google Play."
apps: [idle]
answer: "Install <strong>IDLE</strong> from Google Play. It runs Python's own IDLE editor and interactive shell on Android, so you can write, run and debug real Python scripts on your phone or tablet."
order: 60
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>IDLE</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Write some Python"
    text: "IDLE's shell opens. Type <code>print(\"Hello from Android\")</code>, or use File → New File to write a script and press F5 to run it."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "A Python shell with colorized input, output and errors"
  - "A multi-window editor with undo, smart indent, call tips and autocompletion"
  - "Search and replace in any window, plus grep across files"
  - "A debugger with persistent breakpoints, stepping and namespace views"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install Python IDLE in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install idle</code>. IDLE does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Can I install extra Python packages?"
    a: "Python runs on a real Linux system underneath. For a full setup with pip and apt, install Ubuntu or Debian in UserLAnd and add the packages you need there."
  - q: "Is a keyboard required?"
    a: "No, an on-screen keyboard is built in. A Bluetooth keyboard makes coding much more comfortable."
  - q: "Can I run Python on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install idle</code> in its terminal. IDLE saves you those setup steps."
related: [apps/vs-code, apps/ai-coding-tools, guides/install-software-with-apt]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
