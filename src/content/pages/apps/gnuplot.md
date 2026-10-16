---
title: "How to run gnuplot on Android"
description: "Make 2D and 3D plots of functions and data with gnuplot on Android. Install gnuplot from Google Play for interactive or scripted plotting."
apps: [gnuplot]
answer: "Install the <strong>gnuplot</strong> app from Google Play. It runs the Linux desktop edition of gnuplot on Android, so you can plot functions and data interactively or from scripts and export publication-quality images."
order: 70
steps:
  - name: "Install the app from Google Play"
    text: "Search Google Play for <strong>gnuplot</strong> by UserLAnd Technologies, or use the button on this page. It is a one-time purchase."
  - name: "Open it and let it set up"
    text: "The first launch downloads and sets up the Linux files the app needs. Stay on Wi-Fi; this only happens once."
  - name: "Draw a plot"
    text: "At the gnuplot prompt, try <code>splot sin(x)*cos(y)</code> for a 3D surface, or <code>plot 'data.txt' with lines</code> for a file in your home folder."
  - name: "Use touch as a mouse"
    text: "Tap with one finger to click, two-finger tap to right-click, pinch to zoom, slide two fingers to scroll, and hold and slide to pan. Tap the screen and choose the keyboard icon to type."
features:
  - "2D, 3D, contour and parametric plots, histograms and box plots"
  - "Output to the screen or to PNG, SVG, EPS, JPEG, LaTeX and more"
  - "Interactive or scripted use, with loops, functions and macros"
  - "Non-linear, multi-dimensional weighted data fitting"
requirements:
  - "An Android phone or tablet with Google Play"
  - "Free storage for the Linux files (a tablet or a phone with a large screen is most comfortable)"
  - "Internet for the first-time setup"
  - "Optional: a Bluetooth or USB keyboard and mouse"
freeInUserland: "UserLAnd is free, and you can install gnuplot in it yourself: in UserLAnd, set up <strong>Debian</strong>, choose <strong>Graphical</strong>, open a terminal and run <code>sudo apt install gnuplot</code>. gnuplot does all of that for you in one tap, and buying it supports UserLAnd development."
faq:
  - q: "Can I save plots as images?"
    a: "Yes. Set a terminal such as <code>set terminal pngcairo</code> and an output file, and the image lands in your folders where other Android apps can open it."
  - q: "Can I run gnuplot on Android for free?"
    a: "Yes. Install Debian in the free UserLAnd app and run <code>sudo apt install gnuplot</code> in its terminal. gnuplot saves you those setup steps."
related: [apps/octave, apps/r, apps/python]
---

## Working with your files

Your Linux home folder (<code>/home/userland</code>) links to Android's Documents, Pictures and other folders, so you open and save files there directly.
