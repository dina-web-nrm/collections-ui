import Ember from 'ember';

import config from '../config/environment';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({
    
    /** Use refresh access token. */
    refreshAccessTokens: true,
    
    /** Endpoint for authentication. */
    serverTokenEndpoint: `${config.AUTHENTICATION_HOST}/auth/realms/dina/tokens/grants/access`,
    
    /** Set client id. */
    clientId: 'dina-rest-endpoint',
    
    /** Override to add client id to data. */
    makeRequest(url, data) {
        const clientId = this.get('clientId');

        if (!Ember.isEmpty(clientId)) {
            data.client_id = clientId;
        }

        return this._super(...arguments);
    }
      
});