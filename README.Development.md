# Initial Setup

## API Generation

We use [OpenAPI Generator](https://openapi-generator.tech/) and the flavor `typescript-axios`. Some changes were made to the templates such that it's use would be simpler to the final developer. 
The original templates can be found here: https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources/typescript-axios

To override existing behavior, just drop the template in the directory `cob-templates/typescript-axios` and call `npm run generate-api`. This will update the API with the new changes.

More information can be found in [OpenApi Generator / Using Templates](https://openapi-generator.tech/docs/templating). 

## Development:

Start by installing the dependencies:

```shell
$> npm install
```

## To generate the API:

To generate the API you need the JSON file generated from Swagger. Once you have the swagger file for each product, you should place the file in the `openapi` folder and then invoke the following script:

```shell
$> npm run generate-api
```

All new models and APIs will appear in the directory `packages/<swagger_filename>`

**Note:** If a model has been removed the file will continue to exist. The process doesn't remove files. 

## Build:

```shell
# "Build" single package 
$> npm run build --workspace packages/<package_name>

# "Build" all packages 
$> npm run build:all
```

## Testing

You can check the status of the existing tests by running:

```shell
# Run all tests
npm run test

# Run a specific test
npm run test <test filename name without test.ts>
```

## Publishing packages

You can check the status of the existing tests by running:

```shell
# "Publish" a single package 
$> npm run publish --workspace packages/<package_name> 

# "Publish" all packages 
$> npm run publish:all
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
