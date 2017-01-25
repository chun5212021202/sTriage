# sTriage
sTriage is an IoT application in order to computerize the tradiotional 「START」 procedure (Simple Triage Rapid Treatment), thas is, to use different color to discriminate level of trauma.

The adavantage of computerization of 「START」 is that the whole procedure would become more efficient. Through the power of cloud computing on sever side, this model could handle with big amount of data. On application side, sensors can automatically collect all kinds of physiological signals and communicate with server or other devices; this could lead to better arrangement.


The code includes three part: 

    APP on Android device developed using React Native
  
    SENSOR control using Mediatek LinkIt Smart 7688
  
    SERVER developed using express js
  

And the communication between 3 parts is roughly displayed as follow:
![alt tag](https://cloud.githubusercontent.com/assets/8232009/22285565/22455d8e-e327-11e6-88fc-3eb368a0bb89.PNG)


[NOTE]

The code here is just part of the whole project, so you might not able to run successfully.
Many other parts are needed including ExpressJS environment and React Native environment.
However, the code in this repository is all I've modified. Therefore, if you set up Reactive Native, Express JS, and LinkIt Smart 7688 Duo properly, you might get the expected result.


[DEMO]

![alt tag](https://cloud.githubusercontent.com/assets/8232009/22289698/fa48258a-e337-11e6-9cd7-1a6f702f66e0.jpg)!![alt tag](https://cloud.githubusercontent.com/assets/8232009/22289744/28661db4-e338-11e6-9076-26fe5591c796.jpg)
