# Project structure #

Short outline of the different components used in the Collection Manager UI.

## Collections API ##

The [Collections API](github.com/dina-web/collections-api) is the main component backing the Collections Manager. The API is a REST API which wraps the structure of the database and is exposed in the application using [Ember Data](http://emberjs.com/api/data/) and the models available in Ember Data.

All models can be located in [models](../app/models) and each model will correspond to one table in the database.

## Keycloak ##

Keycloak together with Ember Simple Auth is used for authentication.

The main parts of the authentication is handled by the Oauth `authenticators` and `authorizers` located in [authenticators/oauth.js](../app/authenticators/oauth.js) and [authorizers/oauth.js](../app/authorizers/oauth.js)

They handle the communication with Keycloak and will append the authentication token to any request performed by Ember Data.

This is a short example of how the authentication is performed.

1. The user tries to access restricted view. Eg. register or list view.
1. Ember Simple Auth checks if the user is logged in by validating the precense of an `Access Token` in local storage.
    1. If user is not logged in the user is redirected to the login page
    1. When the user submits its' credentials they are sent to Keycloak which will validate them and if correct return a newly issued `Access Token`.
1. If the user is logged in the view is displayed.
1. When data is requested from the API using Ember Data the `DataAdapterMixin` specified in [adapters/application.js](../app/adapters/application.js) will make sure that the `Access Token` is present in the headers.
1. When the API recieves the request it will take the `Access Token` from the headers and validate it against Keycloak.
    1. It will both check that it's a valid `Access Token` and that the user has the correct permissions.
    1. If valid return response otherwise return `403 Permission Denied` or `401 Unauthorized`.

## Solr Search Index ##

To complement the [Collections API](github.com/dina-web/collections-api) a [Solr](http://lucene.apache.org/solr/) search index is also available to perform more advanced queries.

The index only exposes primary ids and entity types and to get actual data the ids needs to be used with the Collections API.

1. Search Solr index specifying entity type and query.
1. Response will contain primary ids
1. Fetch data for primary ids from Collections API

A service to make access to the Solr index easier is available in [solr.js](../app/services/solr.js). To see an example usage the service is used in the [solr-autocomplete-input.js](../app/components/solr-autocomplete-input.js) component.
