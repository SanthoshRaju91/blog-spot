import Ember from 'ember';

export default Ember.Route.extend({
  record: {},
  model(params) {
    let self=this;
    this.store.findRecord('blogs', params.id).then(function(record) {
      self.set('record', record);
    });
    // this.store.findRecord('blogs', params.id).then(function(record) {
    //   return record;
    // });
  },
  setupController(controller) {
    controller.set('header', this.get('record.header'));
    controller.set('summary', this.get('record.summary'));
    controller.set('createDate', this.get('record.createDate'));
    controller.set('tagged', this.get('record.tags'));
    controller.set('content', this.get('record.content'));
  }
});
