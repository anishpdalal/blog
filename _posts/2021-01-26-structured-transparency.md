---
layout: post
comments: false
description: Takeaways from Open Mined Course
categories: [privacy, ai]
title: Structured Transparency
published: false
---


* An information flow is a flow of bits from sender to receiver. Either sender or receiver can be an individual, part of a group, or anonymous. The sender, receiver, and the contents of the message itself can be probablistic.

* Privacy with respect to information flows are contextual. Contextual Integrity means that sharing the same information can be a violation of privacy in context but completely fine in another. Violating privacy isn't about the information itself but rather having appropriate information flows that align with social norms.

* Any information can be private because the presence or absence of information can reveal something about you. This is why anonymization doesn't work to achieve goals of privacy and preventing misuse of data. Behaviors and patterns can still be inferred about an individual or even group of indivduals without data that explicitly identifies like a name or address. Unfortunately the power of ML makes this possible to do.

* privacy dilemma is a tradeoff between revealing information for social good at the expense of potential risk for revealing the data

* transparency dilemma is someone needs to make a decision without having access to the information they need to make the decision

* There is pareto trade off between transparency and privacy. With new emerging tech we can push this frontier so it's no longer a zero sum game. No longer have to choose between getting value from data and protecting its contents from misuse

* GDPR -> gives EU citizens right to be forgotten or have a company delete their data and right of access where on request company has to send you all data they have on you.

* Maximum privacy means more anti-competitive dynamics such as vendor lock-in and lack of interoperability. 


Three main problems that form the foundation of privacy and transparency issues:
* the copy problem
* the bundling problem
* the recursive reinforcement problem

The Copy Problem - you use lose control over how someone uses your data once you share a copy. Example of this is digital piracy. Entertainment industry DRM software poses great threat to agency over consumer devices to control distribution of copyrighted works but this is done so artists can get compensation for the value they create.


The Bundling Problem - difficult to share a piece of intended information without also needing to reveal additional information to verify intended information. Examples include surveillance, sharing medical data when high-level patterns would do, getting your id checked at bar, AI governance


The Recursive Enforcement Problem - when enforcing privacy regulations, we end up in a recursive loop. Each authority that supervises other entities must itself be supervised by an authority. This core problem of data governance which is process of managing the availability, usability, and security of the data in enterprise systems. 

How can multiple people have ownership over a data point, that still has to live on a single machine?


You should focus on the goals of structured transparency instead of single tools or technologies because they are always changing and evolving.

The guarantees operate over a flow of information:
1. Input Privacy
2. Output Privacy
3. Input Verification
4. Output Verification
5. Flow governance

Input and Output privacy relate to information that needs to be hidden. Input and output verification refers to information that needs to be revealed in a verified way

Flow governance is concerned with who is allowed to change the flow. Who is able to change the input and output privacy and verification guarantees.


Input Privacy - guarantee that one or more people can participate in a computation in such a way that neither party learns anything about the other party's inputs to the computation. Only protects inputs to an information flow and the intermediate variables within an information flow but not the outputs. This addresses the copy problem because you can't copy input information you never see!

Tools for Input Privacy

* Public Key Cryptography - public key encrypts a message in a way that only the private key can decrypt. It is a one-way pipe from anyone in the world to you. Simplest form of input privacy.

* Homomorphic Encryption - overcome limitations of public key cryptography where you want to actually do computations instead of just transferring data. Eg. spell check a document or translate a document without knowing the contents.

If you run a computation on homomorphically encrypted data, the results will always be encrypted with the same key as the input data. You can use cloud machines without trusting cloud providers not to look at your data

Storing information -> example is a bank storing info via HE so won't know how much you have but you can still deposit and withdraw as usual

* Secure Multi-Party Computation - any algo where multiple people can calculate outputs of a function while keeping their inputs secret from each other.

Example is additive secret sharing -> allows multiple people to share ownership of a number thereby solving the copy problem. Example, alice and bob split number 5 into -1 and 6. They don't know that their share represents 5 though. With SMPC, no one can decrypt the number alone. All shareholders must agree that the number should be decrypyted. This is shared governance over an number that is not enforced by law but by maths under the hood.

Output Privacy

Output privacy is concerned with the bundling problem. It's about ensuring that certain subsets of information do not make it through the information flow and preventing the reverse engineering of the inputs from the outputs. 

Example is photo-processing that removes or blurs sensitive items is a great example of output privacy


Differential Privacy

add random noise to indvidual data points such that the noise cancels out over a large sample size and aggregate statistic can be obtained but it becomes difficult to infer exact value of a data point.

Output privacy is more like a degree of protection. Differential privacy let's use measure the difference between a strong privacy guarantee and a weak one. This difference is measured as epsilon (proxy of amount of information leakage?). It's a formal guarantee about the probability that someone can reconstruct your private data from their statistical results. It's a formal upper bound on the probability that bad things can happen to you if you participate in some statistical study. 

Transform epsilon into beta (e ^ epsilon) which tells you that at most some event is x times more likely to occur by participating in the study.

Epsilon tradeoff

No privacy, high utility, high epsilon
Good privacy, low utility, low epsilon

Privacy budget -> a measure that says all of your aggregate results that you generate from input data must represent less than X * epsilon of information. X is a measure of maximum tolerance for information reconstruction risk

## Input Verification

We need tools that allow verifying a piece of information in a way that it can't be faked and does not require revealing any extra information. We need tools that information from well-hidden information is true.

### Cryptographic Signatures

Cryptographic signatures allow someone to sign a document with a mark that only they can make. It prevents a man in the middle attack when someone gets between you and another party and alters messages you are exchanging. You can use your private key to sign any digital document and someone can know that the document is actually from you if they have your public key.

When google.com signs a website before sending it you, this is what it actually does. It hashes the big page into a single number. When it creates a signature, it's a signature for that number. It's unique for each page.


### Active Security and Zero Knowledge Proofs

Two main tools:
* Zero-Knowledge Proofs
* Encrypted computation (like HE or SMPC)


The key idea is that if a computation is agreed upon, then a signature can be created when information is processed in an information flow. There is cryptographic evidence allowing anyone who participated in the computation that their input was included in the final result. 


There can be infinite amount of key pairs. Those could be used not only by individuals but by groups of people like all doctors in your town. These key pairs allow you to proove you are a member of a group without revealing which member you exactly are.


### Output Verification

This deals with verifying that the outputs from a hidden information flow contain the properties we desire. For example, it allows you to verify that an algorithm that's affecting your life is actually good.

The long-term potential for more fairness, transparency, and accountability is promising. Because algorithms are easier to audit than a person

Construct a private information flow to evaluate an algorithm. Use a different algorithm to evaluate this one. Use input and output privacy techniques to analyze the algorithm. You can measure how accurate, fair, and safe an algorithm is without having access to the algorithm itself.

### Flow Governance

Who has permission to change guarantees of an information flow?

* Unilateral governance - simple public key encryption and homomorphic encryption
* consensus governance - additive secret sharing via SMPC
* threshold schemes - allow for decisions with a democratic majority

Being able to share data in a SMPC state is a solution to recursive enforcement problem. Have information split between multiple people, with everyone having a veto power to prevent misuse alleviates the recursive enforcement problem.

