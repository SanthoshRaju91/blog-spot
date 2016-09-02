import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let routes = [{
      url: 'shared.videos',
      label: 'Video\'s',
      class: 'col-md-4 col-sm-3 col-xs-3'
    }, {
      url: 'shared.resources',
      label: 'Resource\'s',
      class: 'col-md-4 col-sm-4 col-xs-5'
    }, {
      url: 'shared.other-popular',
      label: 'Other\'s blog',
      class: 'col-md-4 col-sm-5 col-xs-4'
    }];
    return routes;
  },
  setupController(controller, model, transition) {
    this._super(...arguments);
    if(transition.targetName === 'shared.index') {
      controller.transitionToRoute('shared.videos');
    }
  }
});
