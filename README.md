chayns with React + ES.NEXT - Template
===================
This template contains a tapp using the chayns ModeSwitch, Accordion and PersonFinder components.<br>
If you're a chayns® manager you can switch to the specific mode and a PersonFinder will get visible.<br>
Using this PersonFinder you can select users which then will be appended to the user list.

This template will help you getting started with building Tapps for your chayns®-Website with React and ES2015. First of all you have to make sure, that you have the latest version of [node.js][1] installed.

Setup
-------------
Install all project dependencies: </br>
```
npm i /**or yarn*/
```
Build the empty folder structure of your project:
```
npm run setup /**or yarn run setup*/
```
Start your webpack-dev-server for debugging your project:
```
npm start /**or yarn start*/
```

The webpack-dev-server is now running on your localhost on the port 8080. If the port is not available you can change it in the dev.babel.js in the webpack folder.
You can now implement the example Tapp to your chayns® site:

1. Go to configuration -> Tapps
2. Click ```Add Tapp```
3. Use external content
4. Fill out the name and in the field data source put your ip like this: ```localhost:8080```
5. Click ```add```


> **Hint:** Writing Tapps with React? You might also want to take a look at our [React Style Guide][2].

 [1]: https://nodejs.org/en/
 [2]: https://github.com/TobitSoftware/chayns-guides/blob/master/TobitReactJsxStyleGuide.md
