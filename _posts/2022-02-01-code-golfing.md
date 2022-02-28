---
title: Optimal Compounding Rate
date: 2022-02-28 21:00:00 +0530
categories: [Math]
tags: [math]
math: true
---

Before starting with the math, lets define some variables we will use in this post. To make things simpler, we are going to assume everything is annual.

$P$ - Initial principal

$r$ - Rate of interest (Annual)

$n$ - Number of coumpounds (Annually)

$f$ - Redemption fee (Per compounding)

## Change in principal

Instead of trying to make an equation that relates profit to time intervals, we write an equation that shows us the change in the Principal amount. We can see a clear pattern :

Let $X_n$ be the Principal at the end of the year, when compounding $n$ times.

$X_0 = P$

$X_1 = P(1 + \frac{r}{n})-f$

$X_2 = (X_1)(1+\frac{r}{n})-f = P(1+\frac{r}{n})^{2}-f\left[\left(1+\frac{r}{n}\right)+1\right]$

$X_3 = (X_2)(1+\frac{r}{n})-f = P\left(1+\frac{r}{n}\right)^{3}-f\left[\left(1+\frac{r}{n}\right)^{2}+\left(1+\frac{r}{n}\right)+1\right]$

and so on. We can see $X_n$ can be generalized to
$$
X_n=P\left(1+\frac{r}{n}\right)^{n}-f \sum_{i=0}^{n-1}\left(1+\frac{r}{n}\right)^{i}
$$

Which can be further simplified to 

$$
X_n=P\left(1+\frac{r}{n}\right)^{n}-f * \frac{1-\left(1+\frac{r}{n}\right)^{n}}{1-\left(1+\frac{r}{n}\right)}
$$

Now, all that is left is to find the Maximum value of $X_n$. You can visualize this on Desmos:

[Desmos](https://www.desmos.com/calculator/f10fmtmilx)

Pull the Sliders to your desired values. then click on the graph to see the maximum value of $X_n$. Here, $X_n$ is the y axis, and $n$ is the x axis.
