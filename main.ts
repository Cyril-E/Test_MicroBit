function Eteindre () {
    led.unplot(0, 0)
    basic.pause(150)
    led.unplot(1, 1)
    basic.pause(150)
    led.unplot(2, 2)
    basic.pause(150)
    led.unplot(3, 3)
    basic.pause(150)
    led.unplot(4, 4)
    basic.pause(150)
    led.unplot(3, 4)
    led.unplot(4, 3)
    basic.pause(150)
    led.unplot(2, 4)
    led.unplot(4, 2)
}
function Allumer () {
    led.plot(0, 0)
    basic.pause(150)
    led.plot(1, 1)
    basic.pause(150)
    led.plot(2, 2)
    basic.pause(150)
    led.plot(3, 3)
    basic.pause(150)
    led.plot(4, 4)
    basic.pause(150)
    led.plot(4, 3)
    led.plot(3, 4)
    basic.pause(150)
    led.plot(4, 2)
    led.plot(2, 4)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 3; index++) {
            Allumer()
            Eteindre()
        }
    } else if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 10; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(150)
            basic.clearScreen()
            basic.pause(150)
        }
    } else {
        led.unplot(2, 2)
    }
})
