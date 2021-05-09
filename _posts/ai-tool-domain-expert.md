---
title: "Building Scalable AI Software"
layout: post
toc: false
comments: true
hide: true
search_exclude: true
categories: [ml, saas]
---

https://kirasystems.com/blog/the-role-of-domain-experts/

* Custom implementation of AI system per customer is not truly scalable because if requirements change then services are required to implement the changes.
* ML is most powerful when it's used to scale knowledge of domain experts
* Deliver AI software with strong baseline backbone + ability for domain user to label data and train models without a UI
* AI can automate the process of identifying all of the contract terms that include automatic renewal provisions but it can't yet tell a client whether they should or should not try to terminate those contracts.
* Automate the large-scale and volume boring stuff so the domain expert can do the more top-end more fun and skillful stuff

https://basecase.vc/blog/defensible-ml

https://a16z.com/2020/02/16/the-new-business-of-ai-and-how-its-different-from-traditional-software/

https://franklyspeaking.substack.com/p/frankly-speaking-7720-why-aiml-fails



###################### Draft 1 #######################

Imagine if Stripe's payment API worked great for large enterprises but not for startups. Stripe obviously wouldn't be the juggernaut it is today. Sadly, Machine Learning products struggle to operate as true SaaS products like Stripe because the model performance varies by customer.

That happens because customer datasets have different statisitical properties than the dataset used to train the product's model. No company or organization collects and generates datasets identically, even in the same industry. ML software needs to be built around this reality. Continous data collection, model monitoring, and frequent updates are a must for closing performance gaps.

This all sounds great but how is an ML company supposed to operate like a SaaS business if models need to be constantly customized, updated, and babysat? 

Many ML product startups struggle with this question and actually end up becoming a services business that builds customer-specific models. One option is to continuously build up a dataset that covers the broad range of possible data inputs that customers will face and update models quickly in response to a constantly changing world. This is very hard. Andrej Karpathy, Director of AI at Tesla, even has a name for achieving such a dream scenario: Operation Vacation. To pull this off your company has to control the data collection process (ie. Tesla fleet of cars or Google logging search queries), synthetically generate datasets, or convince customers to share their data with you on a continual basis. Even then, your model will still make mistakes on certain subsets of customer data and customers have to wait for a new model version to experience improvements on their own datasets.

The other option is to give customers tools to build and monitor their own ML models. This seems to be the more viable approach for most ML companies. Provide a general set of tools and let customers build models hyper-specific to their business and use cases. After all, customers are experts in their own datasets and data happens to be the most important factor in building high-quality ML models. Overall, the software would have the followning capabilities:

* let the users define training and test datasets
* abstract away model architecture selection and hyperparameter tuning
* Easily allow users to review model predictions
* Allow users to iterate on their datasets and retrain models.

If ML is going to have similar impact on society as the internet, then ML needs to be simplified so domain experts and non-technical professionals can take advantage of this revolution just like how Excel gave the power of data analytics to everyone.


###################### Draft 2 #######################

SaaS businesses scale very well with typical gross margins ranging from 60-80%. This is because most software can be built once and distributed with little to no customization. The same cannot be said for AI software. AI has and will continue to have a huge impact on businesses, but gross margins for AI companies are lower and hover around 50-60%.

The key to improving these margins is reframing what it means to build an AI product. Rather than deliver AI directly to a customer, give customers tools to build AI that's specific to their own business and datasets.

Why does this approach to AI product development increase margins? It decreases model maintenance costs. When AI companies directly sell access to models, they struggle with model maintenance because they need to continuously build a training dataset that includes the broad range of input patterns that customers encounter. Updating models to keep up with new edge cases while expending minimal engineering effort is very difficult. Andrej Karpathy, Director of AI at Tesla, calls such an ideal state Operation Vacation. Most ML companies don't have huge sized datasets or infrastructure like Tesla and many of them resemble services businesses that implement one-off AI solutions for each customer.

Many AI companies would be better off building tools for domain experts in specific industries. These tools handle the engineering complexities of training and deploying ML models and allow users to focus solely on the data that flows through the system. After all, customers are experts in their own datasets and deep understanding of data happens to be the most important factor in training and maintaining useful models.

One company that has embraced this product approach is Kira Systems. Kira's software uses ML to automatically extract 1000 different types of clauses and provisions from contracts. This frees up a law firm's time to make smarter decisions for its clients. But what's interesting about the software is it lets lawyers define their own category of clauses and train Kira's model to identify them all through a UI - no knowledge of ML needed. Lawyers can review extracted clauses from contracts and easily make corrections which serves as additional training data to improve their customized model. Without this ability to train custom models, client-specific implementations would be necessary and if requirements change then services are required to implement those changes.

Kira Systems can actually operate like a product company because they've simplified and streamlined model customization.

The lesson here is AI should be just one piece of the overall product. Build AI-enabled products, not AI products. Build software around specific use cases and make it easy for customers to adapt AI to their unique needs. Doing this will lead to more scalable AI software.


####################### Draft 3 #########################




















