let Time_1 = 0
let Time_12 = 0
let Time10_1 = 0
let Time100_1 = 0
let Time1s_1 = 0
let Time10s_1 = 0
basic.forever(function () {
    Time_1 = input.runningTime()
    serial.writeValue("Time_1", Time_1)
    Time_12 = Time_1 % 1000
    Time10_1 = Math.trunc(Time_12 / 100)
    Time100_1 = Math.trunc(Time_12 / 10) - Time10_1 * 10
    Time1s_1 = Math.trunc(Time_1 / 1000)
    Time10s_1 = Math.trunc(Time1s_1 / 10)
    serial.writeValue("Time/100", Time100_1)
    serial.writeValue("Time/10", Time10_1)
    serial.writeLine(">" + "1" + "1" + " " + Time10s_1 + Time1s_1)
})
