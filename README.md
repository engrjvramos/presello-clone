# Presello Clone

## Table of contents

- [Presello Clone](#presello-clone)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Summary](#summary)
    - [Links](#links)
    - [Screenshot](#screenshot)
  - [Details](#details)
    - [Project purpose and goal](#project-purpose-and-goal)
    - [Built with](#built-with)
    - [Lesson learned](#lesson-learned)
    - [Future improvements](#future-improvements)
  - [Getting started](#getting-started)
    - [Installing](#installing)
  - [Contributing](#contributing)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### Summary

A real-estate web app built with React, Firebase and TailwindCSS that allows users to sign up and login to create and save their property listings permanently.

### Links

- Original Website: [Presello](https://www.presello.com/)
- Solution URL: [GitHub](https://github.com/engrjvramos/presello-clone)
- Live Site URL: [Vercel](https://presello-clone.vercel.app)

### Screenshot

![](./src/assets/home.png)

## Details

### Project purpose and goal

The main purpose of this project is to take advantage of the capabilities of Firebase and have a functional web app up and running quickly. Secondly, since this is my first big project using React, I want to practice more with the framework itself and dive deeply into its convenient features.

### Built with

- [React](https://reactjs.org/)
- [React-Router-DOM](https://reactrouter.com/en/main)
- [LeafletJS](https://leafletjs.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

### Lesson learned

I could not count how many lessons that I have learned from building this application. However, there are 3 most important lessons that I got out of it.

1. Using Firebase Authentication, Storage, and Database for users and listings. At first, I had no idea on how to implement these features but thankfully firebase provides a guide on their website on what to do and give examples on how to do it.

2. Having a better understanding of Short Circuiting (&&), the Nullish Coalescing Operator (??), and Optional Chaining (.?). These modern operators makes it easier to code conditional functions and makes your code cleaner and more readable instead of using if-statements.
3. Having a better understanding of useState, useEffect and custom hooks.

### Future improvements

- [ ] Add a sort by price, sort by date added and sort by floor area functionality.
- [ ] Add filter by property type functionality.
- [ ] Add framer motion for animations.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Clone the repository and run the development server:

```bash
npm install
npm start
# or
yarn install
yarn start
```

## Contributing

Please feel free to send pull request if you want to contribute!

## Author

- Jose Roberto V. Ramos - [engrjvramos](https://engrjvramos.github.io)

## Acknowledgments

- [Presello](https://www.presello.com/) - Thank you Presello Dev Team for inspiring me to make this clone web app.
