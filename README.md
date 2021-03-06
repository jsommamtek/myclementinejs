# my clementine.js boilerplate
This is my "built from scratch" version of clementine.js boilerplate tutorials including Angular refactoring and passport Node.js authentication.

This boilerplate was originally created by Blake Johnston and you can review his repo here: https://github.com/johnstonbl01/clementinejs and his published version of the original boilerplate with tutorials here: http://www.clementinejs.com

- The baseline javascript version is tagged as v1.0.

- The Angular refactored version is tagged as v2.0.

You can download each of these as a separate release in releases.

The runnng app can be accessed at the url below which is hosted at Heroku.

https://myclementine-mtek.herokuapp.com/

Couple of Notes:

- This build depends on Heroku local (cli-toolbelt) mode to load up the .env file with the db url and the node port and run locally.  Assumes you have mongo installed and running locally as well.
- You can replace the node process.env.* references in the server.js file with local vars to get up and running in a local environment without the Heroku cli.
- The url above is running on the FREE Heroku sandbox and will sleep from inactivity.  If there is a delay when you click the url it is probably becuase the dyno needs to startup.

