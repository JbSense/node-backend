import Response from './Response.js';

// Controllers imports
import UserController from '../src/controllers/UserController.js';

export default class Controller {
    constructor(action) {
        this.controller = action.controller
        this.method = action.method
        this.params = action.params
    }

    callMethod() {
        try {
            if(this.params != null) {
                return eval(`new ${this.controller}().${this.method}(${this.params})`)
            } else {
                return eval(`new ${this.controller}().${this.method}()`)
            }
        } catch(error) {
            return error
        }
    }
}