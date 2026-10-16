---
title: "How to install Alpine Linux on Android"
description: "Install Alpine Linux on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with apk."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Alpine</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Alpine Linux and opens it, with no root required. Alpine Linux is tiny and fast to download, which makes it ideal for phones with limited storage."
order: 50
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Alpine"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Alpine</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with apk"
    text: "You are now in Alpine Linux. Install software with <code>sudo apk add git python3</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Why is Alpine so small?"
    a: "Alpine uses musl libc and BusyBox, so a base install is a few megabytes. Some software built for glibc won't run on it without changes."
  - q: "Is it free to run Alpine Linux on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [linux/arch-linux-on-android, linux/debian-on-android, linux/how-to-run-linux-on-android]
---

