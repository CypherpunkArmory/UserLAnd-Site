---
title: "How to install Debian on Android"
description: "Install Debian on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with apt."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Debian</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Debian and opens it, with no root required. Debian is stable and lightweight, and it is the base UserLAnd uses for most one-tap apps like GIMP and LibreOffice."
order: 20
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Debian"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Debian</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with apt"
    text: "You are now in Debian. Install software with <code>sudo apt update && sudo apt install vim git</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Is this the successor to GNURoot Debian?"
    a: "Yes. UserLAnd is made by the team behind GNURoot Debian and replaces it."
  - q: "Is it free to run Debian on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [linux/ubuntu-on-android, guides/run-linux-apps-free-with-userland, guides/install-software-with-apt]
---

