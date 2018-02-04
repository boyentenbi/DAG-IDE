# DAG-IDE
My attempt at writing an IDE for Clojure that turns your code into a DAG in real time.

I wanted to make programming and debugging more intuitive. 

Code written in functional languages can be converted to a DAG, where every function is a node and every object is an arrow.

This lends itself to a very intuitive navigation and debugging methods: 
* You can click on a node to open up its definition
* You can view the value of intermediate objects in a function next to each arrow.

However,Didn't quite work because the graphs were too complicated.

Still:

![Alt Text](https://media.giphy.com/media/l3diTjMJ5J9s9wb04/giphy.gif)

Full video (2 more on my channel): https://www.youtube.com/watch?v=zEQDPJNM0-Q

# How it works

Most of the code performs a single transformation between two trees:
* The tree that a legal LISP expression represents 
* The tree HTML code that represents the graph on the right hand side.

Recognising this bijection makes it quite easy to understand what is going on.

The IDE was not only for Clojure code, it was written in Clojure. This made me more familiar with the language I was building the app for. I used Clojurescript for the front-end.

Clojure has many special forms however, such as 'let', which make constructing the HTML code from the Clojure expression more difficult. I spent a lot of time dealing with these special forms. I didn't even get to work on things like pattern-matching.

# I learned

* How to write code without mutation

* How to write front-ends which rely on the functional reactive paradigm

* How to write code in a LISP

* Not to work on my own!

(as a former mathmo there's something pleasing about LISPs)

