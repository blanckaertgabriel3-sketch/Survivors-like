import Model from "./classes/Model.js";
import View from "./classes/View.js";
import Controller from "./classes/Controller.js";

let model = new Model();
let view = new View();
new Controller(model, view);