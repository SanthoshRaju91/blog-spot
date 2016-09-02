import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let sharedBlogs = this.store.findAll('shared-blogs');
    return sharedBlogs;
  }
});
