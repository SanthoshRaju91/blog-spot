import DS from 'ember-data';

export default DS.Model.extend({
  string: DS.attr('description'),
  url: DS.attr('string'),
  tagged: DS.attr('string')
});
