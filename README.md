
## Crossfeed Frontend

This is the repository for Crossfeed's frontend.

### Steps Taken

1. npx create-react-app . --template typescript  
2. npm install --save uswds@latest 
3. npm install --save react-router-dom  
4. npm install gulp-cli -g 
5. npm install autoprefixer gulp@^4.0.0 gulp-notify gulp-postcss gulp-replace gulp-sass gulp-sourcemaps postcss-csso sass uswds@latest 

Followed instruction on usdws for Gulp but can always delete from devDependencies

1. uswds-gulp@github:uswds/uswds-gulp --save-dev
2. cp node_modules/uswds-gulp/gulpfile.js .
3. Edit gulp file to add to src/assets (this may need to change or not be necessary)
4. gulp init


* npm install --save @types/react-router-dom 
* Deleted unnecessary css/test files that came with create-react-app
* added basic router/switch in App.tsx
* npm start