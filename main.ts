function Eteindre () {
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, index)
        basic.pause(150)
    }
    led.unplot(3, 4)
    led.unplot(4, 3)
    basic.pause(150)
    led.unplot(2, 4)
    led.unplot(4, 2)
}
function Allumer () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
        basic.pause(150)
    }
    led.plot(4, 3)
    led.plot(3, 4)
    basic.pause(150)
    led.plot(4, 2)
    led.plot(2, 4)
}
let index = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("Salut Cyril")
        basic.pause(120)
        for (let index = 0; index <= 10; index++) {
            basic.pause(120)
            basic.showNumber(10 - index)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index2 = 0; index2 < 10; index2++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(150)
            basic.clearScreen()
            basic.pause(150)
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        for (let index2 = 0; index2 < 3; index2++) {
            Allumer()
            Eteindre()
        }
    } else {
        basic.clearScreen()
    }
})
