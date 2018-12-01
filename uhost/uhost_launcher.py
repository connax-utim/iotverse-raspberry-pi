"""Simplest realization of Uhost"""
import logging
import sys
from uhost import uhost
from uhost.utilities.exceptions import UtimConnectionException, UtimInitializationError
import paho.mqtt.client as mqtt
import threading

logging.basicConfig(format='[%(asctime)s] %(filename)30s %(threadName)15s %(lineno)5s'
                                  ' %(funcName)30s: %(message)s', level=logging.DEBUG)

def catch_message():
	def on_connect(client, userdata, flags, rc):
		logging.info("Connected with result code "+str(rc))
		client.subscribe("back")

	def on_message(client, userdata, msg):
		reply = msg.payload.decode().split()
		logging.info(reply)
		with open('addresses/node_{}'.format(reply[0][:8]), 'w+') as f:
			f.write(reply[1])
			logging.info('Writing address to file')
		
	client = mqtt.Client()
	client.connect('localhost',1883,60)

	client.on_connect = on_connect
	client.on_message = on_message

	client.loop_forever()

def main():	
	uh1 = None
	try:
		uh1 = uhost.Uhost()
		logging.info('tried to run')
		uh1.run()

	except UtimConnectionException as er:
		logging.error(er)
		print('Connection exception')

	except UtimInitializationError as er:
		logging.error(er)
		print('Invalid UHOST_MASTER_KEY')

	except (KeyboardInterrupt, EOFError):
		logging.info('Program interrupted')
		print('Program interrupted')

	finally:
		if uh1:
			uh1.stop()
			print('stopping')

	print('exit')
	sys.exit(0)


if __name__ == '__main__':
	try:
		c = threading.Thread(name = 'catch', target = catch_message)
		m = threading.Thread(name = 'main', target = main)
		c.start()
		m.start()
	except:
		print("Error: unable to start thread")
