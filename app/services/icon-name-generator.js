import Ember from 'ember';

export default Ember.Service.extend({
  call(listItem) {
    switch(listItem.get('mediaType')) {
      case "movie":
        return "fa-film";
      case "show":
        return "fa-video-camera";
      case "creator":
        return "fa-user";
      case "song":
        return "fa-music";
      case "album":
        return "fa-music";
      case "book":
        return "fa-book";
    }
  }
});
