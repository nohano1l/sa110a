# sum(BDD)
```
BDD(Behavior Driven Development):Write the test function first, then write the function.
```
## Feature
```
Computes the sum of the values in array.
```
## Test Result
Before write the function
```
$ deno test .
error: Cannot resolve module "file:///C:/Users/cxz1d/OneDrive/%E6%A1%8C%E9%9D%A2/nohano1l/sa110a/hw/lodash/sum(BDD)/sum.ts" from "file:///C:/Users/cxz1d/OneDrive/%E6%A1%8C%E9%9D%A2/nohano1l/sa110a/hw/lodash/sum(BDD)/test/test.ts".
    at file:///C:/Users/cxz1d/OneDrive/%E6%A1%8C%E9%9D%A2/nohano1l/sa110a/hw/lodash/sum(BDD)/test/test.ts:2:0
```
After write the function
```
cxz1d@MSI MINGW64 ~/OneDrive/桌面/nohano1l/sa110a/hw/lodash/sum(BDD)/test (master)
$ deno test .
Check file:///C:/Users/cxz1d/OneDrive/%E6%A1%8C%E9%9D%A2/nohano1l/sa110a/hw/lodash/sum(BDD)/test/test.ts
running 1 test from file:///C:/Users/cxz1d/OneDrive/%E6%A1%8C%E9%9D%A2/nohano1l/sa110a/hw/lodash/sum(BDD)/test/test.ts
test sum ...
✔  _.sum([4, 2, 8, 6]) = 20

 ok (19ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (53ms)
```