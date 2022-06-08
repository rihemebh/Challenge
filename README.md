# Challenge
This is my try for the challenge developed with reactJs.

The idea is to make a very smooth animation to ensure a good user experience while respecting the product owner requirements.


So let's see what we have : 
## How to test it ?

- clone the repo
- open the project 
- ``npm install``
- npm start
- go to `/quotes`


## API consuming : 

API : https://goquotes.docs.apiary.io/#reference/get-randomquote(s)/apiv1randomcount/get-random-quote(s)-filtered-by-given-type
Package : axios

## Animation

The animation is developed from scratch with css and we have 

- Quotes are floating from bottom to top
- when paused the quote will be placed in the middle
- When resumed the quote will continue the animation based on its progress
  


## Use cases 

- The user could click on the button to pause the progress and resume it whenever he wants. 
- he could go to the next or previous quotes.
- He could like a quote and it will be saved in the local storage since I only develop the front and we don't have database here. 
- He could access saved quotes from the topbar (the front for this one is not well developed since I think it is e secondary thing I hope I am not wrong) : the user could click on dropdown menu  to get the list of quotes if he hover on it, the complete quote will be displayed as "Tooltip"


