const dns = require('dns');

const hostname = 'www.facebook.com';

dns.resolve4(hostname, (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`IP addresses for ${hostname}:`);
  addresses.forEach((address) => {
    console.log(address);
  });
});
