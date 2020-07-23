---
layout: post
comments: true
description: Narrow the search space for data insights
categories: [Machine Learning]
title: Model-Driven Exploratory Data Analysis
---
Exploratory Data Analysis (EDA) is frequently the first step in any ML project. But the term EDA is too open-ended. It's difficult to know what to explore, how much to explore, and what's insightful at the very beginning stages of a project. 

Without guided EDA, Data Scientists can spend too many hours creating data visualizations hoping to stumble onto insight at the expense of working backwards from the problem. Simple baseline models provide the EDA guidance. Inspecting model outputs and performance on groups of input data reveal data quality issues, inspire ideas for predictive model features, and inform practicioners what additional data is worth collecting.

Model-driven EDA recently helped me debug a math equation image classifier for a personal project. A v1 CNN model misclassified Euler's formula as Maxwell's equations twice in the validation set. Those equations look nothing like each other. I suspected the model was confused because those Euler equations examples were color-coded, and the only color-coded example in my training set was Maxwell's equations. I added more color-coded examples for each equation in the training set, retrained the model, and the misclassifications were corrected.

It's likely I would not have anticipated the color-coded issue even if I looked through all images before training a model. Working backwards and model-driven EDA can narrow the search space for insights that improve performance..