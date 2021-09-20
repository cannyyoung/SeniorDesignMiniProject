# SeniorDesignMiniProject
Front-end (React-native) By Wooyoung Cho  
Backend by Nirmal
## Design Decisions

### Front End
I have made my program read barcode automatically without taking a photo. The major reason behind this decision is that using onGooglevision to read barcode would often cause the app to crash. I've recently found out that googlevision has its own documentation and usage that I missed out on: https://developers.google.com/ml-kit/vision/barcode-scanning/android. This decision could be overruled in the near future.  

As an addition. I decided that the photo taken through the app should be saved in memory instead of cache. Hence, I have used the camera roll package in order to save my photos:
https://github.com/react-native-cameraroll/react-native-cameraroll.

The videos and photos of the app can be found in the **Screenshots and Videos** folder of this repo
### Backend End

I have made an api that takes the barcode and uses the url and api key to search for the specific items and their nutrition label. ComponentDidMount() housed the fetch function and converting into a json file that is Javascript friendly to read proper values from the data. Render function reads the proper data from the object, item. In the end, the code was unable to properly read the data and output necessary value. alternative, methds such as axios and ohter compnents under the Compnents class but none were implemented successfully.



## Codes/Sites referenced:  
https://gist.github.com/goodpic/f1ba553d85f96c76b6b2992faf037d87  
https://blog.jscrambler.com/how-to-use-react-native-camera  
https://github.com/react-native-cameraroll/react-native-cameraroll  
https://www.fullstacklabs.co/blog/react-native-camera  
https://github.com/react-native-google-signin/google-signin
