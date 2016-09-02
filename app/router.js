import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', function() {});
  this.route('shared', function() {
    this.route('videos');
    this.route('resources');
    this.route('other-popular');
  });
  this.route('about');
  this.route('details', {path: '/details/:id'});
});

export default Router;
