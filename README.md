# Paranoidy UI
A UI example using create-react-app and bootstrap 4

## Dependencies
### Bootstrap
```
npm i bootstrap
npm i jquery popper.js
```

imports to use bootstrap and jquery
```
import 'bootstrap/dist/css/bootstrap.min.css';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
```

### Prop Types
Type checking and validating props
```
npm i prop-types
npm i -D @types/prop-types
```
## Font Awesome Icons
free font awesome icons
https://fontawesome.com/icons
```
npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
npm i -S @fortawesome/free-regular-svg-icons
npm i -S @fortawesome/free-solid-svg-icons
npm i -S @fortawesome/free-brands-svg-icons
```


## Dev Dependencies
### Prettier
```
npm i -D prettier
```
add to package.json as a script
```
"scripts": {
  ...
  "prettier": "prettier --single-quote --write \"src/**/*.{js,jsx,json,css}\"",
  ...
}
```
to run prettier to beautify code
IMPORTANT NOTE: Make sure you save all files before running!
```
npm run prettier
```