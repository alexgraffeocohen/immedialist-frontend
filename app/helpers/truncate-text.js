import Ember from 'ember';

export function truncateText(params, hash) {
  var text = params[0];
  let charCount;

  if(hash === undefined) {
    charCount = 30;
  } else {
    charCount = Number(hash.charCount);
  }

  if(text.length > charCount) {
    var charDiff = text.length - charCount;
    return `${text.substring(0, text.length - charDiff)}...`;
  } else {
    return text;
  }
}

export default Ember.Helper.helper(truncateText);
