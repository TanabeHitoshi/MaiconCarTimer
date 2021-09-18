Time_2 = 0
Time100_1 = 0
Time10_1 = 0
Time1s_1 = 0
Time10s_1 = 0
Time1m_1 = 0
Time10m_1 = 0
Time_1 = 0
Time10m_2 = 0
Time1m_2 = 0
Time10s_2 = 0
Time1s_2 = 0
Time10_2 = 0
Time100_2 = 0
Time10m_22 = 0
Time1m_22 = 0
Time10s_22 = 0
Time1s_22 = 0
Time10_22 = 0
Time100_22 = 0

def on_forever():
    global Time_1, Time10m_1, Time1m_1, Time10s_1, Time1s_1, Time10_1, Time100_1, Time_2, Time10m_2, Time1m_2, Time10s_2, Time1s_2, Time10_2, Time100_2
    Time_1 = input.running_time()
    serial.write_value("Time_1", Time_1)
    # 10分の計算
    Time10m_1 = int(Time_1 / 600000)
    Time_1 = Time_1 - Time10m_1 * 600000
    # 10分の計算
    Time1m_1 = int(Time_1 / 60000)
    Time_1 = Time_1 - Time1m_1 * 60000
    # 10秒の計算
    Time10s_1 = int(Time_1 / 10000)
    Time_1 = Time_1 - Time10s_1 * 10000
    # 1秒の計算
    Time1s_1 = int(Time_1 / 1000)
    Time_1 = Time_1 - Time1s_1 * 1000
    # /10秒の計算
    Time10_1 = int(Time_1 / 100)
    Time_1 = Time_1 - Time10_1 * 100
    # /100秒の計算
    Time100_1 = int(Time_1 / 10)
    serial.write_line(">" + "1" + "1" + " " + ("" + str(Time10m_1)) + ("" + str(Time1m_1)) + ":" + ("" + str(Time10s_1)) + ("" + str(Time1s_1)) + "'" + ("" + str(Time10_1)) + ("" + str(Time100_1)))
    Time_2 = input.running_time()
    serial.write_value("Time_2", Time_2)
    # 10分の計算
    Time10m_2 = int(Time_2 / 600000)
    Time_2 = Time_2 - Time10m_2 * 600000
    # 10分の計算
    Time1m_2 = int(Time_2 / 60000)
    Time_2 = Time_2 - Time1m_2 * 60000
    # 10秒の計算
    Time10s_2 = int(Time_2 / 10000)
    Time_2 = Time_2 - Time10s_2 * 10000
    # 1秒の計算
    Time1s_2 = int(Time_2 / 1000)
    Time_2 = Time_2 - Time1s_2 * 1000
    # /10秒の計算
    Time10_2 = int(Time_2 / 100)
    Time_2 = Time_2 - Time10_2 * 100
    # /100秒の計算
    Time100_2 = int(Time_2 / 10)
    serial.write_line(">" + "2" + "1" + " " + ("" + str(Time10m_2)) + ("" + str(Time1m_2)) + ":" + ("" + str(Time10s_2)) + ("" + str(Time1s_2)) + "'" + ("" + str(Time10_2)) + ("" + str(Time100_2)))
basic.forever(on_forever)
