---
sidebar_position: 2
---

# Disburser

## Introduction

Introducing DegenX's revolutionary vesting model: Disburser. This game-changing feature is designed to provide unparalleled flexibility and rewards based on time and holding. Say goodbye to conventional vesting methods and embrace a system that caters to your needs and ambitions. With our Disburser, you can unlock a world of possibilities and maximize your potential for exponential growth. Join the DegenX community and experience the future of vesting like never before.

## Working Example

### Use case

Coming from an existing project (DEGEN SmartDeFi or DEGEN SD), we already held a decent amount of owners in out project. During the DGNX conception where we thought about 'how can we not just leave our old project owners behind'. We thought about airdropping them. We thought about halving the amounts since we have now access to the amount which was on the dead address before and it will nearly double the circulating supply. There was a point where we actually thought about dropping old holders and starting the project from scratch.

This is where we came up with the idea of the Legacy Disburser.

A DEGEN SD holder is in possession of 100,000 DEGEN SD. It is possible for him to regain the complete amount in DGNX. For him to do so, he starts with an initial claim of 10% of the full amount. In this case it would be possible for him to gain 10,000 DGNX. After his claim, he is able to claim 5% of the DGNX holdings in his wallet every 30 days. If he stays with the 10,000 DGNX, he will be able to claim 500 DGNX in the next period. He has now 10,500 DGNX and can claim 525 DGNX in the next period. This can be done exactly 24 times. So it's possible for him to reclaim all his tokens in 720 days unless he starts his initial claim 90 days after we have announced and started the official claiming process for the Legacy Disburser.

### Vesting examples

This vesting example is based on <u>**100,000 tokens**</u>, a <u>**10% first time**</u> payout of the vesting amount and a <u>**24 months claiming period**</u>.

Without buying anymore tokens:

$$
y = x(0.1)({1.05}^{24})\\
y = 100000(0.1)({1.05}^{24})\\
y = 32250.99943
$$

Same example with buying 2,000 tokens each period:

$$
y = x(0.1)({1.05}^{24}) + z(\frac{ {1.05}^{24} - 1 }{ 1.05 - 1 })\\
y = 100000(0.1)({1.05}^{24}) + 2000(\frac{ {1.05}^{24} - 1 }{ 1.05 - 1 })\\
y = 121254.99718
$$

### Calculation table

[![Disburser Calculation Table](./img/disburser-calculation-table.webp)](./img/disburser-calculation-table.webp)

## Additional Links
