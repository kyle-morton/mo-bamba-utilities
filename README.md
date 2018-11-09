https://angularfirebase.com/lessons/build-an-angular-library-with-ngpackagr/

# Create app
ng new my-app

# Generate a library
ng generate library awesome

# Build it
ng run awesome:build

# Install it in your app
npm install dist/awesome

//if service needs external modules like HttpClient, create a module w/ that imported and inject into your client module that using the library

# publish build to npm
npm publish dist/awesome




# in another app, install npm package
npm install awesome
