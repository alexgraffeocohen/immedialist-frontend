import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  listItem: DS.belongsTo('listItem'),
  shows: DS.hasMany('show', {async: true}),
  movies: DS.hasMany('movie', {async: true}),
  songs: DS.hasMany('song', {async: true}),
  books: DS.hasMany('book', {async: true}),
  albums: DS.hasMany('album', {async: true}),
  creators: DS.hasMany('creator', {async: true}),

  mediaType: function() {
    return this.get('listItem.mediaType');
  }.property('listItem')
});
