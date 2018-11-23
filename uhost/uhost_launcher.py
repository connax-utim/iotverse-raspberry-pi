"""Simplest realization of Uhost"""
import logging
import sys
from uhost import uhost
from uhost.utilities.exceptions import UtimConnectionException, UtimInitializationError

logging.basicConfig(format='[%(asctime)s] %(filename)30s %(threadName)15s %(lineno)5s'
                           ' %(funcName)30s: %(message)s', level=logging.DEBUG)     

def main():
    uh1 = None
    try:
        uh1 = uhost.Uhost()
        uh1.run()

    except UtimConnectionException as er:
        logging.error(er)

    except UtimInitializationError as er:
        logging.error(er)
        print('Invalid UHOST_MASTER_KEY')

    except (KeyboardInterrupt, EOFError):
        logging.info('Program interrupted')
        print('Program interrupted')

    finally:
        if uh1:
            uh1.stop()

        sys.exit(0)


if __name__ == '__main__':
    main()
