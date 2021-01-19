<img src="banner.png" />

# Auth0 Embedded Login - REACTJS App

A React App implementing the Embbeded Login Flow (Username + Password).

## :rocket: Live Version - Deployed on [NETLIFY](https://ecstatic-newton-084395.netlify.app/)

## :sparkles: Features

1. Authentication and Authorization on Auth0 Server.
2. Completely **bypasses the Universal Login Flow**.
3. User Profile Page - Displays username, name, picture and email.
4. A dummy home page.
5. The basic Login and Logout functionality with route protection.

## :footprints: Steps for Running the App Locally.

1. Clone the repo.
2. Install dependences directory. `npm install`.
3. Create a file in `.env` and add the following code.

```.env
REACT_APP_CLIENT_ID = CLIENT_ID_FROM_AUTH0
REACT_APP_DOMAIN = DOMAIN_ID_FROM_AUTH0
REACT_APP_CONNECTION = DATABASE_NAME

```

4. Install dotenv as a dev-dependency. `npm i --save-dev dotenv`.
5. Start the App from the root directory by `npm run start`.
6. Go to `http://localhost:3000`.

## Thanks! :star:
