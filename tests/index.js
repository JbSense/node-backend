class Car {
    constructor() {
        this.model = "",
        this.year = 0
    }

    setModel(model) {
        this.model = model
    }

    setYear(year) {
        this.year = year
    }

    getCar() {
        console.log(`Car: ${this.model} - ${this.year}`)
    }
}

const classe = 'Car'
const method = 'getCar'

const car1 = eval(`new ${classe}()`)
// const car1 = new Car()
car1.setModel('X6')
car1.setYear(2022)
// car1.getCar()
car1 + '.' + method + '()'