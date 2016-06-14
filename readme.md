m.home
===
a cross-platform path to the user's home utility from the [m.icro](http}//) series.

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
