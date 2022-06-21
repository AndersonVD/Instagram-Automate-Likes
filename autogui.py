from posixpath import splitext
from time import sleep
import pyautogui
sleep(4)
i = 0
while i < 10:
    sleep(1)
    pyautogui.press('up')
    pyautogui.press('enter')
    i = i+1
