import Response from './Response.js';

// Controllers imports
import UserController from '../src/controllers/UserController.js';
import e from 'express';

class Controller {
    constructor(action) {
        this.controller = "";
        this.method = "";
        this.params = "";
    }

    setController(controller) {
        try {
            this.controller = eval("new " + controller + "()")
        } catch(error) {
            console.log(error);
        }
    }

    setMethod(method, params = null) {
        if(params != null) {
            this.method = method + "(" + JSON.stringify(params) + ")"
        } else {
            this.method = method + "()"
        }
    }

    callMethod() {
        // if(this.params != null) {
        //     return eval(this.controller + "." + this.method + "(" + JSON.stringify(this.params) + ")")
        // } else {
        //     return eval(this.controller + "." + this.method + "()")
        // }

        try {
            return eval(this.controller + "." + this.method)
        } catch(error) {
            console.log(error)
        }
    }
}

export default Controller;