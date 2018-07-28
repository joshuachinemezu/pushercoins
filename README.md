This project was bootstrapped with Create React App.

A cryptocurrency ticker bootstrapped with create_react-app with nodejs and pusher for data persisting.

The nodejs is hosted on https://now.sh and it serves as a RESTFUL API for the app. Pusher is used for persisting the data across multiple devices


URL: https://joshuachinemezu.github.io/pushercoins/

Brief info: localStorage is used for storing data gotten from https://min-api.cryptocompare.com so if the user is offline, the resources will be loaded from the localStorage, serviceworker (SW) is used for caching resources for offline usage.

Credits: https://min-api.cryptocompare.com, https://pusher.com, https://zeit.co, https://github.com/facebook/create-react-app, https://nodejs.org/en/, https://www.getpostman.com/, https://code.visualstudio.com/
