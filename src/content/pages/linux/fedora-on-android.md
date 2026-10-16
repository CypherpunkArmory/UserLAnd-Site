---
title: "How to install Fedora on Android"
description: "Install Fedora on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with dnf."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Fedora</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Fedora and opens it, with no root required. Fedora gives you recent packages and the dnf package manager, close to what you'd use on a Fedora workstation."
order: 60
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Fedora"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Fedora</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with dnf"
    text: "You are now in Fedora. Install software with <code>sudo dnf install git</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Is it free to run Fedora on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [linux/ubuntu-on-android, linux/arch-linux-on-android, linux/how-to-run-linux-on-android]
---

