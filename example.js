const { Netrc } = require('.')
const netrc = new Netrc('./test/fixtures/example')
netrc.loadSync()
console.dir(netrc)
console.dir(netrc.machines)
console.dir(netrc.machines['api.foo.com'])
console.dir(netrc.machines['api.foo.com'].login)
