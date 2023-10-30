input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        fwdMotors.drive(fwdMotors.DrivingDirection.Forward, 100)
        basic.pause(2000)
        fwdMotors.servo1.fwdSetAngle(45)
        basic.pause(500)
        fwdMotors.servo1.fwdSetAngle(0)
        count += 1
    }
    fwdMotors.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
let count = 0
count = 0
fwdMotors.setupDriving(
fwdMotors.servo2,
fwdMotors.servo3,
0
)
fwdMotors.servo1.fwdSetAngle(0)
