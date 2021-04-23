## Note Taker HW

The purpose of this assignment was to use Express.js to create a server to store and retrieve data for a front end application. Using Express.js, we were supposed to start a server and listen for requests on a specific or given port. When a user made a request to that port, various actions were set to take place. Some of those actions include being sent to various other pages, storing and retrieving data from a "database" which was a JSON object, and as a bonus we were challenged to remove data from the database.

## Getting Started

I started a fresh repo and then I copied over the starter code that we were given which included basic HTML and client side JavaScript. After consolidating my files I went ahead and created my routes directory for the multiple sets of instructions I was going to have to give to handle the requests to the server. Then I ran my installs and made sure that I had my package.json by running npm init and then installed any other necessary dependencies. After giving each page a respective routes.js file I began outlining basic functionality where the HTML route page had to send the user to various pages based on the request or query, and the notes route page was given instructions for handling get, post, and delete requests using the file system package. 

### Prerequisites

This assignment required the use of the express package, file system, the path package, and the UUID package that was used to give each request an ID. It also required node to interact with the command line in order to run the server. VSCode was used for all code editing and Github as well as Heroku were used for deployability.

### Solving

The solve of this assignment was done by initializing a server in a javascript file by requiring express and multiple other packages. I declared a port and a few encoding options for Express to deal with the data specifically delivering it using the JSON format. I then made sure that the server was listening to requests based on either a static or dynamic port depending on which was used (one was used when I was testing the files through my localhost whereas the other was used for deploying to Heroku). Then I had multiple routes that needed instruction when given requests. The main landing page was set to redirect users to a new HTML page upon click and the back end was responsible for accepting that user input and responding by navigating the user to another HTML page using Path. Then the notes Route was used to handle requests and responses for getting, updating, reading, and deleting JSON data that was stored and manipulated from the user input. Any json data was set to be equal to the notes upon read. Upon a post request all JSON data was written and assigned an ID, then was read, and any new notes were added as JSON data to the old notes which were then included in a response object back to the client side. The delete function was a little bit tricky but the solution was that upon the request from the delete button, it would read all the notes from the JSON file and then using the built in params method from express, the function would filter out the note and send back the new response of JSON data without it as long as the ID of the note we clicked on was equal to its respective note ID. Then I deployed the application on Heroku and made sure I had the ports in the proper order because it gave me some trouble when I tried the first time.

## Technologies Used

* [JavaScript](https://www.javascript.com/)
* [ExpressJS](https://expressjs.com/)
* [NodeJS](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com/)


## Deployed Link


## Screenshot
![screenshot](public\assets\noteTakerHWScreenshot.png);

## Authors

* **Thomas Peeler** 

- [https://github.com/TMPeeler/Team-Profile-GeneratorHW]
## Video of website functionality included in the repository