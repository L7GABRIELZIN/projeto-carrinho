input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
})
let umidade = 0
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    let leiturasolo = 0
    umidade = pins.digitalReadPin(DigitalPin.P1)
    if ((0 as any) > (1000 as any)) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else if (leiturasolo > 650) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(2000)
    }
})
