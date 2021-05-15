---
title: "Building Scalable ML Products"
layout: post
toc: false
comments: true
categories: [ml, saas, product]
---

SaaS businesses scale very well with typical gross margins ranging from 60-80%. This is because most software can be built once and distributed with relatively little to no customization. The same cannot be said for AI software. AI has and will continue to have a huge impact on businesses, but gross margins for AI companies are lower and hover around 50-60%.<sup>1</sup>

The key to improving these margins is reframing what it means to build an AI/ML product. Rather than deliver Machine Learning predictions directly to a customer, give customers tools to build ML-enabled workflows that's specific to their own businesses and datasets.

Why does this approach to AI product development increase margins? When ML companies directly sell access to models, they must continuously build and update training datasets to include a broad range of input patterns that customers encounter. Updating models to keep up with new edge cases while expending minimal engineering effort is very difficult. Andrej Karpathy, Director of AI at Tesla, calls such an ideal state Operation Vacation.<sup>2</sup>  Many ML companies don't have large datasets or infrastructure like Tesla and need to resort to services and implement one-off AI solutions for each customer.

Products that allow domain experts to build their own custom models can help address such issues. These tools handle the engineering complexities of training and deploying ML models and users can focus on the data that flows through the system. After all, customers are experts in their own datasets and deep understanding of data is the most important factor in training and maintaining useful ML systems.

One company that has embraced this product approach is Kira Systems. Kira's software automatically extracts 1000 different types of clauses and provisions from contracts. This frees up a law firm's time to make smarter decisions for its clients. But what's interesting about the software is it lets lawyers define their own category of clauses and train Kira's model to identify them all through a UI - no knowledge of ML needed. Lawyers can review extracted clauses from contracts and easily make corrections which serves as additional training data to improve their customized model.<sup>3</sup> Without this ability to train custom models, client-specific implementations would be necessary and if requirements change then services are required to implement those changes.

Kira Systems can operate like a product company because they've simplified and streamlined model customization. Advances in ML techniques such as transfer learning and self-supervised learning will make it easier to adopt this product approach.

The takeaway is ML should be just one piece of the overall product. Build ML-enabled products, not ML products. Build software around specific use cases and make it easy for customers to adapt it to their unique needs. Doing this will lead to more scalable ML companies.

References

1. [https://a16z.com/2020/02/16/the-new-business-of-ai-and-how-its-different-from-traditional-software/](https://a16z.com/2020/02/16/the-new-business-of-ai-and-how-its-different-from-traditional-software/)
2. [https://www.braincreators.com/brainpower/insights/teslas-data-engine-and-what-we-should-all-learn-from-it](https://www.braincreators.com/brainpower/insights/teslas-data-engine-and-what-we-should-all-learn-from-it)
3. [https://kirasystems.com/blog/the-role-of-domain-experts/](https://kirasystems.com/blog/the-role-of-domain-experts/)