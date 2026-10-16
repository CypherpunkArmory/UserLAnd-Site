---
title: "How to run any Linux app on Android for free"
description: "Install GIMP, LibreOffice, Firefox, Thunderbird, Inkscape, Audacity, Octave, R and thousands more Linux apps free on Android with UserLAnd and apt."
apps: [userland]
answer: "Install <strong>UserLAnd</strong> (free on Google Play), set up <strong>Debian</strong> with a <strong>Graphical</strong> connection, then open a terminal and install the app you want with <code>sudo apt install</code>. Almost any Linux desktop program that runs on ARM works this way, with no root required."
order: 10
steps:
  - name: "Install UserLAnd"
    text: "Get UserLAnd free from Google Play."
  - name: "Set up Debian with a desktop"
    text: "On the <strong>Apps</strong> tab, tap <strong>Debian</strong>. Enter a Linux username and password plus a VNC password (6 to 8 characters), then choose <strong>Graphical</strong>."
  - name: "Open a terminal"
    text: "When the desktop appears, open a terminal from its menu."
  - name: "Install your app"
    text: "Run <code>sudo apt update</code>, then install the program, for example <code>sudo apt install gimp</code>. Use the Linux password you chose during setup."
  - name: "Launch it"
    text: "Start the program from the desktop menu, or type its name in the terminal."
features:
  - "Office: LibreOffice, GIMP, Inkscape, Audacity"
  - "Internet: Firefox ESR, Thunderbird"
  - "Development: Python IDLE, Git, compilers and more"
  - "Math and science: Octave, R, gnuplot"
faq:
  - q: "What is the difference between installing apps in UserLAnd and the paid standalone apps?"
    a: "They run the same software. The standalone apps (GIMP, LibreDocs, FoxBox and the rest) do the setup for you and open straight into the program, and buying them supports development."
  - q: "Why Debian instead of Ubuntu?"
    a: "Both work, but on Ubuntu some apps, including Firefox and Thunderbird, install as snaps, and snaps don't run in UserLAnd's standard mode. Debian installs them as regular packages."
  - q: "Can I hear sound from apps?"
    a: "Sound and microphone support in UserLAnd is part of UserLAnd Pro."
related: [guides/install-software-with-apt, linux/linux-desktop-on-android, apps/gimp, apps/libreoffice]
---

## Install commands, or one tap with a standalone app

All commands are for Debian in UserLAnd.

| Software | Install it free in UserLAnd | Or get the standalone app |
|---|---|---|
| GIMP | `sudo apt install gimp` | [GIMP](/apps/gimp/) |
| Inkscape | `sudo apt install inkscape` | [Inky](/apps/inkscape/) |
| LibreOffice | `sudo apt install libreoffice` | [LibreDocs](/apps/libreoffice/) |
| Audacity | `sudo apt install audacity` | [Andacious](/apps/audacity/) |
| Firefox (desktop) | `sudo apt install firefox-esr` | [FoxBox](/apps/firefox/) |
| Thunderbird | `sudo apt install thunderbird` | [BirdBox](/apps/thunderbird/) |
| Python IDLE | `sudo apt install idle` | [IDLE](/apps/python/) |
| Octave | `sudo apt install octave` | [Octave](/apps/octave/) |
| R | `sudo apt install r-base` | [R](/apps/r/) |
| gnuplot | `sudo apt install gnuplot` | [gnuplot](/apps/gnuplot/) |
| VS Code | ARM64 `.deb` from code.visualstudio.com, then `sudo apt install ./code_*.deb` | [deVStudio](/apps/vs-code/) |
