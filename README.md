# 19-adding-event-listeners
 Handling DOM Events  Adding Event Listeners
Up to this point all the listeners you've created to listen for JavaScript events have been created via HTML attributes such as onclick, onchange and so on. These event listeners work just fine, but they can make your code messy and verbose when you've got a lot of them. Fortunately as with most things in code, when things become too verbose it's indicative that there's a better way. This time, the better way is through the use of event listeners.

An event listener sets up a function that will be called whenever the specified event, such as an input change, a click, a mouse movement, a keypress or other such event is delivered to the target. The target in this context is anything that supports events, but commonly will be something like an HTML element, the document or the window. Event listeners allow you to remove those verbose HTML attributes and instead put all the functionality in JavaScript. This is good for separation of concerns too, since even though JavaScript and HTML go hand in hand, their code should still be as segregated as possible to limit complexity and increase maintainability.

To add an event listener to an object you need three things:

The object to add the event listener to, like an element, the document or the window
The addEventListener() method, which takes two parameters described below
The listener, which is a function to run when the event is received and which takes the event itself as a parameter
As a simple example, if you have a button you want to use to run some JavaScript code when it's clicked, the button is the object and you can pass addEventListener() the click event and the function to run when triggered. This might sound complex, but it's actually quite simple. Here is the generic syntax for adding an event listener:

target.addEventListener(type, listener [, options]);
The options are parameters you can specify to make your listener behave differently, but they're not required to create it. You can pass options such as whether to only invoke the listener on the first event it receives and then destroy it, whether it will prevent the default action of the original object and so on. Don't worry about that stuff for now though; what you need to know right now is just how to add a simple listener for an event, and everything else you can pick up as you need to create more complex listeners. The following compares the way you've seen things done thus far with the way they should be done as a best practice:

Without an event listener, using HTML attributes:
<button id="my-button" onclick="console.log('You clicked the button!')">Click me!</button>
Using an event listener:
HTML:

<button id="my-button">Click me!</button>
JavaScript:

function myFunction (event) {
  console.log('You clicked the button!');
  console.log(this.id);  // my-button
}

let myButton = document.getElementById('my-button');
myButton.addEventListener('click', myFunction);
There are a few important things to note here:

The listener itself, myFunction() in this case, takes the event as a parameter. That means that if you need to get any information about the event, such as its type, name, properties or anything else, you can get it using dot notation, like you saw in the keyboard events unit to get event.key, which represented the key that was pressed.
When passing the listener to the addEventListener() method, it is passed without parentheses. This is vitally important because if you pass the function with parentheses it will be called immediately instead of when the event is received! Remember that you are passing the function itself as the thing to do when the event happens, not calling the function right then and there.
Inside the listener (myFunction(), which is sometimes called a callback function, by the way), the value of this is the object that triggered the event. In most cases that you use this functionality, that will mean that this refers to the element, so you can get things like this.id, this.classList or any other element property.
You can have as many event listeners as you want, and every element can have multiple listeners listening to different kinds of events, but you should never have two listeners for the same event on the same element executing different callback functions. This will cause one of them to be discarded and will result in unpredictable behavior. The runnable example below demonstrates how to add and use a few different types of event listeners. Take note of the value of this during each event. Remember that it's your key to being able to access the actual element that triggered the event!

Throughout this module you've seen functions used for a few different things. One of the most common ways developers use functions is for handling JavaScript events, because they allow you to keep your code concise, reusable and easy to maintain. In the last unit, you saw how it's possible (and preferred) to write JavaScript functions that act as event listeners so that you can keep your JavaScript and HTML segregated and clean. With this in mind, in this unit we'll dive a little deeper into what else is available when working with these functions.

When working with event handlers, a few of the things you might want to ask yourself are:

Which event was or will be fired, and what caused/will cause it to be fired?
What do I want to happen in response to this event?
Which element or elements is the response going to affect, or if it won't change any elements, what will it do for the user?
What information do I need to be able to handle the event correctly?
Where can I get the information needed (from the event itself, from the element/window/document, or somewhere else)?
To demonstrate, there are two major concepts you should understand about working with functions and event handlers in JavaScript:

Concept 1: The event is accessible in the function:
You saw in the keyboard events unit that it was possible not only to determine that the user pressed a key on the keyboard, but also whether they were holding it down, when they released it, which key they pressed, and a host of other things. All of this information came from the event object that was passed to the event handler (i.e. the function that was executed). The KeyboardEvent object has specific properties related to keyboard events and the same is true for the other types of events. You can use the event object in the function that handles the event to get more information about exactly what happened and respond accordingly.

Concept 2: The element is accessible in the function:
You also saw in the last unit that when you create an event listener using the addEventListener() method, inside of the event handler this refers to the object that you attached the listener to. This is very useful to know because it means that in the callback function that actually handles the event, you can access the event type and all its properties and methods as well as the element that triggered it, which gives you access to everything about that element: its type, height, width, behaviors, id, classes, location in the DOM and so on.

Understanding these two concepts is the key to understanding how to manipulate the DOM in response to JavaScript events.
