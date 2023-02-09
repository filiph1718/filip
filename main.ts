input.onButtonPressed(Button.A, function () {
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_EVT_ANY
    )
    basic.showString("" + (game.createSprite(2, 2)))
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    basic.pause(3)
    basic.showLeds(`
        . . # . .
        . . # # #
        . # # . .
        . # . . .
        # # # # #
        `)
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
})
basic.showLeds(`
    . . . . #
    . # # . #
    # # # # #
    # . # # .
    # . # . .
    `)
basic.showNumber(20)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        `)
    basic.showLeds(`
        . # . . #
        . # . . #
        . # . . #
        . # # # #
        . # . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # #
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # # .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . # #
        . . . # .
        . . # # .
        `)
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # . .
        # # . . .
        # # # # #
        `)
    basic.showArrow(ArrowNames.North)
})
