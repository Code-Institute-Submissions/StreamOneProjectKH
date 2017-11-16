# Kingdom Hearts 3 News website

## Overview

### What is this app for?

This is an app for keeping up to date on the news regarding the current development of the third main instalment of the Kingdom Hearts series.

## Features

### Included features
- Angular
	- Created views for each section
		- Home
			- The entry point to the website
		- Newsletter
			- An Angular form view, used for signing up to the sites newsletter
			- The newsletter also has a check box for asking if you wish to contribute
		- Characters
			- A character view for selecting a character and viewing info about them
			- This takes advantage of custom javascript code, using arrays to store info about the characters
		- Blog
			- The main draw for a user of the website, the blog page has several expandable blog posts related to Kingdom Hearts news
		- Media
			- This page contains a video and an audio clip which can be expanded when the user clicks the corresponding button

## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [BrowserStack](https://www.browserstack.com/)
	- **BrowserStack** was used for automated testing through multiple browsers and systems
	- A series of screenshots can be found in the testing folder showcasing the results on phones, tablets and multiple browsers

## Testing

### Javascript
Manual javascript testing was done throughout this project. The main pieces of javascript used included the AngularJS used for the routing of the views and the form for the newsletter page.

For the characters javascript code, I took a lot of my previous work in games development into this piece, by creating a constructor for my characters.
- Created a constructor called ```character()```
- Each character was then instantiated from the constructor
	- ```var sora = new character()```
	- inside the parentheses are the objects values which are described in the constructor
- From there, in the HTML, depending on which is chosen from the dropdown, calls a different if statement
	- in this statement I change set divs with the object and their values

Initial implementation ran smoothly with the only issue being with using javascript to inject an image into a div. It is also hard when you want an object to hold an image as a value.
Through the use of [W3 Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/) I learnt to create a var as a new Image.
Once creating the image I had to then resize based on the size of the screen. With some manual testing the final process for this is as follows:
- Create functions which take the source, width and height of an image
- Create a variable in this function which creates a var as a new Image to hold the image data
- Whichever image is fed into the function, that id is now that image
- In my if statements, depending on the character I call the line with the specified parameters ```portrait("img/Sora.png", 320, 600);```
	- This line is actually embedded within another if statement which checks the screen size and I alter the width and height of the image accordingly

#### Maintained Issues
Through testing of the website, there are a couple of issues that still persist, but are not a detriment to the overall experience of the website.

- With the characters view, it has been difficult to change the div size with the data that is being injected into the id's depending on the screen size
	- This has led to parts of the page with blank space where there is a slightly larger div than needed, but when making it smaller, messes with the layout of the content

### Browser Testing
As mentioned, **BrowserStack** was used for automated testing. With full functionality being achieved across the most popular and most used browsers and systems.

## Contributing

### Getting it up and running
1. To make contributions, you will need to clone the repository, by running ```git clone https://github.com/Zaniron/StreamOneProjectKH.git``` in the command line
2. This please ensure that you've installed ***npm*** and ***bower***
	1. Install [Node](https://nodejs.org/en/) to get npm
	2. Then run ```npm install -g bower``` or use sudo for Mac/Linux
3. Once **npm** and **bower** are installed, install the dependencies in *package.json* and *bower.json*
```
npm install

bower install
```
4. Once installed, make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. Now on your [localhost](http://127.0.0.1:8080) the server will run
7. Make changes and if it belongs here, make a pull request!