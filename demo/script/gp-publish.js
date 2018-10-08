const ghpages = require('gh-pages');

console.log('Publishing to github pages');
ghpages.publish('../build', function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Done!');
  }
});
