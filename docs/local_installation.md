# Step by step installation instructions #

## Asumptions: ##
Basic knowlege in Git, Node, Ember & Docker. This guide is covers installation from a Linux perpective, but the project should be able to run on any platfrom that supports Docker.

## Dependencies: ##

- Git
- Node with NPM
- Bower
- Curl
- Ember.js
- Docker
- Docker-compose

*Note: Make sure that you follow the right installation instructions if you are using a "systemd" system as Ubuntu 16.04 or newer versions of Fedora.*



## Installation ##

1. Clone the [proxy-docker](https://github.com/DINA-Web/proxy-docker) from github.

1. Clone the [collections-api](https://github.com/DINA-Web/collections-api) from github. (This might not be neccessary, needs to be verified).

1. Clone the [collections-ui](https://github.com/DINA-Web/collections-ui) from github.

1. Edit your host file (ig: `/etc/hosts`)and point the following domains to your local machine:
`127.0.0.1       api.dina-web
127.0.0.1       beta-sso.dina-web.net
127.0.0.1       beta-api.dina-web.net`

1. Go to the proxy folder in the terminal and write `make`. Check that it is up and running with `docker-compose ps`.

1. Go to the collections-api-docker folder and write `make`. Check that it is up and running with `docker-compose ps`. **collectionsapidocker_fs-api_1** and **collectionsapidocker_fs_1** has an Exit 0, that is ok.

1. Navigate to [https://beta-sso.dina-web.net/auth/](http://beta-sso.dina-web.net/auth/).

1. Go to "Administration console" User: **admin**, password: **dina**.

1. Go to users in the left hand column, and then **add user** to the left.

1. Fill in the desired username and **save**.

1. Go to **Attributes**. Set the **key** to `agentId` and the value to `1`. Press *add* and **save**.

1. Go to **credentials** and set a password. Turn off **temporary**.

1. Go to **Role mappings** and give access to everything.

1. Go to the collections-ui folder and run:
`npm install`,
`bower install`,
`ember s`.


