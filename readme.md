m.home
===
**[m(icro)](https://github.com/ivoputzer/m.cro#readme)[home](https://github.com/ivoputzer/m.home)** is a cross-platform path to the user's home utility from the m.icro series.

[![travis](https://img.shields.io/travis/ivoputzer/m.home.svg?style=for-the-badge)](https://travis-ci.org/ivoputzer/m.home)
[![dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=for-the-badge&colorB=44CC11)](package.json)
[![linter](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=for-the-badge)](http://standardjs.com/)
[![coverage](https://img.shields.io/coveralls/ivoputzer/m.home.svg?style=for-the-badge)](https://coveralls.io/github/ivoputzer/m.home?branch=master)

[![node](https://img.shields.io/badge/node-6%2B-blue.svg?style=for-the-badge)](https://nodejs.org/docs/v6.0.0/api)
[![version](https://img.shields.io/npm/v/m.home.svg?style=for-the-badge&colorB=007EC6)](https://www.npmjs.com/package/m.home)
[![minzip](https://img.shields.io/bundlephobia/minzip/m.home.svg?style=for-the-badge)](https://www.npmjs.com/package/m.home)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&colorB=007EC6)](https://spdx.org/licenses/MIT)

### example usage
```
const {home, $home} = require('m.home')

// home ==> joining function
// $home ==> home constant

userhome('.bashrc')
  => /Users/ivoputzer/.bashrc

userhome('test', 'sub', 'file')
  => /Users/ivoputzer/test/sub/file

userhome()
  => C:\Users\ivoputzer
```
If a valid user home environment variable could not be found an error will be thrown indicating so.
