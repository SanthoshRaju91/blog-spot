import Ember from 'ember';

export default Ember.Component.extend({
  sideMenu: [{
      'label': 'BLOG',
      'url': 'blog'
    }, {
      'label': 'SHARED',
      'url': 'shared'
    }, {
      'label': 'ABOUT',
      'url': 'about'
    }],
  socialMedia: [{
      url: 'https://github.com/SanthoshRaju91/',
      iconClass: 'fa-github'
    }, {
      url: 'https://twitter.com/santhoshraju2',
      iconClass: 'fa-twitter'
    }, {
      url: '',
      iconClass: 'fa-linkedin'
    }],
  actions: {

  }
});
