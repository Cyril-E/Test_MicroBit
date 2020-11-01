def Eteindre():
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
def Allumer():
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
index = 0

def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_string("Salut Cyril")
        basic.pause(120)
        for index2 in range(11):
            basic.pause(120)
            basic.show_number(10 - index2)
    elif input.button_is_pressed(Button.B):
        for index22 in range(10):
            basic.show_icon(IconNames.HEART)
            basic.pause(150)
            basic.clear_screen()
            basic.pause(150)
    elif input.button_is_pressed(Button.AB):
        for index23 in range(3):
            Allumer()
            Eteindre()
    else:
        basic.clear_screen()
basic.forever(on_forever)
