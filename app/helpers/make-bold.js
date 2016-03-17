import Ember from 'ember';

export function makeBold(params, hash) {
    let output = params[0];
    const needle = hash && hash.match;

    if (needle) {
        const regEx = new RegExp(needle, "ig");
        var replaceMask = `<b>${needle}</b>`;

        output = output.replace(regEx, replaceMask);
    } else {
        output = `<b>${output}</b>`;
    }

    return Ember.String.htmlSafe(output);
}

export default Ember.Helper.helper(makeBold);
