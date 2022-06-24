// Verify that imports from the main export work:
import { sampleModuleFn as mainModuleFn } from "@inrupt/universal-fetch";
// Verify that submodule imports work:
import sampleModuleFn from "@inrupt/universal-fetch/module";

console.log(mainModuleFn());
console.log(sampleModuleFn());
