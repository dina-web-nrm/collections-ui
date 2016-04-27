import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['attachments-list'],
    
    isMarked: Ember.computed.none('marked'),
    displayConfirm: Ember.computed.not('isMarked'),
    
    actions: {
        
        /** Trigger removal of marked attachment. */
        remove() {
            this.attrs.remove(this.get('marked'));
            this.set('marked', undefined);
        },
        
        /** Mark attachment for removal and display dialog. */
        confirmRemove(attachment){
            this.set('marked', attachment);
        },
        
        /** Unmark attachment and hide dialog. */
        cancelRemove(){
            this.set('marked', undefined);
        }
    }
});
