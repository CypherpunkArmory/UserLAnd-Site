---
title: "How to install Arch Linux on Android"
description: "Install Arch Linux on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with pacman."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Arch</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Arch Linux and opens it, with no root required. Arch Linux gives you a minimal, rolling-release base that you build up yourself with pacman."
order: 40
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Arch"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Arch</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with pacman"
    text: "You are now in Arch Linux. Install software with <code>sudo pacman -Syu git</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Which architecture is it?"
    a: "UserLAnd uses the build for your device's CPU, which on most phones is Arch Linux ARM."
  - q: "Is it free to run Arch Linux on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [linux/alpine-linux-on-android, linux/ubuntu-on-android, linux/how-to-run-linux-on-android]
---

