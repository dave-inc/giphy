# Codetalk Coding Challenge

1. Install homebrew https://brew.sh/

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install node via homebrew
```
brew install node
```
Run npm -v to make sure that the version is higher than 6

3. Create React App: https://facebook.github.io/create-react-app/docs/getting-started

```
npm init react-app my-app
cd my-app
npm start
```

Now open `src/App.js` with a code editor

---

4. Do a google image search for a fun bear gif and copy the url (make sure it ends in `.gif`) Replace image `src` tag on line 9 with your selected bear gif and check out the webpage in the browser

---

5. Look at `src/App.css` and try to make the image stop spinning

---

6. Save your bear gif url in a variable called `imageUrl`, use that variable in the image `src` tag, and check out the webpage in the browser

---

7. Convert the function component to a class component, including a `render` method
8. Add a `state` property to the component with an `imageUrl` field
9. Update the image src tag to use the component state: `this.state.imageUrl`

---

10. Add an html button to App.js 

```<button>Get More Bear Gifs</button>```

11. Add an onClick callback to the button

```<button onClick={() => window.alert("hello")}>Get More Bear Gifs</button>```

After you see the `hello` message, modify the code to alert the `imageSource`
```<button onClick={() => window.alert(this.state.imageSource)}>Get More Bear Gifs</button>```

12. Move the onClick function to a separate component method called `fetchImage`
```<button onClick={this.fetchImage}>Get More Bear Gifs</button>```



---

13. Modify the `fetchImage` function to fetch an image

[Giphy Developer Docs](https://developers.giphy.com/docs/)
[Javascript’s Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
**GIPHY API KEY**: `aHi5kZ49h4esZTalKqyvkBO2llvuHeJr`

Example:
```
fetch('http://api.giphy.com/v1/gifs/random?api_key=aHi5kZ49h4esZTalKqyvkBO2llvuHeJr&tag=bears')
  .then(function(response) { return response.json(); }) 
  .then(function(myJson) { console.log(myJson); });
```

14.  Look at the data that is returned in the console, you can see there is a lot returned.  We only want to use `response.data.images.original.url`

15. Modify your `fetchImage` function to use `this.setState()`
 - [React State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

 - Pass in the `response.data.images.original.url` into imageSource
 
16. Try it out!

## Extra Challenge:
Add a text input to populate the search string


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
