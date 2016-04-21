/* global L */

import Ember from 'ember';

export default Ember.Component.extend({

    sanitizedCenter: Ember.computed('_center', function () {
        const center = this.get('_center');
        const coordinates = (
            Ember.isArray(center) &&
            !Ember.isBlank(center) &&
            !Ember.isBlank(center[0]) &&
            !Ember.isBlank(center[1]) &&
            center
        );

        if (!coordinates) {
            this.set('_zoom', 2);
            
            return [59.3687594, 18.0533395];
        }
        
        return coordinates;
    }),

    didReceiveAttrs() {
        this._super(...arguments);

        let zoom = this.get('zoom') || 10;
        let center = this.get('center');
        
        if (this.get('_zoom') !== zoom) {
            this.set('_zoom', zoom);            
        }
        
        if (this.get('_center') !== center) {
            this.set('_center', center);            
        }
    },

    actions: {
        updateBounds (event) {
            const map = event.target;
            const bounds = map.getBounds();

            if (this.attrs.boundsUpdate) {
                this.attrs.boundsUpdate([
                    bounds.getNorth(), bounds.getEast(),
                    bounds.getSouth(), bounds.getWest()
                ]);
            }
        },
        onClick (event) {
            if (this.attrs.onClick) {
                this.attrs.onClick(event);
            }
        },
        updateZoom (event) {            
            if (this.attrs.onZoom) {
                this.attrs.onZoom(event.target.getZoom(), event);
            }
        },
        onLoad(event) {
            this.send('updateBounds', event);
            
            // Add scale indicator.
            L.control.scale().addTo(event.target);
        }
    }
});
