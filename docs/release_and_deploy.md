# Updating the Collection Manager application #

This document will outline how to create a new version of the Collection Manager and deploy it on the beta server. It will also explain how to update other dependent services such as the [Collections API](https://github.com/dina-web/collections-api) or [Solr](https://github.com/dina-web/collections-solr).

## Creating new version of Collection Manager ##

#### tldr; ####

* Clone repository and setup development environment
* Make changes
* Tag and create new version
* SHH to beta server and pull latest Docker image

### Clone repository and setup development environment ###

To create a new version of the Collection Manager application you'll first need to follow the install instructions at https://github.com/dina-web/collections-ui to get the application up and running locally.

### Make changes ###

Once you've got the application locally, make the changes you want. Eg. fixing bugs or adding features. These new features or bugs should be developed in its' own branches and should be pull requested into the Master branch. See https://guides.github.com/introduction/flow/ for reference on how to work with pull requests.

When you've made your changes make sure that all tests pass before releasing. The tests are executed by navigating to http://localhost:4200/tests or checking the build status for your pull request on Travis, https://travis-ci.org/DINA-Web/collections-ui/builds

If the tests pass and no one complains on the pull request, merge it and move on the creating a new version.

### Tag and create new version ###

When you've made new changes that you want to bundle in a release, checkout the branch that contains the changes. In most cases this should be the Master branch.

When you have the correct branch locally make sure that you have all the latest changes by pulling and also make sure that you don't have any uncommitted changes(otherwise they will be included).

To increment the version and automatically add a git tag, use the Ember-CLI command:

```
    ember release
```

This will increment the version number in package.json and automatically add and push a new git tag. See: https://github.com/lytics/ember-cli-release#examples

When a new tag is pushed Travis will start to build a new release and when done it will upload an archive to github and a new Docker image to https://hub.docker.com/r/dina/collections-ui/

This image can then be deployed into the wild.

### Update image on beta server ###

To update the version on the beta server you'll first need access to the server. This is done by using SSH and a private/public key. Your key needs to be uploaded to the beta server and this is done by someone with access and knowledge.

When you have an account with SSH access on the beta server login to it:

```
    ssh username@urls-to-server.net
```

Once on the server all applications and services are handled by the DINA user. Switch to that user:

```
    su dina
```

The applications are found in the home directory of DINA. Navigate to the *dw-collections-ui* folder in the home folder:

```
    cd ~/dw-collections-ui
```

*dw-collections-ui* is the integration repository to handle running the Collections UI Docker image. You can find the source here: https://github.com/DINA-Web/dw-collections-ui

In the folder you'll need to perform two commands to pull the latest version and and then restart and force recreate it.

```
    docker-compose pull
    docker-compose up -d --force-recreate
```

After running these two commands navigate to the application in preferred browser and hard refresh.

## Updating dependent services##

Services used by the Collection manager, such as API or Solr, are updated in a similar way as the Collection manager.

First make you changes and tag and build a new release with Travis. Once the build is ready login to the beta server and navigate to the *dw-collections* folder in the home directory.

Pull the service you want to update and restart it.

*dw-collections* is an integration repository containing everything needed to run the backend of the Collection manager. For full reference see: https://github.com/dina-web/dw-collections
