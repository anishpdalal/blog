---
layout: post
comments: false
description: Leverage robots in the cloud so you can focus on what matters
categories: [Serverless, AWS]
title: Serverless Backends Should Be the Default
---

The next time you build a new product or service you should seriously consider serverless offerings from vendors such as AWS. Why? I've shipped two products on time using serverless tech and so far it's been great from a cost and maintenance perspective. According to a post by Datadog, about half the companies that use AWS infrastructure have adopted AWS Lambda.<sup>1</sup> I'm not surprised. These types of services let developers focus on quickly shipping product differentiating code. 

Serverless computing is especially appealing if you're a solo founder or a small startup. It's truly an equalizer. 4-5 years ago you had to sacrifice simplicity of a code base to scale an application to more users. But now scaling requires relatively minimial tuning of your serverless setup. A dev team doesn't have to maintain a Kubernetes cluster or shard a Postgres database to scale if those activities aren't part of its core competency.

As Patrick McKenzie eloquently points out, "Engineers are hired to create business value, not to program things."<sup>2</sup>  If infrastructure isn't core to your product, ask yourself "why shouldn't I go serverless?".

##### Footnotes

1. [Datadog Post](https://www.datadoghq.com/state-of-serverless/)
2. [Don't Call Yourself a Programmer, And Other Career Advice](https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/)
