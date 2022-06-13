// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


// const jsonReq = {
//     "from": "http://localhost:8080",
//     "action": {
//         "controller": "",
//         "method": "",
//         "params": {}
//     }
// }

// function useController(controller, params) {
//     return "new " + controller + "(" + params + ")"
// }

// function useMethod(method, params) {
//     const controller = useController(controller, params)
//     return controller.method(params)
// }

// function buildResponse(req) {
//     var response = {
//         "status": 200,
//         "body": {
//             "message": "OK",
//             "data": req.body
//         }
//     }

//     return response
// }

// app.get('/', (req, res) => {
//     const result = buildResponse(req)
//     console.log(result)
//     res.send(result);
// })

// app.listen(3000, () => console.log('Server listening on port 3000'));



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