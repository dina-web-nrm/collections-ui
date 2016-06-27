# DINA Collections UI

[![Build Status](https://travis-ci.org/DINA-Web/collections-ui.svg?branch=master)](https://travis-ci.org/DINA-Web/collections-ui)

Source code for Collection Manager User Interface for managing Museum Collections.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

To find an overview of the project see [project structure](docs/project_structure.md).

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Setting up API connection

To be able to use the application properly you will need to run a version of the API as well.
The API and instructions on how to run it can be found in the [dina-web/dw-collections repository](https://github.com/DINA-Web/dw-collections).

Once you have the API up and running modify the HOST  in the `development` section in `config/environment.js`
to match the URL to your API.

### Linting

The project is using [ESLint](http://eslint.org/) for linting the JavaScript.

If using Sumblime enable linting by:

* Installing `ESLint` using `npm install -g eslint`
* Install `SublimeLinter` and `SublimeLinter-contrib-eslint` using Sublime Package Control.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

[Detailed deploy instructions](docs/release_and_deploy.md)

The application can be deployed using [Docker](https://www.docker.com/) and a `Dockerfile` is included to build
an image including a production build of the application and a [nginx](https://www.nginx.com/) server.

To build a Docker image of the application:

* `ember build --environment production --output-path dw-collection-manager`
* `docker build --tag slug/repo_name:version .`

Once you've run these two commands you'll have a Docker image that you can deploy.

### Building with Travis

By default this repository will be built using Travis-ci and a release will be generated
and uploaded to github releases and [docker hub](https://hub.docker.com/r/dina/collections-ui/) for each tag.

The integration repository [dina-web/dw-collections-ui](https://github.com/DINA-Web/dw-collections-ui) can be used to deploy the application.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
