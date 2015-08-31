import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('listItems', { path: '/' }, function(){
    this.route('listItem', { path: ':listitem_id' });
  });
});

export default Router;
