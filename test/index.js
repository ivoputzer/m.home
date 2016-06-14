const {equal, notEqual, throws, ok} = require('assert')

describe('m.icro', function (){
  const {home, $home} = require('..')
  it('uses standard module loading', () => {
    notEqual(home, undefined)
  })
  it('exports `$home` field with home directory stirng', () => {
    notEqual(typeof $home, 'stirng')
  })
})

describe('m.home', function (){
  const {home, $home} = require('..')
  it('exports current users home', () => {
    equal($home, process.env.HOME || process.env.USERPROFILE)
  })
  it('returns callable for path joining', () => {
    equal(typeof home, 'function')
    equal(home(), process.env.HOME || process.env.USERPROFILE)
  })
  it('joins arguments to path', () => {
    ok(home('dir1', 'dir2').match(/dir1\/dir2$/))
  })
  it('throws an error when no matching env variable is found', () => {
    let {HOME, USERPROFILE} = process.env
    delete process.env.HOME
    delete process.env.USERPROFILE
    throws(home, /could not find a valid user home path/g)
    process.env.HOME = HOME
    process.env.USERPROFILE = USERPROFILE
  })
})
