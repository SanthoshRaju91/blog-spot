import Ember from 'ember';

export default Ember.Component.extend({
  breakpoints: [{
        'breakpoint': 10240,
        'settings': {
          'slidesToShow': 4,
          'slidesToScroll': 4,
          'infinite': true,
          'variableWidth': false,
          'arrows': true
        }
      }, {
          'breakpoint': 1024,
          'settings': {
            'slidesToShow': 3,
            'slidesToScroll': 3,
            'variableWidth': true,
            'infinite': true,
            'arrows': true
          }
        }, {
          'breakpoint': 600,
          'settings': {
            'slidesToShow': 3,
            'slidesToScroll': 3,
            'variableWidth': true,
            'infinite': true
          }
        }, {
          'breakpoint': 480,
          'settings': {
            'slidesToShow': 3,
            'slidesToScroll': 3,
            'variableWidth': true,
            'infinite': true
          }
        }],
      didInsertElement: function() {
        let self = this;
        Ember.run.schedule('afterRender', this, function() {
          setTimeout(function(){
            this.$('.carousel').slick({
              speed: 300,
              arrows: true,
              lazyLoad: 'ondemand',
              responsive: self.get('breakpoints')
            });
          }, 1000);
        });
      },
  actions: {

  }
});
