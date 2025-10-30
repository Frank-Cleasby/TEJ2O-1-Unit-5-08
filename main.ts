/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Frank
 * Created on: Oct 2025
 * This program moves a cool car
*/

// varables
let distanceOfObstacle: number = 0

// clean
basic.clearScreen()
basic.showIcon(IconNames.Giraffe)

// car start
while (true) {
    distanceOfObstacle = sonar.ping(
        DigitalPin.P12, 
        DigitalPin.P13, 
        PingUnit.Centimeters)
    if (distanceOfObstacle > 10) {
        robotbit.StpCarMove(10, 48)
        distanceOfObstacle = sonar.ping(
            DigitalPin.P12,
            DigitalPin.P13,
            PingUnit.Centimeters)
    }
    basic.pause(1000)
    robotbit.StpCarMove(-10, 48)
    robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
}
