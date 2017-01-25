from pyfirmata import Arduino, util
import time
import requests
 
board = Arduino('/dev/ttyS0')
print "Start blinking D13"
print len(board.analog)

it = util.Iterator(board)
it.start()

analog_0 = board.get_pin('a:0:i')
board.analog[0].enable_reporting()
print board.analog[0].read()
pulseTimeList = []

BPM = '???'
pulse = False
i=0
while True:
	
	if i != 0:
		a = board.analog[0].read()
		#print type(a)
		#print a
		a *= 10
		if pulse == False:
			if 0<=a and a<=1 :
				print "..>1"
			if 1<a and a<=2 :
				print "....>2"
			if 2<a and a<=3 :
				print "......>3"
			if 3<a and a<=4 :
				print "........>4"
			if 4<a and a<=5 :
				print "..........>5"
			if 5<a and a<=6 :
				print "............>6"
			if 6<a and a<=7:
				print "..............>7"
			if 7<a and a<=8 :
				print "................>8"
			if 8<a and a<=9 :
				print "..................>9"
			if 9<a and a<=10 :
				pulse = True
				pulseTime = time.time()
				pulseTimeList.append(pulseTime)
				if len(pulseTimeList)>10:
					averageTime = (pulseTimeList[-1]-pulseTimeList[-11]) / 10
					BPM = 60.0 / averageTime
					requests.post('http://104.199.132.3/pulse', data={'BPM':BPM})
				print ".....................>10"

		else:
			if 9<a and a<=10 :
				print ".....................>10"

			else:
				print "..............................>BPM:" , BPM
				if 0<=a and a<=1 :
					pulse = False
					print "..>1"
				if 1<a and a<=2 :
					pulse = False
					print "....>2"
				if 2<a and a<=3 :
					pulse = False
					print "......>3"
				if 3<a and a<=4 :
					pulse = False
					print "........>4"
				if 4<a and a<=5 :
					pulse = False
					print "..........>5"
				if 5<a and a<=6 :
					pulse = False
					print "............>6"
				if 6<a and a<=7:
					pulse = False
					print "..............>7"
				if 7<a and a<=8 :
					pulse = False
					print "................>8"
				if 8<a and a<=9 :
					pulse = False
					print "..................>9"
				
		
	#print i,analog_0.read()
	i+=1
	time.sleep(0.1)
