import Response from './Response.js';

// Controllers imports
import UserController from '../src/controllers/UserController.js';

export default class Controller {
    constructor(action) {
        this.controller = action.controller
        this.method = action.method
        this.params = JSON.stringify(action.params)
    }

    async callMethod() {
        try {
            if(this.params != {}) {
                return {
                    data: await eval(`new ${this.controller}().${this.method}(${this.params})`),
                    error: null
                }
            } else {
                return {
                    data: await eval(`new ${this.controller}().${this.method}()`),
                    error: null
                }
            }
        } catch(error) {
            return {
                data: null,
                error: error.message
            }
        }
    }
}