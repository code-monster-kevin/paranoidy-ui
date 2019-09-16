# Paranoidy UI
A UI example using create-react-app and bootstrap 4

## Dependencies
### Bootstrap
https://getbootstrap.com/docs/4.3/getting-started/introduction/
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
### Color Schemes Reference
https://material-ui.com/customization/color/

Background Photo by Ferdinand Stöhr on Unsplash
Jumbtron Photo by Sharon-McCutcheon on Unsplash
Web Development Photo by Hal Gatewood on Unsplash
Mobile Development Photo by Caspar Camille Rubin on Unsplash
API Development Photo by Vincent Botta on Unsplash
Database Development Photo by Samuel Zeller on Unsplash
Software Design Photo by NEW DATA SERVICES on Unsplash
Progamming Languages Photo by Taras Shypka on Unsplash

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