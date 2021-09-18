let Time100_1 = 0
let Time10_1 = 0
let Time1s_1 = 0
let Time10s_1 = 0
let Time1m_1 = 0
let Time10m_1 = 0
let Time_1 = 0
let Time_2 = 0
let Time10m_2 = 0
let Time1m_2 = 0
let Time10s_2 = 0
let Time1s_2 = 0
let Time10_2 = 0
let Time100_2 = 0
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
    // /109秒の計算
    Time100_1 = Math.trunc(Time_1 / 10)
    // Time_12 = Time_1 % 1000
    // Time10_1 = int(Time_12 / 100)
    // Time100_1 = int(Time_12 / 10) - Time10_1 * 10
    // Time10m_1 = int(Time_1 / 600000)
    // Time1m_1 = int(Time_1 / 60000) - Time10m_1 * 10
    // Time1s_1 = int(Time_1 / 1000)
    // Time10s_1 = int(Time1s_1 / 10)
    serial.writeValue("Time10m_1", Time10m_1)
    serial.writeValue("Time1m_1", Time1m_1)
    serial.writeLine(">" + "1" + "1" + " " + ("" + Time10m_1) + ("" + Time1m_1) + ":" + ("" + Time10s_1) + ("" + Time1s_1) + "'" + ("" + Time10_1) + ("" + Time100_1))
})
