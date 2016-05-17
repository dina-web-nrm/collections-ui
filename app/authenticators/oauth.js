import Ember from 'ember';

import config from '../config/environment';
import OAuth2PasswordGrantAuthenticator from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrantAuthenticator.extend({

    /** Use refresh access token. */
    refreshAccessTokens: true,

    /** Endpoint for authentication. */
    serverTokenEndpoint: `${config.AUTHENTICATION_HOST}/auth/realms/dina/tokens/grants/access`,

    /** Endpoint for refreshing token. */
    serverRefreshTokenEndpoint: `${config.AUTHENTICATION_HOST}/auth/realms/dina/protocol/openid-connect/token`,

    /** Set client id. */
    clientId: 'dina-rest-endpoint',

    /** Override to add client id to data. */
    makeRequest(url, data) {
        const clientId = this.get('clientId');

        if (!Ember.isEmpty(clientId)) {
            data.client_id = clientId;
        }

        return this._super(...arguments);
    },

    /** Override to be able to have different endpoint when refreshing a token. */
    _refreshAccessToken(expiresIn, refreshToken) {
        const data = { 'grant_type': 'refresh_token', 'refresh_token': refreshToken };

        /* Override starts. */
        const serverTokenEndpoint = this.get('serverRefreshTokenEndpoint');
        /* Override ends. */

        return new RSVP.Promise((resolve, reject) => {
          this.makeRequest(serverTokenEndpoint, data).then((response) => {
            run(() => {
              expiresIn = response['expires_in'] || expiresIn;
              refreshToken = response['refresh_token'] || refreshToken;
              const expiresAt = this._absolutizeExpirationTime(expiresIn);
              const data = Ember.merge(response, { 'expires_in': expiresIn, 'expires_at': expiresAt, 'refresh_token': refreshToken });
              this._scheduleAccessTokenRefresh(expiresIn, null, refreshToken);
              this.trigger('sessionDataUpdated', data);
              resolve(data);
            });
          }, (xhr, status, error) => {
            Ember.Logger.warn(`Access token could not be refreshed - server responded with ${error}.`);
            reject();
          });
        });
    },

});
