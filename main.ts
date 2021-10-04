let luz = 0
basic.showIcon(IconNames.Diamond)
basic.pause(2000)
basic.forever(function () {
    luz = input.lightLevel()
    if (luz < 100) {
        basic.showString("ON")
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        basic.showString("OFF")
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
