import Ember from 'ember';

import { metersToPixels } from 'dw-collections-manager/utils/map';

export default Ember.Controller.extend({
    mapZoom: 13,
    uncertaintyRadius: Ember.computed(
        'model.collectingEvent.locality.uncertaintyRadius',
        'mapZoom',
        function () {
            return metersToPixels(
                this.get('model.collectingEvent.locality.uncertaintyRadius'),
                this.get('mapZoom')
            );
        }
    )
});
