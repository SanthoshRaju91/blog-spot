import Ember from 'ember';
//import InfiniteScrollRouteMixin from 'ember-cli-infinite-scroll/mixins/infinite-scroll-route';

export default Ember.Route.extend({
  model() {
    let data = this.store.findAll('blogs');
    return data;
  },
  setupController: function(controller) {
    this._super(...arguments);
    let tags = this.store.findAll('tags');
    controller.set('tags', tags);
  }
});
