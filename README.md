nowww
=====

A simple Node.js server that responds to `www.` requests with a redirect to the same URL without the pointless `www.` subdomain.

## Using with [Now][now]

I wrote this to be used with the wonderful [now.sh][now] service. You can deploy it to Now using the deploy button, then alias your app's `www.` subdomain to the deployment.

<center>
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/ericf/nowww)
</center>

```
$ now alias nowww-ownv3nc9f8.now.sh www.example.com
```

Now any requests that come into `https://www.example.com` will redirect (301) to `https://example.com`. The URL path and query string will be included, but the fragment (`#foo`) won't because browsers don't pass it to servers.

### Options

You can set the following environment variables:

- `PORT`: 5000
- `STATUS`: 301

Here's an example of setting the status code to `302` when deploying to Now:

```
$ now -e STATUS=302
```

### Deploying via Git Clone and Now CLI

You can also clone this repo locally, and deploy it via the `now` CLI tool:

```
$ git clone https://github.com/ericf/nowww.git
$ cd nowww
$ now
$ now alias nowww-ownv3nc9f8.now.sh www.example.com
```

[now]: https://zeit.co/now
