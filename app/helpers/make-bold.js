import Ember from 'ember';

export function makeBold(params, hash) {
    let output = params[0];
    const { match, highlight } = hash;
    const needles = match.split(' ');

    if (needles.length) {
        needles.forEach((needle_)=>{
            if(!needle_.length) {
                return;
            }

            const regEx = new RegExp(needle_, 'ig');
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
