import Response from './Response.js';

// Controllers imports
import UserController from '../src/controllers/UserController.js';

class Controller {
    constructor(action) {
        this.controller = "new " + action.controller + "()";
        this.method = action.method;
        this.params = JSON.stringify(action.params);
    }

    callMethod() {
        try {
            return {
                status: 200,
                response: eval(this.controller + "." + this.method + "(" + this.params + ")")
            }
        } catch (error) {
            return {
                status: 400,
                error: "Bad request"
            }
        }
    }
}

export default Controller;