

# ChitChat

A Real time chat app built with React, Material UI and Firebase.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Features

1. Self Hosted using Firebase (Free plan)
2. Login with Email 
3. Login with Google
4. SignUp with google
5. Unlimited chatting with your friends
6. Domain Customizable to anything you wish
7. Modern, Material UI (we all love this!)
8. **Actively under development**

## Requirements

You'll need to make the following set up:

1. A Firebase project with Hosting (Free plan will work)

2. Add a Custom domain to your Firebase Hosting (you know, the shorter, the better)

3. Enable Email/Password authentication in your Firebase Authentication settings and set up your users.

4. Enable ChitChat in the Firebase project.
 
## How to Use

1. Clone the repo:

```
git clone https://github.com/Vishal-Nai/chitchat.git
```

2. Change working directory to project:

```
cd chitchat
```

3. Edit `src/firebase/firebase.js` and put your Firebase Project Config here:

```
const firebaseConfig = {
  //Your config values
};
```

4. Edit `firebase.json` and change `hosting.site` key:
```
...
"hosting": {
    "site":"yoursitename", <-- This is your firebase hosting site name
    "public": "build",
    ...
```

5. Local test run

```
npm start
```

6. Production build

```
npm run-script build
```

7. Deploy to Firebase

```
firebase --project **your_project_id** deploy
```

8. [Optional] Connect a Custom domain

Follow the [Firebase documentation article to setup a custom domain](https://firebase.google.com/docs/hosting/custom-domain) for your chitchat. 


## Usage

Are you using ChitChat ? Let me know! Feel free to put a PR with your details.!
