# SeniorDesignMiniProject
Front-end (React-native) By Wooyoung Cho
Backend by Nirma
## Design Decisions
### Front End
I have made my program read barcode automatically without taking a photo. The major reason behind this decision is that using onGooglevision to read barcode would often cause the app to crash. I've recently found out that googlevision has its own documentation and usage that I missed out on: https://developers.google.com/ml-kit/vision/barcode-scanning/android. This decision could be overruled in the near future.

As an addition. I decided that the photo taken through the app should be saved in memory instead of cache. Hence, I have used the camera roll package in order to save my photos:
https://github.com/react-native-cameraroll/react-native-cameraroll.

The videos and photos of the app can be found in the screenshots and Videos folder of this repo
