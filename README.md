# Kingdom Hearts 3 News website

## Overview

### What is this app for?

This is an app for keeping up to date on the news regarding the current development of the third main instalment of the Kingdom Hearts series.

## Features

### Included features
- Nothing currently.

### Features to Implement
- Create each view
	- Home
	- Trailers
	- Characters
	- Blog
	- Newsletter
- Angular
	- Routing for views
	- Newsletter form
		- Interact with blog post times

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