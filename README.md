# Github Finder App

<p align="left">
  <a href="/"><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /></a>
  <a href="/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /></a>
  <a href="/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /></a>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a app built with React that allows users to search for Github users and returns a dashboard that includes the following user statistics

- hireable status
- bio
- location
- blog link
- twitter
- no. of followers
- no. following
- no. of public repositories
- latest repositories sorted by when it was last committed and limited to the top 20

[Try it out here](https://github-profiles-finder.vercel.app/)

## Run locally

### clone the repo

```bash
  git clone https://github.com/benthecoder/Github-profiles.git
```

```bash
  cd Github-profiles
```

Add your Github token to the `.env` file, replace ADD_YOUR_TOKEN with your token and place it in a string

### Install the dependencies

```bash
  npm install
```

### Run

```bash
  npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Acknowledgement

- This project was part of the React from to back 2022 course by Brad Traversy, check it out [here](https://www.udemy.com/course/react-front-to-back-2022/)
