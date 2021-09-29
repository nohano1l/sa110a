# dropRight(TDD)
```
TDD(Test Driven Development):Write the test function first, then write the function.
```
## Feature
```
Creates a slice of array with n elements dropped from the end.
```
## Install mocha
```
$ npm install mocha --global
```
## Test Result
Before write the function
```
cxz1d@MSI MINGW64 ~/OneDrive/桌面/nohano1l/sa110a/hw/lodash/dropRight(TDD)/test (master)
$ mocha dropRight_test.js 

Error: Cannot find module '../dropRight'
Require stack:
- C:\Users\cxz1d\OneDrive\桌面\nohano1l\sa110a\hw\lodash\dropRight(TDD)\test\dropRight_test.js
- C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\nodejs\esm-utils.js
- C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\mocha.js
- C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\cli\one-and-dones.js
- C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\cli\options.js
- C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\bin\mocha
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:965:15)
    at Function.Module._load (internal/modules/cjs/loader.js:841:27)
    at Module.require (internal/modules/cjs/loader.js:1025:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.<anonymous> (C:\Users\cxz1d\OneDrive\桌面\nohano1l\sa110a\hw\lodash\dropRight(TDD)\test\dropRight_test.js:2:19)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Module.require (internal/modules/cjs/loader.js:1025:19)
    at require (internal/modules/cjs/helpers.js:72:18)
    at Object.implementationOfRequireOrImportForUnstableEsm [as requireOrImport] (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\nodejs\esm-utils.js:101:12)
    at Object.exports.loadFilesAsync (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\nodejs\esm-utils.js:88:34)
    at Mocha.loadFilesAsync (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\mocha.js:461:19)
    at singleRun (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\cli\run-helpers.js:125:15)
    at exports.runMocha (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\cli\run-helpers.js:190:10)
    at Object.exports.handler (C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\lib\cli\run.js:374:11)
    at C:\Users\cxz1d\AppData\Roaming\npm\node_modules\mocha\node_modules\yargs\build\index.cjs:443:71
```
After write the function
```
cxz1d@MSI MINGW64 ~/OneDrive/桌面/nohano1l/sa110a/hw/lodash/dropRight(TDD)/test (master)
$ mocha dropRight_test.js


  dropRight
    ✔ _.dropRight(['1', '2', '3'], 2) equalTo ['1']
    ✔ _.dropRight(['1', '2', '3'], 3) equalTo [ ]
    ✔ _.dropRight(['1', '2', '3']) equalTo ['1', '2']


  3 passing (5ms)
```