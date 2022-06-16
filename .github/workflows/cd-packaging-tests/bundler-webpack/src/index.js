// Verify that imports from the main export work:
import { sampleModuleFn as mainModuleFn } from "@inrupt/template-ts";
// Verify that submodule imports work:
import { sampleModuleFn } from "@inrupt/template-ts/module";

console.log(mainModuleFn());
console.log(sampleModuleFn());
