var phantom = require('phantom');

defineStep(/When stove is powered up/, function() {
  phantom.create(function(ph) {
    ph.createPage(function(page) {
      page.open('http://localhost:3000/', function(status) {
        expect(status).toEqual(200);
      });
    });
  });
});
