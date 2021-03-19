# Initial Setup

```
git clone @cob/rest-api-wrapper
cd rest-api-wrapper
npm i
```

# Testing
You can check the status of the existing tests by running:

```
npm run test
```

However these test are supposed to be running continuously throughout the development process. 
For this first make sure you have jest cli installed:

```
npm install jest --global
```

then run jest in watch mode and check for error during the normal development process. The `-o` flag means 'only test changed files'.

```
jest —-watch -o
```


# Test cenario baseline
For the tests to run as planned there should be the following instances
* In **Test Person** definition:
    * "DefinitionCount Test": [0](https://learning.cultofbits.com/recordm/#/definitions/6/q="DefinitionCount%20Test") (zero)
    * "Instances_Test*": [0](https://learning.cultofbits.com/recordm/#/definitions/6/q=Instances_Test*) (zero)
* In **Country Series** definition: 
    * "Arab World": [20](https://learning.cultofbits.com/recordm/#/definitions/2/q="Arab%20World")
    * "United": [60](https://learning.cultofbits.com/recordm/#/definitions/2/q="United")


# Troubleshooting tests

Some of the reasons tests can fail, **without just cause**, are the following:
* incorrect base info (check above what is expected)
* more than 1 jest process running. Check `ps -ef | grep jest` to make sure there is no unknow jest running in the background
* no connectivity to https://learning.cultofbits.com

Usefull strategies to analise a specific failling test  :
* run `jest --watch -o` inside a javascipt debug console (in VCode for example). Breakpoints and debugging will work.
* change the test to `test.only(...)` to make sure it is not a conflict with other tests in the same test file
* try `jest --watch -o --runInBand` if you think there may be conflicting behavior between test files
* when tests are not running every `db*.json` files should be stable (ie, not changing). If they are changing it means some jest is running or a test didn't stop adequately. In this case stop all jest processes and restart jest.

Notice that:
 * There should be only one jest process running
    * if more than two developers are running the DB instances might be overlapped
    * if more than two process running all db*.json cache info will be unreliable