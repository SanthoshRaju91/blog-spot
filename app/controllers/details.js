import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  isContent: computed('content', function() {
    return (this.get('content')) ? true: false;
  }),
  actions: {
    navigateBack: function() {
      this.get('router').transitionTo('blog');
    }
  }
});
