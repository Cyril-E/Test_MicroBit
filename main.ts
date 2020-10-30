input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
})
