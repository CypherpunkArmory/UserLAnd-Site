---
path: '/docs'
title: 'UserLAnd CLI Reference Guide'
nav:
  - name: 'Setup'
    href: '#setup-top'
    routes:      
      - name: 'Setup Command'
        href: '#setup'
      - name: 'Login'
        href: '#login'
      - name: 'Generate key'
        href: '#generate-key'
  - name: 'Start'
    href: '#start-top'
    routes:
      - name: 'Start Command'
        href: '#start'
  - name: 'Update'
    href: '#update'
---

<a name="setup-top"></a>

# Setup

<a name="setup"></a>

## Setup Command

Setup ulacli (run this first)

### Synopsis

Sets up ulacli for usage.  
This will ask you for your UserLAnd credentials and help you create pub/priv keys if needed.  
`ulacli setup [flags]`  

### Options

`  -h, --help   help for setup`

<a name="login"></a>

## Login

Login to UserLAnd.

### Synopsis

Will prompt you for username and password, or you can provide them as optional arguments.  
If this is your first time using ulacli, you should use `ulacli setup` instead of `ulacli login`.  
`ulacli login [flags]`

### Options

```
  -h, --help              help for login  
  -p, --password string   Your userland.tech password  
  -u, --username string   Your userland.tech username  
```

<a name="generate-key"></a>

## Generate Key

Generates a pub/priv keypair at the specified location

### Synopsis

Generates a pub/priv keypair at the specified location otherwise defaults to current directory.  
You can also specify a name for it using the `-n` flag.  
`ulacli generate-key [directory] [flags]`  

### Options

```
  -n, --filename string   The name your new key files will have (default "userland_key")  
  -h, --help              help for generate-key  
```

<a name="start-top"></a>

# Start

<a name="start"></a>

## Start Command

Start and connect to a UserLAnd Cloud box

### Synopsis

Start and connect to a UserLAnd Cloud box.
Only supports a basic Ubuntu box right now.  
`ulacli start [flags]`  

### Options

`  -h, --help   help for http`

<a name="update"></a>

## Update

Update CLI version

### Synopsis

Update CLI to latest release on github.  
`ulacli update [flags]`  

### Options

`  -h, --help   help for update`

