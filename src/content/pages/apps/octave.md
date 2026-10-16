---
title: "How to run Octave on Android"
description: "Run GNU Octave, the MATLAB-compatible numerical computing language, locally on Android with 2D/3D plotting. Install Octave from Google Play."
apps: [octave]
answer: "Install the <strong>Octave</strong> app from Google Play. It runs GNU Octave on your device (not in the cloud), so you can run MATLAB-style scripts and make 2D and 3D plots anywhere, with no restrictions."
order: 40
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>Octave</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Run your first command"
    text: "Use the Octave GUI or the command window. Try <code>x = linspace(0, 2*pi); plot(x, sin(x))</code> to draw a plot."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "A high-level numerical language that is mostly MATLAB-compatible"
  - "Built-in 2D and 3D plotting and visualization"
  - "Command-line and graphical interfaces"
  - "Runs entirely on your device, so it works offline once set up"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install GNU Octave in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install octave</code>. Octave does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Can Octave run my MATLAB code?"
    a: "Octave's language is mostly compatible with MATLAB, so many scripts run unchanged. Toolbox-specific functions may need Octave packages or small edits."
  - q: "Does it need an internet connection?"
    a: "Only for the first-time setup. After that Octave runs locally on your device."
  - q: "Can I run Octave on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install octave</code> in its terminal. Octave saves you those setup steps."
related: [apps/r, apps/gnuplot, apps/python]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
