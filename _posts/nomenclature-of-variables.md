---
title: "On the Nomenclature of Variables"
date: '2022-05-29'
description: 'Tips to effectively give descriptive variable names'
---

Being able to effectively give a descriptive name to a variable is probably one of the hardest decisions you will make as a programmer (besides choosing tabs vs spaces). You just can't name variables as you would with your offsprings (because it sounds good or it holds a special meaning in your life). Unlike your offsprings and its name, which represent different entities, a variable and its name are essentially the same thing. We should take extra consideration when naming our variables. Here is an example with bad variable naming convention:

```js
let x = q * p
let t = x + slsTx(x) - d
let c = getCB(id) - t 
saveCB(id, c)
```

What in the world is going on? what do `x`, `q`, `p` mean? what does `slsTx` or `getCB` do? What if you wanted to print the total bill amount to a customer for a given purchase, which variable would you use? So many questions left unanswered.

Here is the same code but with good variable naming conventions:

```js
let totalAmount = quantity * price
let totalBill = totalAmount + salesTax(totalAmount) - discount
let currentBalance = getCurrentBalance(customerId) - totalBill 
saveCurrentBalance(customerId, currentBalance)
```

See how easy it is to decipher what is actually happening, we can clearly see what each variable represents and what each function does. It's memorable and descriptive.

## Considerations in Choosing Variable Names

### Most Important Consideration

To effectively name a variable we must accurately describe what entity it represents. One way to do this is to state in words what the variable represents, this usually is the best option. For example, say we want to name a variable that represents the total number of people in a football stadium, we can name it `stadiumCapacity`. A variable that represents the score of the away team would be `awayTeamScore`. A variable that holds the total number of teams a league has is better named `numberOfTeamsInLeague` rather than say, `y` or `x`.

Notice there is no need to decipher what they mean, we simply read them to understand what they represent. Of course there are some exceptions such as having long variables names. We will also talk about the optimal variable length. Let's take a look at this table which shows examples of good and bad variable names:

| Purpose of Variable | Good Descriptors | Bad Descriptors |
| --------------- | --------------- | --------------- |
| Current date | `currentDate`, `todaysDate` | `cd`, `current`, `d`, `dt`, `x1`, `x2` |
| Velocity of a cheetah | `cheetahVelocity`, `cheetahVelocityInMph` | `tv`, `vlc` `v1` `cheetah` |
| Molecules per drop of water | `moleculesPerWaterDroplet`| `m`, `p1`, `mpwd`, `molecules`, `y` |
| Running total of goals scored | `totalGoalsScored`, `goalsScored` | `total`, `x1`, `y2`, `goals`, `currGS`|

The names `totalGoalsScored` and `goalsScored` are good names because they accurately and descriptively capture the idea of "the running total of goals scored", in fact they use precisely these words. Usually, ordinary words are your best options. `x1`, and `y2` are bad because they are too short and don't represent anything. `total` is bad because it does not tell you what the total is. `goals` is also bad because by itself it could mean something different - like goals as in a personal accomplishment in life. We can derive from this that good descriptors are usually specific as possible, names like `x`, `i`, and `average` are general, they are used for more than one purpose. 

### Optimum Name Length

Studies have shown that the effort required to debug a program is minimized when a variable has an average of 10 to 16 characters long. Names that are too short, `x1`, `x2`, don't convey any meaning. Names that are too long are prone to syntax errors and can muddle the visual structure of a program. Of course not every variable will have 10 to 16 characters, it just means that if your variables are too short you should try to be more descriptive and if your variables are too long, you should try to trim it (for example by using commonly used abbreviations).

Let's us take a look at the following table to illustrate the point:

