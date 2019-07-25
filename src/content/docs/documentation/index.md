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
  - name: 'Subdomain'
    href: '#subdomain'
    routes:
      - name: 'List'
        href: '#list'
      - name: 'Reserve'
        href: '#reserve'
      - name: 'Release'
        href: '#release'
  - name: 'Tunnels'
    href: '#tunnels'
    routes:
      - name: 'HTTP'
        href: '#http'
      - name: 'HTTPS'
        href: '#https'
      - name: 'Multiple ports'
        href: '#it'
  - name: 'Update'
    href: '#update'
  - name: 'Cleanup'
    href: '#cleanup'
---

<a name="setup-top"></a>

# Setup

<a name="setup"></a>

## Setup Command

Setup userland (run this first)

### Synopsis

Sets up userland for usage.  
This will ask you for your userland credentials and help you create pub/priv keys if needed.  
`userland setup [flags]`  

### Options

`  -h, --help   help for setup`

<a name="login"></a>

## Login

Login to userland.

### Synopsis

Will prompt you for username and password, or you can provide them as optional arguments.  
If this is your first time using userland, you should use `userland setup` instead of `userland login`.  
`userland login [flags]`

### Options

```
  -h, --help              help for login  
  -p, --password string   Your userland.io password  
  -u, --username string   Your userland.io username  
```

<a name="generate-key"></a>

## Generate Key

Generates a pub/priv keypair at the specified location

### Synopsis

Generates a pub/priv keypair at the specified location otherwise defaults to current directory.  
You can also specify a name for it using the `-n` flag.  
`userland generate-key [directory] [flags]`  

### Options

```
  -n, --filename string   The name your new key files will have (default "holepunch_key")  
  -h, --help              help for generate-key  
```

<a name="subdomain"></a>

# Subdomain 

<a name="list"></a>

## List

List your subdomains

### Synopsis

List subdomains you have previously reserved or that are currently in use by you.  
`userland list [flags]`  

### Options

`  -h, --help   help for list`

<a name="reserve"></a>

## Reserve

Reserve a subdomain

### Synopsis

Reserve a subdomain to secure the subdomain for future use.  
Once reserved only you can use it.  
`userland reserve <subdomain> [flags]`  

### Options

`  -h, --help   help for reserve`

<a name="release"></a>

## Release

Release subdomain

### Synopsis

Release a subdomain you have reserved.  
`userland release <subdomain> [flags]`  

### Options

`  -h, --help   help for release`

<a name="tunnels"></a>

# Tunnels 

<a name="http"></a>

## HTTP

Expose a local web server on the port you specify

### Synopsis

Expose a local web server on the port you specify.  
Example: `userland http 8080` will expose a local web server running on port 8080.  
You can provide an optional 2nd argument to specify the name of a reserved subdomain you want to associate this with.  
Example: `userland http 8080 mydomain` will expose a local web server running on port 8080 via "http://mydomain.userland.tech".  
Otherwise it will default to using a new unreserved subdomain.  
`userland http <port> [subdomain] [flags]`  

### Options

`  -h, --help   help for http`

<a name="https"></a>

## HTTPS

Expose a local https web server on the port you specify

### Synopsis

Expose a local https server on the port you specify.  
Example: `userland https 8443` will expose a local https web server running on port 8443.  
You can provide an optional 2nd argument to specify the name of a reserved subdomain you want to associate this with.  
Example: `userland https 8443 mydomain` will expose a local https web server running on port 8443 via "https://mydomain.userland.tech".  
Otherwise it will default to using a new unreserved subdomain.  
`userland https <port> [subdomain] [flags]`  

### Options

`  -h, --help   help for https`

<a name="it"></a>

## It

Expose a local web server on the ports you specify

### Synopsis

Expose a local web server on the ports you specify.  
Example: `userland it http:8080 https:8443` will expose a local web server running on port 8080 and an https web server running on port 8443.  
You can provide an optional argument to specify the name of a reserved subdomain you want to associate this with.  
Example: `userland it http:8080 https:8443 mydomain` will expose a local web server running on port 8080 via "http://mydomain.userland.tech" and an https web server running on port 8443 via "https://mydomain.userland.tech".  
Otherwise it will default to using a new unreserved subdomain.  
`userland it <type:port>... [subdomain] [flags]`  

### Options

`  -h, --help   help for it`

<a name="update"></a>

## Update

Update CLI version

### Synopsis

Update CLI to latest release on github.  
`userland update [flags]`  

### Options

`  -h, --help   help for update`

<a name="cleanup"></a>

## Cleanup

Cleanup a subdomain that is incorrectly marked as "In Use"

### Synopsis

Cleanup a subdomain that is incorrectly marked as "In Use".  
This closes the tunnel from our end and updates the subdomain database.  
`userland cleanup <subdomain> [flags]`  

### Options

`  -h, --help   help for cleanup`

