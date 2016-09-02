import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let videos = this.store.findAll('videos');
    return videos;
  }
});
