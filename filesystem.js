const fs = require('fs');
const fileUrl = new URL('https://nodejs.org/dist/latest-v10.x/docs/api/url.html#url_the_whatwg_url_api');

fs.readFileSync(fileUrl);
