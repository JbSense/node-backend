import Controller from '../services/Controller.js';

const json = {
	"from": "http://localhost:8080",
	"action": {
			"controller": "UserController",
			"method": "setUser",
			"params": {
				"name": "Sukuna",
				"last_name": "Ryomen"
			}
	}
}

const contro = new Controller(json.action)
console.log(contro.callMethod())