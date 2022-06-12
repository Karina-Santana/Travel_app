# Project 3
The third project of our software engineering course was to create a SPA in a small team. Myself along with <a href= "https://github.com/Karina-Santana">Karina Santana</a> and <a href= "https://github.com/JimmyMein">James Mein</a> worked together to create this app. Click on their names to visit their githubs!

Have A Nice Trip is the solution to this project. Have a Nice Trip is a platform where users can add a trip and also add their indivual plans (itineraries) for that trip. They will be able to store the dates they are going on these trips and more information on their itinerary such as activities and important notes.

<a href= "https://gentle-castle-11768.herokuapp.com/">Organising your latest trip begins here!</a>

## Wireframes
Our app has 3 main 'pages' which are Home, Trip List and Itinerary List. The Trip List page will render all trips the user has created. When a user clicks into the name of one of their trips, the Itineraries List will load which stores all of the individual itineries that user has created for that trip.
<a href= "https://wireframe.cc/pro/pp/1bb9130c1555052">Check out our wireframes here</a>

## Databases
This project used one database called travel_app that contained 3 main tables. The User table stores the users that sign up, the trips table stores the trips that are created and the itineraries table by a user stores the itineraries that are created by a user.
<a href= "https://cloud.xara.com/?doc=yT5A6L0nkp">Check out a database example here</a>

## Tech Stack
HTML
CSS 
Node Express
REST API
PostgresSQL

## General Approach Taken
Our team started our first day by planning what features we'd like our minimum product to be and what features would be nice to have. We aimed to get the bare minimum of the project requirements and to set up the structure of our MVC by the second morning of the receiving the project. This included setting up the databases for users and trips using SQL and then using Node.js and Express to set an API using both front-end and back-end architecture. This allowed us to have a starting point for where we wanted to add additional features. 

We then set up a database for the itineraries and allowed a travel_id to be stored in that table so that the individual itinerary is to be stored for that specific trip in the backend and only render those itineraries for that trip on the front-end. Additional features were included to log in functionality as well to display error messages when a user's password is incorrect.

We all decided to leave CSS until the last day given that all the above features would affect the styling of the 'pages' when added. The trips are displayed in a grid while the itineraries are displayed in a xx. All front-end features that have an onClick function such as the Show Trips and Logout have a hover over icon so that the user knows something will happen when they click on these features.

## Check out our user stories here
<a href= "https://trello.com/b/6Pkvy08Z/project-management">User Stories via Trello</a>


## Major hurdles and unsolved issues
Our team wanted to interact with a weather API so that the weather for the ending city is pulled through when a user creates an itinerary. Our teacher informed us that this would be too difficult to achieve in the timeframe that we were given for this project. 

Using github for the first time in a group was a major challenge. Learning how to resolve conflicts in our code was very time consuming. 

