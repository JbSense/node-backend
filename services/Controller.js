// Controllers imports
import UserController from '../src/controllers/UserController.js';

class Controller {
    constructor(action) {
        this.controller = eval("new " + action.controller + "()");
        this.method = action.method;
        this.params = JSON.stringify(action.params);
    }

    callMethod() {
        const comand = eval(this.controller + "." + this.method + "(" + this.params + ")")
        console.log(comand)
    }
}

export default Controller;