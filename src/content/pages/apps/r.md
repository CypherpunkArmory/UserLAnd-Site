---
title: "How to run R on Android"
description: "Run the R language for statistics and graphics on Android. Install R from Google Play for modelling, tests, time series and plots on your phone or tablet."
apps: [r]
answer: "Install the <strong>R</strong> app from Google Play. It runs the Linux edition of R on your phone or tablet, so you can fit models, run statistical tests and draw plots on the go."
order: 50
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>R</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Start R"
    text: "R opens in a desktop window. Try <code>summary(cars)</code> or <code>plot(cars)</code> to make sure everything works."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "Linear and nonlinear modelling and classical statistical tests"
  - "Time-series analysis, classification and clustering"
  - "R's statistical graphics"
  - "Direct access to Android folders for your data files"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install R in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install r-base</code>. R does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Can I install CRAN packages?"
    a: "R runs on a real Linux system underneath, so <code>install.packages()</code> is available. Packages that compile native code take a while on a phone."
  - q: "Is RStudio included?"
    a: "No. The app runs R itself. You can install other tools inside a full Linux distribution with UserLAnd."
  - q: "Can I run R on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install r-base</code> in its terminal. R saves you those setup steps."
related: [apps/octave, apps/python, apps/gnuplot]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
