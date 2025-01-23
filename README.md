# Clarus WMS - Technical Test

This is a example project using Ember v5.8
Below are some instructions on how to set up this repository.

## Instructions

### 1. Clone the repo

Make sure to fork the repo before working on it. This will allow us to assess all your changes.

### 2. Install dependencies

We use `pnpm` to manage and install our dependencies, so you may need to [install it](https://pnpm.io/installation) if you haven't done it before.

### 3. Run the app locally

Ember provides you with a set of commands you can use to run the app locally.

#### Common Commands

`ember s` - Starts the project and go to [localhost:4200](http://localhost:4200/) to view the project.

You should be able to see a message like the following:

```
Build successful (247ms) – Serving on http://localhost:4200/
Slowest Nodes (totalTime >= 5%)
```

`ember t --s` - Runs the tests in a [browser](http://localhost:7357/)

### 4. Set up Firebase

1. Create a firebase account.
2. Create a project and then:

- Click on database tab
- Click create firestore database (it's the only one free)
- Click start in _test mode_

3. Go to overview page
4. Click 'Add firebase to your web app'
5. Add your Firebase configuration to config/environment.js:

Get these values from the Firebase Console by clicking the [Add Firebase to your web app] button on the project overview page.

```javascript
ENV.firebase = {
  apiKey: "xyz",
  authDomain: "YOUR-FIREBASE-APP.firebaseapp.com",
  databaseURL: "https://YOUR-FIREBASE-APP.firebaseio.com",
  projectId: "YOUR-FIREBASE-APP",
  storageBucket: "YOUR-FIREBASE-APP.appspot.com",
  messagingSenderId: "00000000000",
};
```

And then you will have your own firebase setup.

> If you have any problem setting up this repo, please, send us an email as soon as possible, so we can solve it!

---

## Useful Links

1. [Ember 5.8 Docs](https://guides.emberjs.com/v5.8.0/)
2. [Firebase](https://firebase.google.com/docs)

---

Copyright (c) 2025 - [Clarus WMS](https://claruswms.co.uk/)
