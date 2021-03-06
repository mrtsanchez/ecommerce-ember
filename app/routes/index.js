import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('item', {
      orderBy: 'featured',
      equalTo: 'true',
      limitToLast: 3
    });
  }

});
