import Ember from 'ember';

import { metersToPixels as _metersToPixels } from 'dw-collections-manager/utils/map';

export function metersToPixels(params) {
    const [meters, zoom] = params;
    if (!meters || !zoom) {
        console.warn('Missing params "meters" or "zoom": ', meters, zoom);
        return 5;
    }
    return _metersToPixels(meters, zoom) * 2;
}

export default Ember.Helper.helper(metersToPixels);
