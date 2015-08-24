Iterator Exercise
=================
An example of defining and using an iterator object in JS, given the following requirements:

* A constructor that takes an array.
 
## Methods:
### hasNext()
If the class can iterate the array further, it will return true.
If a call to next() will fail, it will return false.
 
### next()
This moves the iterator one spot and returns the new value.
 
### current()
This will return the current value pointed to by the iterator.
 
### tag()
This function will return a function, this function when invoked will return 
the current value when the tag function was invoked. 
 
### reverse() 
This function will reverse the loaded array. After this function is invoked a 
call to current will return the same value it would have before the call.

Usage:
------
- load the index.html in a browser
- use the buttons to exercise the code
