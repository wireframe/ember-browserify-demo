import Ember from 'ember';
import Twilio from 'npm:twilio-conversations';

export default Ember.Route.extend({
  init() {
    this._super(...arguments);
    if (Twilio) {
      console.log('library loaded');
    }
  }
});
