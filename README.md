# FrontEndWebDevelopment

## index.html
Basic Introduction for the website and what went through my reasoning and choices with a couple of links for future reference. Menu was made in this page first.

## history.html
This page is just used to show the use of grid and flip boxes showcasing the life of different rappers through the use of the flip boxes and sizing.

## css/styles.css
Stylesheet for both history and index and it contains everything I used to implement them from phone section to tablet. It also contains most of the grid and flex commands of my whole website. I also made the flipboxes by having nested classes on the index to give me better control, and I also made the menu.

## js/scripts.js
Just contains the basic menu as more functionality is to be found on the other pages also for both Index and History.

## catalogue.html
A basic search bar which can take in an input and a main section which is used to display the API (try 3-4 times with the word Drake).

## css/catalogue.css
Similar to the normal css but because it uses main in a different way I thought it would be more practical to have it in a different page. The main points are how the main is set to have different columns for different sizes; for example, phones have 1 and computers have 2.

## js/catalogue.js
Here I implemented the API where it takes in the input of an artist name and shows their songs. The API itself works for now with just Drake and Maroon 5 but I thought I should implement it as it shows the different functionalities. The API does take three or four tries to start working but this was the best I could do and the search button must be pressed for it to start.

## games.html
This contains the html with buttons for phones and tablets, canvas to display the different games, and a pixelated image at the bottom that makes a certain noise when pressed.

## css/games.css
In this section I have made the background and I added a gif to make it more game-like. If the game pictures do work it should have a game vibe different from the rest of the modes, and it also contains the designs for the different buttons.

## js/games.js
The Games JavaScript shows how I was able to implement a game into the page by having a canvas. It also shows how I could implement another game if I wanted to but due to time constraints I thought it was not as relevant to implement another game. Although I did not fully develop the game, I made a random noise maker that makes an artist's adlib (frequent noises used throughout a song). It started by implementing the button with the little pixelated character as a footer on the screen. I also made buttons for the game so it would be usable for both phones and tablets, and they go invisible when at a desktop size. I added a score to the game which wasn't available in the previous template. The template used is referenced below.

## References

### General References
- [W3Schools](https://www.w3schools.com/)
- [Geeks for Geeks](https://www.geeksforgeeks.org/)

### Specific References
- [Google Fonts](https://fonts.google.com/selection/embed) - These are the fonts I used for my websites in the Game Modes.
- [Button Sounds in JavaScript](https://dev.to/shantanu_jana/how-to-play-sound-on-button-click-in-javascript-3m48) - This is how I learned how to make the button make different sounds in the game.
- [Snake Game Template](https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4) - This is how I implemented the snake game into my canvases and this is the template I used.
- [API Implementation Video](https://www.youtube.com/watch?v=FM6uiKhm3Z4) - This is the video I followed for the API implementation.
