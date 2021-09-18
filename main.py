Time_1 = 0
Time1s_1 = 0
Time10s_1 = 0

def on_forever():
    global Time_1, Time1s_1, Time10s_1
    Time_1 = input.running_time()
    serial.write_value("Time_1", Time_1)
    Time1s_1 = int(Time_1 / 1000)
    Time10s_1 = int(Time1s_1 / 10)
    serial.write_value("Time10s", Time10s_1)
    serial.write_value("Time1s", Time1s_1)
    serial.write_line(">" + "1" + "1" + " " + str(Time10s_1))
basic.forever(on_forever)
