# React Resume

This project is a template for creating a simple resume website using React JS. **This is a work in progress. Not 
all browsers (eg. mobile) will currently render the resume site perfectly.**

## Customization

The current app is customized for my resume (the creator), however I have attempted to make it as customizable as 
possible without actually having to dive into the Javascript code.
#### Colors
To customize the colors, simply change the following presets in `src/styles/index.css`:
```css
:root {
    --background: #88BDBC;
    --background-start: #B2DADA;
    --text-primary: #EFFCEA;
    --text-dark: #112D32;
    --secondary: #254E58;
    --tertiary: #4F4A41;
    --quaternary: #6E6658;
    --background-gradient: radial-gradient(circle, var(--background-start) 0%, var(--background) 100%);
}
```

#### Text
All text throughout the app has been consolidated into the `src/Strings.js` file. Here you can edit the name, 
experience or about descriptions etc.

To change the title of the app to "Resume | <name>", edit line 27 of `public/index.html`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
