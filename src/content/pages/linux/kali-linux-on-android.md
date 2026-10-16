---
title: "How to install Kali Linux on Android"
description: "Install Kali Linux on Android with no root using UserLAnd, a free app. Get a terminal or a full desktop and install packages with apt."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> from Google Play, tap <strong>Kali</strong>, choose a username and password, and pick Terminal or Graphical. UserLAnd downloads Kali Linux and opens it, with no root required. Kali Linux brings the security-testing toolset to your phone. Install the tools you need with apt, and only test systems you have permission to test."
order: 30
steps:
  - name: "Install UserLAnd from Google Play"
    text: "UserLAnd is free, and no root is needed."
  - name: "Tap Kali"
    text: "Open UserLAnd. On the <strong>Apps</strong> tab, tap <strong>Kali</strong>."
  - name: "Create your Linux user"
    text: "Enter a username and password for Linux. If you want a graphical desktop, also set a VNC password (6 to 8 characters)."
  - name: "Choose Terminal or Graphical"
    text: "<strong>Terminal</strong> opens a command line. <strong>Graphical</strong> opens a desktop through UserLAnd's built-in VNC viewer, and asks which desktop environment you want."
  - name: "Wait for the download"
    text: "UserLAnd downloads and sets up the filesystem. This takes a few minutes the first time; stay on Wi-Fi."
  - name: "Install packages with apt"
    text: "You are now in Kali Linux. Install software with <code>sudo apt update && sudo apt install nmap</code>."
requirements:
  - "An Android phone or tablet"
  - "Free storage space for the filesystem"
  - "Wi-Fi for the first download"
faq:
  - q: "Do all Kali tools work without root?"
    a: "Many do. Tools that need raw network access or kernel features may not work in the standard (proot) mode, because Android doesn't give apps those permissions. VM mode runs a real Linux kernel on supported devices."
  - q: "Is this the same as Kali NetHunter?"
    a: "No. NetHunter is the Kali project's own Android offering. UserLAnd runs the Kali distribution as a regular app."
  - q: "Is it free to run Kali Linux on Android?"
    a: "Yes. UserLAnd and its distributions are free. UserLAnd Pro is an optional upgrade for VM sessions, LXDE/XFCE desktops, sound and file access."
related: [linux/virtual-machine-on-android, linux/debian-on-android, guides/install-software-with-apt]
---

