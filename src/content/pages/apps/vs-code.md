---
title: "How to run VS Code on Android"
description: "Run desktop Visual Studio Code on Android with deVStudio: extensions, IntelliSense, Git and a built-in terminal with apt. Available on Google Play."
apps: [devstudio]
answer: "Install <strong>deVStudio</strong> from Google Play. It runs the Linux desktop edition of Visual Studio Code on Android, with extensions, IntelliSense, debugging, Git and a terminal where <code>apt</code> installs any toolchain you need."
order: 80
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>deVStudio</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Set up your toolchain"
    text: "VS Code opens with a minimal install. Open the terminal and add what you need, for example <code>sudo apt install build-essential gdb</code> for C and C++."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "Desktop VS Code: debugging, syntax highlighting, IntelliSense, snippets, refactoring and embedded Git"
  - "Extensions, themes and keybindings from the extension marketplace"
  - "A built-in terminal backed by a real Linux system with <code>apt</code>"
  - "Touch-to-mouse controls and an on-screen keyboard"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install VS Code in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and download the ARM64 <code>.deb</code> from code.visualstudio.com, then run <code>sudo apt install ./code_*.deb</code>. deVStudio does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Is this the official VS Code?"
    a: "No. deVStudio adapts the Linux desktop edition of Visual Studio Code for Android. Microsoft does not make it."
  - q: "Which languages can I use?"
    a: "Anything you can install with <code>apt</code> or a language's own installer: C, C++, Python, Node.js, Go, Rust and more."
  - q: "Can I run VS Code on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and download the ARM64 <code>.deb</code> from code.visualstudio.com, then run <code>sudo apt install ./code_*.deb</code> in its terminal. deVStudio saves you those setup steps."
related: [apps/ai-coding-tools, apps/python, guides/install-software-with-apt]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
