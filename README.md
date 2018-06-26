[![license](https://img.shields.io/github/license/TobitSoftware/chayns-template-esnext-react.svg)]() [![GitHub pull requests](https://img.shields.io/github/issues-pr/TobitSoftware/chayns-template-esnext-react.svg)]() [![](https://img.shields.io/github/issues-pr-closed-raw/TobitSoftware/chayns-template-esnext-react.svg)]()

chayns with React + ES.NEXT - Template
===================
This template contains a tapp using the chayns ModeSwitch, Accordion and PersonFinder components.<br>
If you're a chayns® manager you can switch to the specific mode and a PersonFinder will get visible.<br>
Using this PersonFinder you can select users which then will be appended to the user list.

This template will help you getting started with building Tapps for your chayns®-Website with React and ES.Next. First of all you have to make sure, that you have the latest version of [node.js][1] installed.

Development
-------------
1. Install all project dependencies with  `npm i`
2. Start your webpack-dev-server for debugging your project with `npm start`
    > The webpack-dev-server is now running on your localhost on the port 8080. If the port is not available you can change it in the dev.babel.js in the webpack folder. 

    > `npm start` runs the server in HTTPS mode. You need to add a ssl certificate to `/webpack/ssl`. If you just need HTTP then you can use `npm run start:http`
3. Enable eslint in your development environment. *(not necessary, but recommended)*
4. Implement the example Tapp to your chayns® site .
    1. Go to configuration -> Tapps
    2. Click `Add Tapp`
    3. Use external content
    4. Give the Tapp a name and type in the following URL : `http[s]://localhost:8080`
    5. Click `add`
5. Start development.

> **Hint:** Writing Tapps with React? You might also want to take a look at our [React Style Guide][2].

Building
---------
You can build this project via `npm run build`.

You can also build this project with sourceMaps for testing via `npm run build:qa`.


 [1]: https://nodejs.org/en/
 [2]: https://github.com/TobitSoftware/chayns-guides/blob/master/TobitReactJsxStyleGuide.md
