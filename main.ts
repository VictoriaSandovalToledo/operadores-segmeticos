let numero1 = 0
let numero2 = 0
input.onButtonPressed(Button.A, function () {
    numero1 = randint(0, 10)
    basic.showNumber(numero1)
    basic.showString("+")
    numero2 = randint(0, 10)
    basic.showNumber(numero2)
    basic.showString("=")
    basic.showNumber(numero1 + numero2)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    numero1 = randint(0, 10)
    basic.showNumber(numero1)
    basic.showString("°C")
    basic.showString("=")
    basic.showNumber(numero1 * (1.8 + 32))
    basic.showString("°F")
    basic.clearScreen()
})
