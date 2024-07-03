# Demo: Netlify Durable Cache with Next.js

This is a Next.js site demonstrating the [Netlify Durable
Cache](https://docs.netlify.com/platform/caching/#durable-directive) feature,
released in July 2024.

This is a [Next.js](https://nextjs.org/) v14 project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/serhalp/next.js-netlify-durable-cache-demo&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly
like this one, and sets that repo up immediately for deployment on Netlify)

## Demo

You can visit the two deployments below to see the feature in action.

### With the Durable Cache

[This deployment of the demo site](https://nextjs-netlify-durable-cache-demo.netlify.app/)
has the Durable Cache feature **enabled**.

With the Durable Cache, valid responses cached on the CDN are always returned.

### Without the Durable Cache

[This deployment of the demo site](https://6685d117714ca41686e1a306--nextjs-netlify-durable-cache-demo.netlify.app/)
has the Durable Cache feature **disabled**.

Without the Durable Cache, valid responses cached on the CDN may or may not be used,
depending on which CDN node happens to serve subsequent requests.
