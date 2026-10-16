---
title: "How to run Linux on Android"
seoTitle: "How to run Linux on Android (no root): Ubuntu, Debian, Kali and more"
description: "Run Ubuntu, Debian, Kali, Arch, Alpine or Fedora on Android without root using UserLAnd, a free app. Terminal, full desktops and VMs, step by step."
apps: [userland]
answer: "Install <strong>UserLAnd</strong>, a free app from Google Play. Open it, tap a Linux distribution such as Ubuntu, choose a username and password, and pick Terminal or Graphical. A few minutes later you have a real Linux system on your phone or tablet, with no root required."
order: 1
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
  - name: "Start using Linux"
    text: "You land in a shell (or a desktop). Install software with the distribution's package manager, for example <code>sudo apt update && sudo apt install git</code> on Ubuntu or Debian."
features:
  - "<strong>Six distributions:</strong> Ubuntu, Debian, Kali, Arch, Alpine and Fedora"
  - "<strong>Thousands of Linux programs</strong>, such as GIMP, LibreOffice, Firefox and Thunderbird, installed with your distribution's package manager"
  - "<strong>Terminal</strong> with your favorite shells, plus SSH access"
  - "<strong>Graphical desktops</strong> through a built-in VNC viewer"
  - "<strong>No root</strong>: install and uninstall UserLAnd like any other app"
  - "<strong>Free</strong>, with an optional Pro upgrade"
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the Linux filesystem (a few hundred MB to several GB, depending on what you install)"
  - "Wi-Fi for the first download"
faq:
  - q: "Do I need to root my phone to run Linux?"
    a: "No. UserLAnd's standard mode runs Linux distributions without root. The optional virtual machine mode doesn't need root either; it uses Android's own Virtualization Framework on supported devices."
  - q: "Which Linux distributions can I run on Android?"
    a: "UserLAnd offers Ubuntu, Debian, Kali, Arch, Alpine and Fedora."
  - q: "Is UserLAnd free?"
    a: "Yes. UserLAnd is free. An optional Pro upgrade adds virtual machine sessions, LXDE and XFCE desktops, sound and microphone, access to your phone's files (/sdcard), and backup and restore."
  - q: "Can I run a full Linux desktop?"
    a: "Yes. Choose <strong>Graphical</strong> when you start a distribution, and UserLAnd opens the desktop in its built-in VNC viewer. See <a href=\"/linux/linux-desktop-on-android/\">Linux desktop on Android</a>."
  - q: "Can I run Docker on Android?"
    a: "With UserLAnd Pro, on devices that support Android's Virtualization Framework, virtual machine sessions run a full Linux kernel, which lets you run Docker. See <a href=\"/linux/virtual-machine-on-android/\">Linux VMs on Android</a>."
  - q: "What happened to GNURoot Debian?"
    a: "UserLAnd is made by the team behind GNURoot Debian and replaces it."
related: [linux/ubuntu-on-android, linux/linux-desktop-on-android, linux/virtual-machine-on-android, guides/install-software-with-apt]
---

## Three ways to run Linux in UserLAnd

| Mode | What it is | Needs |
|---|---|---|
| **Standard** | Linux userland on Android's own kernel (proot). Fast to set up, works almost everywhere. | Nothing extra, free |
| **Virtual machine** | A full Linux VM with its own kernel, using Android's Virtualization Framework (AVF). Runs Docker and other tools that need a real kernel. | UserLAnd Pro and a supported device |
| **QEMU emulation** | A fully emulated machine for devices without AVF. | UserLAnd Pro |

You pick the mode per filesystem when you set it up. Most people start with **Standard**.

## Sessions and filesystems

UserLAnd has three tabs. **Apps** is where you pick a distribution to install. **Sessions** lists running Linux servers you can reconnect to. **Filesystems** holds your Linux installs; you can keep several side by side.
