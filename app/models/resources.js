import DS from 'ember-data';

export default DS.Model.extend({
  img: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  author: DS.attr('string')
});
