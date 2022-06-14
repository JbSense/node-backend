import User from "../models/User.js";

export default class UserController {
    setUser(data) {
        var name = data.name
        var last_name = data.last_name

        return name + " " + last_name
    }

    async getUsers() {
        const result = await User.findAll()
        return {
            data: result[0].dataValues
        }
    }
}