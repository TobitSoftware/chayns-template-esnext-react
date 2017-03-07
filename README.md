chayns with React + ES2015 - Template
===================
This template will help you getting started with building Tapps for your chayns®-Website with React and ES2015. First of all you have to make sure, that you have the latest version of [node.js][1] installed.

Setup
-------------
For your first start you can just run:
```
firstStart.bat
```
Start your webpack-dev-server for debugging your project:
```
npm start
```
To test your site you need a Chayns site and rights to add content. To add your site to Chayns we need to do some changes:

In webpack/dev.babel.js:
```
webpack-dev-server/client?http://0.0.0.0:8080
```
0.0.0.0 to your ip like 192.168.178.XXX

In package.json:
```
"start": "webpack-dev-server --colors --progress --config ./webpack/dev.babel.js --host 0.0.0.0 --port 8080",
```
here too

When you have changed this settings you need to go to your Chayns site. There you need to follow these steps:

1. Go to configuration -> Tapps
2. Click ```Add Tapp```
3. Use external content
4. Fill out the name and in the field data source put your ip like this: ```http://192.168.178.XXX/index.html```
5. Click ```add```
6. If your website isn't running make sure you have entered ```npm start```


> **Hint:** Writing Tapps with React? You might also want to take a look at our [React Style Guide][2].

 [1]: https://nodejs.org/en/
 [2]: https://github.com/TobitSoftware/chayns-guides/blob/master/TobitReactJsxStyleGuide.md
