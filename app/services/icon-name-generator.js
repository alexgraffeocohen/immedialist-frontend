import Ember from 'ember';

export default Ember.Object.extend({
  call() {
    switch(this.get('listItem.mediaType')) {
      case "movie":
        return "fa-film";
      case "show":
        return "fa-video-camera";
      case "actor":
        return "fa-user";
      case "director":
        return "fa-user";
      case "author":
        return "fa-user";
      case "artist":
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
