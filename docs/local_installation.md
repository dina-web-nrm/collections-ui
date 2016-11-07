# Step by step installation instructions #

## Dependencies: ##

- git
- Node with NPM
- Ember.js
- Docker
- Docker-compose

## Installation ##

1. Clone the [proxy-docker](https://github.com/DINA-Web/collections-ui) from github.

1. Clone the [collections-api](https://github.com/DINA-Web/collections-api) from github. (This might not be neccessary, needs to be verified).

1. Clone the [collections-ui](https://github.com/DINA-Web/collections-ui) from github.

1. Edit your host file (ig: `/etc/hosts`)and point the following domains to your local maschine:
`127.0.0.1       api.dina-web  
127.0.0.1       beta-sso.dina-web.net  
127.0.0.1       beta-api.dina-web.net  `

1. Go to the proxy folder in the terminal and write `make`. Check that it is up and running with `docker-compose ps`.

1. Go to the collections-api-docker folder and write `make`. Check that it is up and running with `docker-compose ps`. **collectionsapidocker_fs-api_1** and **collectionsapidocker_fs_1** has an Exit 0, that is ok.

1. Navigate to [https://beta-sso.dina-web.net/auth/](https://beta-sso.dina-web.net/auth/).

1. Go to "Administration console" User: **admin**, password: **dina**.

1. Got to users in the left hand column, and then **add user** to the left.

1. Fill in the desired user name and **save**.

1. Go to **Attributes**. Set the **key** to `agentId` and the value to `1`. Press *add* and **save**.

1. Go to **credentials** and set a password. Turn off **temporary**.

1. Go to **Role mappings** and give access to everything.

1. Go to the collections-ui folder and run `ember s`.


