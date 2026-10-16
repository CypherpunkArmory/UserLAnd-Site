---
title: "How to install Ubuntu on Android"
description: "Install Ubuntu on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with apt."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Ubuntu</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Ubuntu and opens it, with no root required. Ubuntu is the most popular choice in UserLAnd and a great default: huge package selection, lots of tutorials, and the base that AiCLI uses for AI coding tools."
order: 10
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Ubuntu"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Ubuntu</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with apt"
    text: "You are now in Ubuntu. Install software with <code>sudo apt update && sudo apt install build-essential</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Can I install Ubuntu without root?"
    a: "Yes. UserLAnd installs Ubuntu as a regular Android app, with no root and no bootloader unlocking."
  - q: "Can I install snaps?"
    a: "Snap needs systemd, which isn't available in the standard mode. Use <code>apt</code> packages, or VM mode on supported devices."
  - q: "Is it free to run Ubuntu on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [apps/ai-coding-tools, linux/debian-on-android, guides/install-software-with-apt]
---

