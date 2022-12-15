//import via named syntax 
import { addition, multiplication } from "./mathfunctionsES6.mjs.js";
console.log(addition(4))
console.log(multiplication(3));
//alle functions mithilfe von * einem object (in diesem fall mathfunction) zuweisen
import * as mathFunction from "./mathfunctionsES6.mjs.js";
//Zugriff mithilfe der dot notation
console.log(mathFunction.multiplication(4));
console.log(mathFunction);
//default import mit direkter namesgebung
import mathFunctionDefault from "./mathfunctionsES6.mjs.js"
console.log(mathFunctionDefault);
//import via named syntax und Umbenennung
import { addition as add, division as div } from "./mathfunctionsES6.mjs.js";
console.log(add(4))
console.log(div(4, 2));
console.log(mathFunction.default.addition(4));
