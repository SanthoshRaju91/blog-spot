import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let resources = this.store.findAll('resources');
    return resources;
  }
});
