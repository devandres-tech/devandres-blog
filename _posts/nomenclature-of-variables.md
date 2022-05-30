---
title: "On the Nomenclature of Variables"
date: '2022-05-29'
description: 'Tips to effectively give descriptive variable names'
---

Being able to effectively give a descriptive name to a variable is probably one of the hardest decisions you will make as a programmer (besides choosing tabs vs spaces). You just can't name variables as you would with your offsprings (because it's cute or it holds a special meaning in your life). Unlike your offsprings and its name, which represent different entities, a variable and its name are essentially the same thing. We should take extra consideration when naming our variables. Here is an example with bad variable naming convention:

```js
let x = q * p
let t = x + slsTx(x) - d
let c = getCB(id) - t 
saveCB(id, c)
```

What in the world is going on? what do `x`, `q`, `p` mean? what does `slsTx` or `getCB` does? What if you wanted to print the total bill amount to a customer for a given purchase, which variable would you use? So many questions left unanswered.

Here is the same code but with good variable naming conventions:

```js
let totalAmount = quantity * price
let totalBill = totalAmount + salesTax(totalAmount) - discount
let currentBalance = getCurrentBalance(customerId) - totalBill 
saveCurrentBalance(customerId, currentBalance)
```

See how easy it is to decipher what is actually happening and what each variable/function does. It's memorable and descriptive, it almost reads like a story (from to bottom).
