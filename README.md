***This is a tutorial for setting up basic testing using Mocha and incorporating Babel and webPack. There are several branches each corresponding to a particular aspect of the testing process.***

**testOne:**
At this state we're essentially only running a test on an array that has been created within the test itself. This is the initial step in affiring that simply Mocha testing is set up and passing as is seen in './test/test.js'. Note that this does not include any assertion library.
By default, Mocha will look for a glob in the 'test' directory where it expects to find the test files.
Mocha is the only dependency in package.json.
Uses pre-ES5 syntax only, no transpiling is necessary at this point.
