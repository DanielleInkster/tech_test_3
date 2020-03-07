# Tech test #3 - Week 10

Till tech test
==============

We want to sell tills to a local hipster coffee shop who are finally embracing the 21st century. We need a new till to replace their vintage machines - unfortunately, hipster staff are too cool to learn a new system, so we need you to build something that they will understand.

### Specification
-------------

This is what a sample receipt looks like:

![a receipt](images/receipt.png)


### Requirements - Version 1
---------

Implement a system that contains the business logic to produce receipts similar to this, based on a `json` price list and test orders. A sample `.json` [file](hipstercoffee.json) has been provided with the list of products sold at this particular coffee shop. 

Here are some sample orders you can try - whether you use this information is up to you:

> **Jane**  
> 2 x Cafe Latte  
> 1 x Blueberry Muffin  
> 1 x Choc Mudcake  
>
> **John**  
> 4 x Americano  
> 2 x Tiramisu  
> 5 x Blueberry Muffin  

Your receipt must calculate and show the correct amount of tax (in this shop's case, 8.64%), as well as correct line totals and total amount. Do not worry about calculating discounts or change yet. Consider what output formats may be suitable.

#### Reflection - Version 1
What I've learned

* First time doing class extraction in Javascript. Will need to do further research and seek more coach feedback but seems similar to Ruby. 
* When extracting classes, determine which class the user will interact with most. Work from there. 
* Extract one feature at a time, every time. I got too comfortable and attempted to extract too much at once. Big mistake. It resulted in a lot of wasted time squashing bugs and eventually having to revert to a previous commit and try again. 
* Feature test frequently.

Notes for Ver 2
* Consider adding a TaxCalculator model to remove responsibility for Total model
* Refactor so the work is done through the order model rather than receipt model - it just makes more sense.
* To keep in mind for ver 3 - Currently logging the order to the console as return won't work to iterate through arrays in Javascript. Do more digging on how to get this to return/print somehow for user interface. 


### Requirements - Version 2
---------

- Add functionality to take payment and calculate correct change.  
- Add functionality to handle discounts - in this example, a 5% discount on orders over $50, and a 10% muffin discount.

#### Reflection - Version 1
<img src="images/tests.png" width="400" height="300" />
<br>
What I've learned

* While I can't seem to return all the items in an array in this language using forEach, I found that by formatting my array enteries to include new lines and returning the array as a string, it will achieve (more or less) the same end. I can now return the array to the receipt, rather than printing it to the console. 
* If I initialize all needed models in the main model, I can call them throughout the project which gives good
flexibility. I still need further clarification if this is good practice or not. 

Notes for Ver 3
* Dependency injection: I've done some reading on it but I need further clarification on how dependency injection is properly implemented in Javascript.
* Update tests to cover receipt formatting



### Requirements - Version 3
---------

- Implement a user interface that can actually be used as a till.
- You may use whatever technologies you see fit.

#### Reflection - Version 1
<div class="imgContainer" float="left">
1
<img src="images/basicfront.png" width="400" height="300" />
2
<img src="images/basicfront2.png" width="400" height="300" />
<br>
3
<img src="images/basicfront3.png" width="400" height="300" />
</div>
What I've learned: 

* After speaking with a coach, I learned dependency injection in JavaScript is very much like that in Ruby. I also refactored my 'God class' Order method -  initiating every model in one method is not the way to go!
* There was some refactoring of code to be done to make it work properly with the jQuery frontend. I ended up decoupling the Receipt model so I could pass the order as a parameter to render the information properly. 
* The frontend receipt generator currently meets most expectations for calculations. I have accounted for most edge cases (entering negative numbers, decimals, entering no values, etc) and am satisfied that most of the logic is complete. I still need to sort out the images for the receipt as well as making sure decimal numbers are showing to the nearest hundredth. 

Next steps:
* I've got basic stylings using HTML. I plan to use BootStrap to include CSS styling.

