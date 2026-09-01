# What is @cob/rest-api-wrapper

`@cob/rest-api-wrapper` is a library of functions to simplify the interaction with a CoB server backend.
It uses part of the available [REST API](https://learning.cultofbits.com/swagger/swagger-ui/#/)

# How to install

In your project directory run:

```
 npm i @cob/rest-api-wrapper
```

# Available functions

The list of available functions are:
* `setServer` / `getServer`
* `auth`
* `umLoggedin`
* `rmDomainSearch`
* `rmDefinitionSearch`
* `rmDefinitionAggregation`
* `rmListDefinitions`
* `rmListDefinitionFields`
* `rmGetInstance`
* `rmAddInstance`
* `rmDeleteInstance`
* `dmEquipmentSearch`

TypeScript declarations for all of them ship with the package (see `types/index.d.ts`).

# Examples
Checkout the `tests` directory for use cases for each of the functions:
* `tests/unit` — offline tests, also documenting the exact requests each function makes
* `tests/integration` — end-to-end use cases against a live server

# Development
For contributions to the project checkout [README.Development.md](./README.Development.md)
