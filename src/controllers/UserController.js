class UserController {
    setUser(data) {
        var name = data.name
        var last_name = data.last_name

        return "Nome: " + name + " " + last_name
    }
}

export default UserController;