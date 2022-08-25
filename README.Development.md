# Initial Setup

## Development setup

1. Install plugin [Prettier](https://plugins.jetbrains.com/plugin/10456-prettier) in Intellij and enable it
   in `Preferences / Settings | Plugins.`

![](https://prettier.io/docs/assets/webstorm/prettier-settings.png)

2. Add `,json` extensions to the values in `Run for files`
3. Check `On Reformat Code` and `On save`

Check [here](https://prettier.io/docs/en/webstorm.html) for more information

## Development:

```shell
$> npm install
```

## Build:

```shell
$> npm run build
```

## Testing

You can check the status of the existing tests by running:

```shell
npm run test
```

### Test cenario baseline

For the tests to run as planned there should be the following instances

- In **Test Person** definition:
  - "DefinitionCount Test": [0](https://learning.cultofbits.com/recordm/#/definitions/6/q="DefinitionCount%20Test") (
    zero)
  - "Instances_Test*": [0](https://learning.cultofbits.com/recordm/#/definitions/6/q=Instances_Test*) (zero)
- In **Country Series** definition:
  - "Arab World": [20](https://learning.cultofbits.com/recordm/#/definitions/2/q="Arab%20World")
  - "United": [60](https://learning.cultofbits.com/recordm/#/definitions/2/q="United")

### Troubleshooting tests

Some of the reasons tests can fail, **without just cause**, are the following:

- incorrect base info (check above what is expected)
- more than 1 jest process running. Check `ps -ef | grep jest` to make sure there is no unknow jest running in the
  background
- no connectivity to https://learning.cultofbits.com

Usefull strategies to analise a specific failling test :

- run `jest --watch -o` inside a javascipt debug console (in VCode for example). Breakpoints and debugging will work.
- change the test to `test.only(...)` to make sure it is not a conflict with other tests in the same test file
- try `jest --watch -o --runInBand` if you think there may be conflicting behavior between test files
- when tests are not running every `db*.json` files should be stable (ie, not changing). If they are changing it means
  some jest is running or a test didn't stop adequately. In this case stop all jest processes and restart jest.

Notice that:

- There should be only one jest process running
  - if more than two developers are running the DB instances might be overlapped
  - if more than two process running all db\*.json cache info will be unreliable
