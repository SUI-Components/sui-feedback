# sui-feedback

## Description
A feedback gathering component by displaying a message at the bottom of the page that launch a fully customizable modal window.

## Usage
Render the component passing as props the following object literal:

```javascript
const literals = {
    footerTitle: 'This is an important notice',
    footerParagraf: 'This is more info about the notice',
    modalTitle: 'Feedback modal Title',
    modalContent: 'Insert here your important extended content inside your modal',
    buttonOk: 'OK'
};

ReactDom.render(
    <Feedback literals={literals} />,
    document.getElementById('main')
);
```

## Installation
Clone this repository and run:
```
$ npm install
```

## Dependencies

To run the lint tasks we have dependencies of:

* [sass-lint](https://github.com/sasstools/sass-lint)

If that tools are not installed you cant commit. Because the lint pass never will be ok.

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.scss`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```
## To publish yours docs page:
```
$ npm run doc
```

That will publish in a gh-page for `docs` folder.
What is a component without a public demo, isn´t ?!
