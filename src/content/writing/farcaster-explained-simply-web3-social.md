---
title: "Farcaster explained simply (Web3 Social)"
description: "A simple explanation of Farcaster as a web3 social protocol—and why you should start with Warpcast."
publishedAt: 2024-04-20
tags:
  - web3
  - decentralization
  - social-media
featured: true
draft: false
---

Farcaster is not where you should start to try Farcaster or web3 social. Start with [Warpcast](https://warpcast.com/~/download). Here’s why.

![Image of a farcaster from the Hyperion book series](https://miro.medium.com/v2/resize:fit:1100/1*pdHzz5DuFn5HDhCIc063BA.png)

Farcaster is a set of rules a social media app can choose to follow. If an app follows the rules, they can interact with other apps that follow the rules as well as blockchains. Farcaster is a protocol, but it is like what [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) is to websites or [SMTP](https://postmarkapp.com/guides/everything-you-need-to-know-about-smtp#what-is-smtp) is to email. If you want to try out apps using the farcaster rules the best way is to use the [Warpcast app](https://warpcast.com/~/download). It has a twitter/X feel to it.

Warpcast has a hierarchical structure of technology that it is built upon.

![Diagram of Warpcast’s application, back-end, data, and blockchain layers](https://miro.medium.com/v2/resize:fit:1100/1*cK2ibi1m0MonUFhcGVkfqA.png)

As a social media user you only interact with the application layer. In this case Warpcast. This structure is similar to how a normal social media application like twitter/X is set up.

![Simplified comparison of social app architectures](https://miro.medium.com/v2/resize:fit:1100/1*rg3LM_XYXPEj5N54fAz4jQ.png)

The top level is the application. The application talks to the back-end services. The back-end services handle things like aggregating data, running the home feed algorithm and sending the data to the app running on your phone. The back-end services talk to the data layer. The data layer holds most of your data. Things like:

- your social graph (followers and who you are following)
- your profile information (username, profile pic, etc)
- your posts
- your interactions (likes, comments etc)

What makes the Warpcast application different from other social media apps?

The people who run the Warpcast application don’t (in theory) have control over your data. Since Warpcast uses the Farcaster rules, any new social application that is built which also uses them can access your data. So if you are using Warpcast and they start spamming your feed with Ads you can try a different app, like [supercast](https://www.supercast.xyz/). When you log into supercast all your data is there day 1. Your profile, your followers, posts and likes.

To understand how it works consider Twitter/X. In this case everything is owned and controlled by one company, Twitter/X. This is called a centralized stack. So the control of the technology and data stack looks like:

![Centralized Twitter/X stack controlled by one company](https://miro.medium.com/v2/resize:fit:1100/1*aHuSgWd7_LOK3BBV8eAJSw.png)

Where everything in the “centralized” box is controlled by the Twitter/X company. Contrast that to what the Warpcast stack looks like:

![Warpcast stack with decentralized data and blockchain layers](https://miro.medium.com/v2/resize:fit:1100/1*baGVlSqulLRbqtVh92Fp4Q.png)

In this case only the application and back-end services are controlled by the company that built Warpcast. The data and blockchain layers are decentralized, such that no one company can control it.

So the complete picture in a mature ecosystem would look like:

![Mature Farcaster ecosystem with multiple apps sharing a decentralized data layer](https://miro.medium.com/v2/resize:fit:1100/1*Z2wYAqS_LwEujkbAb_dA7A.png)

We can see how the data is shared among applications. No one application controls a user’s data. Each application publishes data to, and reads data from the data layer. The data layer is run by independent people or companies outside of the control of any individual company.

That’s the high level of what Farcaster is. Keep reading if you want to go deeper.

#### What are Hubs?

The hubs data layer are a network of computers running the [hubble software](https://www.thehubble.xyz/). A computer running hubble is called a hub. Each hub gets a full download of the data from the other hubs in the data layer and also reads data from the blockchain layer. It will also store all of the data that doesn’t go on the blockchain. Data like your posts/casts.

![Depiction of a networked group of servers](https://miro.medium.com/v2/resize:fit:1100/1*r3dVgo2c3_Y2Yb3nGfrUwg.png)

Why have hubs? The intent of the hubs system is to keep the data decentralized and available for any new social app to use.

#### What data is stored in hubs vs blockchains?

Hubs stores:

- Posts/casts
- social graph (followers/following)
- interactions (likes, comments)

Blockchain stores:

- User Id
- Account keys and anything needed to prove you own something on Farcaster

These are not exhaustive lists but some of the main responsibilities of each layer.

#### Footnote

*There is some nuance to the current level of decentralization because the Farcaster ecosystem is young, and the Farcaster protocol, hubs and Warpcast are mostly developed by Merkle Manufactory. One company, so that is bad for decentralization. However decentralization is the intent with which the system is built and all indication points to its eventual realization.*

#### Useful Links

- [Warpcast Mobile App](https://www.farcaster.xyz/)
- [Farcaster Docs](https://docs.farcaster.xyz/)
- [Farcaster Blog](https://warpcast.notion.site)
- [Farcaster announcement](https://danromero.org/farcaster/) by one of the founders
- [Farcaster code](https://github.com/farcasterxyz)
- Farcaster [Intro video](https://www.youtube.com/watch?v=nGDIdbdtdjE) on the Bankless Podcast
- [Farcaster Frames feature](https://www.youtube.com/watch?v=67nxKVvXItM) and 10x user explosion on the Bankless Podcast
