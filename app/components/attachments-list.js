import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['attachments-list'],
    
    actions: {
        remove(attachment) {
            this.attrs.remove(attachment);
        }
    }
});
