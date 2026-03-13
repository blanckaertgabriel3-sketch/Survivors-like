import Model from "./Model.js";
import View from "./View.js";
import Controller from "./Controller.js";

let model = new Model();
let view = new View();
new Controller(model, view);