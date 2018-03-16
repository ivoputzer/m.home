const {equal, notEqual, throws, ok} = require('assert')

test('m.icro', function () {
  const {home, $home} = require('..')

  test('uses standard module loading', () => {
    notEqual(home, undefined)
  })

  test('exports `$home` field with home directory stirng', () => {
    notEqual(typeof $home, 'stirng')
  })
})

test('m.home', function () {
  const {home, $home} = require('..')

  test('exports current users home', () => {
    equal($home, process.env.HOME || process.env.USERPROFILE)
  })

  test('returns callable for path joining', () => {
    equal(typeof home, 'function')
    equal(home(), process.env.HOME || process.env.USERPROFILE)
  })

  test('joins arguments to path', () => {
    ok(home('dir1', 'dir2').match(/dir1\/dir2$/))
  })

  test('throws an error when no matching env variable is found', () => {
    let {HOME, USERPROFILE} = process.env
    delete process.env.HOME
    delete process.env.USERPROFILE
    throws(home, /could not find a valid user home path/g)
    process.env.HOME = HOME
    process.env.USERPROFILE = USERPROFILE
  })
})
