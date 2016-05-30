/**
 * Return *meters* converted to pixels based on *zoomLevel*.
 */
function metersToPixels(meters, zoomLevel) {
    let zoomConversion = {
        0:156412,
        1:78206,
        2:39103,
        3:19551,
        4:9776,
        5:4888,
        6:2444,
        7:1222,
        8:610.984,
        9:305.492,
        10:152.746,
        11:76.373,
        12:38.187,
        13:19.093,
        14:9.547,
        15:4.773,
        16:2.387,
        17:1.193,
        18:0.596,
        19:0.0005
    };

    if (!zoomConversion[zoomLevel]) {
        console.warn('Cannot convert zoomLevel: ', zoomLevel);
        return 0;
    }

    return meters / zoomConversion[zoomLevel];
}

function roundCoordinate(coordinate) {
    return Math.round(coordinate * 100000) / 100000;
}

export { metersToPixels, roundCoordinate };
