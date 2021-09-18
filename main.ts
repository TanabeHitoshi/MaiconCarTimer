input.onButtonPressed(Button.A, function () {
    state_1 = 9
})
input.onButtonPressed(Button.B, function () {
    state_2 = 9
})
let Time100_2 = 0
let Time10_2 = 0
let Time1s_2 = 0
let Time10s_2 = 0
let Time1m_2 = 0
let Time10m_2 = 0
let Time_2 = 0
let Time100_1 = 0
let Time10_1 = 0
let Time1s_1 = 0
let Time10s_1 = 0
let Time1m_1 = 0
let Time10m_1 = 0
let Time_1 = 0
let state_2 = 0
let state_1 = 0
state_1 = 1
state_2 = 1
basic.forever(function () {
    Time_1 = input.runningTime()
    serial.writeValue("Time_1", Time_1)
    // 10分の計算
    Time10m_1 = Math.trunc(Time_1 / 600000)
    Time_1 = Time_1 - Time10m_1 * 600000
    // 10分の計算
    Time1m_1 = Math.trunc(Time_1 / 60000)
    Time_1 = Time_1 - Time1m_1 * 60000
    // 10秒の計算
    Time10s_1 = Math.trunc(Time_1 / 10000)
    Time_1 = Time_1 - Time10s_1 * 10000
    // 1秒の計算
    Time1s_1 = Math.trunc(Time_1 / 1000)
    Time_1 = Time_1 - Time1s_1 * 1000
    // /10秒の計算
    Time10_1 = Math.trunc(Time_1 / 100)
    Time_1 = Time_1 - Time10_1 * 100
    // /100秒の計算
    Time100_1 = Math.trunc(Time_1 / 10)
    serial.writeLine(">" + "1" + ("" + state_1) + " " + ("" + Time10m_1) + ("" + Time1m_1) + ":" + ("" + Time10s_1) + ("" + Time1s_1) + "'" + ("" + Time10_1) + ("" + Time100_1))
    Time_2 = input.runningTime()
    serial.writeValue("Time_2", Time_2)
    // 10分の計算
    Time10m_2 = Math.trunc(Time_2 / 600000)
    Time_2 = Time_2 - Time10m_2 * 600000
    // 10分の計算
    Time1m_2 = Math.trunc(Time_2 / 60000)
    Time_2 = Time_2 - Time1m_2 * 60000
    // 10秒の計算
    Time10s_2 = Math.trunc(Time_2 / 10000)
    Time_2 = Time_2 - Time10s_2 * 10000
    // 1秒の計算
    Time1s_2 = Math.trunc(Time_2 / 1000)
    Time_2 = Time_2 - Time1s_2 * 1000
    // /10秒の計算
    Time10_2 = Math.trunc(Time_2 / 100)
    Time_2 = Time_2 - Time10_2 * 100
    // /100秒の計算
    Time100_2 = Math.trunc(Time_2 / 10)
    serial.writeLine(">" + "2" + ("" + state_2) + " " + ("" + Time10m_2) + ("" + Time1m_2) + ":" + ("" + Time10s_2) + ("" + Time1s_2) + "'" + ("" + Time10_2) + ("" + Time100_2))
})
