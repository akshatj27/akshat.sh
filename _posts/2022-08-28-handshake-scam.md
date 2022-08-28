---
title: Handshake domains are a scam
author:
  name: Akshat Jain
date: 2022-08-28 12:00:00 +0530
categories: [Technology]
tags: [domains, dns]
---

## Backstory

I have a weird hobby of frequently checking registrars for *cool* domain names, even though I hardly register any.

Recently I've noticed that multiple registrars like Namecheap and porkbun are pushing "Handshake Domains." I ignored them for a long time, but I decided to dive into what these are and how they work.

## What are Handshake domains?

According to their website (<https://handshake.org>),
> Handshake is a decentralized, permissionless naming protocol where every peer is validating and in charge of managing the root DNS naming zone with the goal of creating an alternative to existing Certificate Authorities and naming systems.

These domains are distributed on a blockchain-like system, and everyone can create their TLDs. The purpose behind these is to move away from centralized entities like ICANN.

## What's wrong?

### Conflicts with other DNSs

Due to the ability to create your own TLD, nothing is stopping you from making a TLD on HNS that already exists outside of HNS. An example of this is when [Unstoppable Domains](https://unstoppabledomains.com/), Another NFT/Blockchain-based domain registrar, [sued a company that was selling ".wallet" HNS domains.](https://domainnamewire.com/2022/07/20/update-unstoppable-domains-sues-over-handshake-wallet-domain/)
This is a significant problem; with multiple businesses selling domains alongside ICANN, which one will take precedence when resolving? This problem is also discussed in [this GitHub issue](https://github.com/handshake-org/hs-names/issues/6)

### It is a PoW Blockchain

> The full node daemon, hsd, is written in Javascript and is a fork of bcoin.

It is 2022—even the second largest cryptocurrency [Ethereum is moving away from Proof of Work](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/). There are multiple downsides to using PoW, the major ones being electricity usage and the 51% attack. Multiple alternatives like Proof of Stake, etc., exist and are proven to work in other blockchains like Solana.

### **You cannot actually use your domain**

Adoption is a major issue. None of the major DNS providers (Google, Cloudflare, etc.) Support the use of HNS domains. This is one of the biggest downsides. You have to go out of your way and set up a custom DNS server or install an application on your system to use the domain.

According to [Namecheap's page](https://www.namecheap.com/support/knowledgebase/article.aspx/10484/2278/namecheap-handshake-tlds/):

> please note that it's not possible to generate SSL certificates for HNS domains, and HTTPS:// protocol is not available for these TLDs. Also, you still will not be able to resolve them via regular browsers.

So you end up paying up to **1500$** for a domain that you *might* be able to use in the future, which is, in my opinion, highly unlikely anytime soon.

![1500$ Domain ".lord"](/assets/img/hnslord.png)
_1500$ for .lord HNS domain, with 400$ renewal fees._

You also can not transfer your HNS domain off of centralized registrars like Namecheap (Though this is not an issue with HNS itself, It defeats the purpose of using HNS)

> No transfer in/out supported as we launch our own TLDs that are not supported by any other registrar at the moment.

### It acts out like a Ponzi scheme

> Sign up for Namebase now to start getting these 10 - 100x returns. And if you don't yet have an account, sign up with this link for a 10% bonus on all HNS you purchase.

Blog posts like [this one from Namebase](https://www.namebase.io/blog/how-to-flip-names-for-100x-returns/) are misleading people about the crazy returns on winning auctions on HNS.
However, in the same blog post:
> 22% of all domains on the marketplace are listed within 8hrs of being won at auction.

>That number more than doubles by the end of the first 48 hours: 49% of names that will be listed on the marketplace are listed within two days of their being won at auction.

>And by the end of the first seven days, 75% of domains are listed.

This shows that hardly any people are bidding on the domains in auctions to use them. They want to sell it as quickly as possible.

The early birds made the best returns, and the people joining due to the FOMO will end up with worthless domains.

## End notes

All in all, I think that registrars are pushing HNS as a quick way to generate profits. Buying HNS domains on a centralized registrar, with no ability to transfer your domain, defeats HNS's purpose. Namecheap knows this and continues to sell HNS domains.

I would love to hear your opinions regarding HNS in the comments down below.

Email me at `hey@akshat.sh` for any further questions/corrections!
