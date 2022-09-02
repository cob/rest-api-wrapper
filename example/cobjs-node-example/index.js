import {DefinitionsApi} from "@cob/cobjs-recordm";
// const {DefinitionsApi} = require("@cob/cobjs-recordm");

function main() {
    let definitionsApi = new DefinitionsApi();
    definitionsApi.getAllDefinitions().then(r => console.log(r.data))
}

main()