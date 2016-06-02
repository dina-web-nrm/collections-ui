import Ember from 'ember';

export function makeBold(params, hash={}) {
    let output = params[0];
    const { match, highlight } = hash;
    const needles = match && match.split(' ') || [];

    if (!output) {
        return output;
    }
    else if (needles.length) {
        needles.forEach((needle)=>{
            if(!needle.length) {
                return;
            }

            const cleanedNeedle = needle.replace(/[&\/\\#,+()$~%.'":*?<>{}-]/g, '').replace(/(OR|AND)/, '');
            if (!cleanedNeedle) {
                return;
            }

            const regEx = new RegExp(cleanedNeedle, 'ig');
            output = output.replace(regEx, (matched) => {
                return `<span class="make-bold ${highlight ? 'highlight' : ''}">${matched}</span>`;
            });
        });
    } else {
        output = `<span class="make-bold ${highlight ? 'highlight' : ''}">${output}</span>`;
    }

    return Ember.String.htmlSafe(output);
}

export default Ember.Helper.helper(makeBold);
