class UserController {
    setUser(user) {
        console.log(user.name)
        console.log(user.last_name)
        console.log("aqui")
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.last_name;
    }
}
