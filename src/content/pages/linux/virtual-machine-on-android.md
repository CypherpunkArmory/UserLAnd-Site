---
title: "How to run a Linux virtual machine on Android"
seoTitle: "How to run a Linux VM (and Docker) on Android without root"
description: "Run a full Linux virtual machine with its own kernel on Android, no root needed, using UserLAnd Pro and Android's Virtualization Framework. Run Docker too."
apps: [userland]
answer: "With <strong>UserLAnd Pro</strong> on a device that supports Android's Virtualization Framework (AVF), you can run Linux as a real virtual machine with its own kernel, without root. That lets you run Docker and other tools that a standard Android app can't."
order: 90
steps:
  - name: "Install UserLAnd and get Pro"
    text: "Install UserLAnd from Google Play, then unlock UserLAnd Pro in the app. VM sessions are a Pro feature."
  - name: "Create a filesystem with the Virtual Machine backend"
    text: "When you set up a distribution, choose <strong>Virtual Machine</strong> as the execution backend."
  - name: "Run the UserLAnd VM setup wizard"
    text: "The first time, UserLAnd walks you through installing UserLAnd VM and granting it permission to run virtual machines."
  - name: "Choose CPU and memory"
    text: "Pick how many CPU cores and how much RAM the VM can use for this launch."
  - name: "Boot and connect"
    text: "The VM boots and you connect by terminal or desktop, just like a standard session."
features:
  - "A full Linux kernel inside a real VM"
  - "Docker and other kernel-dependent tools"
  - "Per-launch CPU and RAM settings"
  - "Choice of how storage is shared with Android"
  - "QEMU emulation for devices without AVF (also Pro)"
requirements:
  - "UserLAnd Pro"
  - "A device whose Android build supports the Virtualization Framework (AVF) for VM mode"
  - "Enough RAM to give the VM (more is better)"
faq:
  - q: "Which devices support Linux VMs?"
    a: "VM mode needs a device whose Android build exposes the Virtualization Framework (AVF). Support varies by manufacturer and Android version."
  - q: "Does it need root?"
    a: "No. AVF is part of Android, and UserLAnd uses it without root."
  - q: "Can I run Docker on Android this way?"
    a: "Yes. VM sessions run a full Linux kernel, so Docker works inside them."
  - q: "What if my device doesn't support AVF?"
    a: "UserLAnd Pro also offers QEMU emulation, which works without AVF but is slower than a hardware VM. The free standard mode works on almost every device."
related: [linux/how-to-run-linux-on-android, linux/kali-linux-on-android, linux/ubuntu-on-android]
---

