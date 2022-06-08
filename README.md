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

- API : https://goquotes.docs.apiary.io/#reference/get-randomquote(s)/apiv1randomcount/get-random-quote(s)-filtered-by-given-type
- Package : axios

## Animation

The animation is developed from scratch with css and we have 

- Quotes are floating from bottom to top
- when paused the quote will be placed in the middle
- When resumed the quote will continue the animation based on its progress
  


## Use cases 

- The user could click on the button to pause the progress and resume it whenever he wants. 
- The user could go to the next or previous quotes.
- The user could like a quote and it will be saved in the local storage since I only develop the front and we don't have database here. 
- The user could access saved quotes from the appbar : the user could click on dropdown menu  to get the list of quotes, when he clicked he gets the full page 


## Demo 

https://user-images.githubusercontent.com/33090727/172731523-75e9910a-e4c0-4231-9019-34e5863cc3ef.mp4



