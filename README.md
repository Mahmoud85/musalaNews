# Musala news Project
This is a very small app Developed as part of Musala assessment for Me 'Mahmoud Fathy' as a senior Dev
Developing this app below is taken into consideration.
* Code is simple to enhance readability and trackability.
* Code structure taking inot consideration future extension.
* Advanced tools/ thrid party libraries are not used while not needed for Example axios and redux.

# About Musala news APP  project
The project is designed to meet the Assesment Criteria by Musala as below the below:
* The App retrieve data from news api , listing them and allow search
* The app includes second level page to show news item details
* The user can switch between two diffrent languages
* App adopt to device theme siwtching between dark and light thems
* App allow deep linking to open a specific news item in the news details page (it would be a better solution to have an api that retrieve single news item passing id to it, however I used an api that retrieve only news array so as a workaround , I looped on news array added ids and filtering to get single one for deep linking)
## TL;DR

To get started developing right away:

* install all project dependencies with `npm run setup`
* start the ios emulator with `npm run ios`
* to test ios deep linking `npm run test-dl-ios or npm run test-dl-android`
* app uses android NDK version `21.4.7075529`, if android failed due to not having this version on your local machine , you can go to `android/build.gradle` and replace the android NDK with the one on your local machine , for example my machine uses `20.1.5948944`


# @ By:
___  ___      _                               _  
|  \/  |     | |                             | | 
| .  . | __ _| |__  _ __ ___   ___  _   _  __| | 
| |\/| |/ _` | '_ \| '_ ` _ \ / _ \| | | |/ _` | 
| |  | | (_| | | | | | | | | | (_) | |_| | (_| | 
\_|  |_/\__,_|_| |_|_| |_| |_|\___/ \__,_|\__,_| 
                                                 
                                                 
   ______    _   _                               
   |  ___|  | | | |                              
   | |_ __ _| |_| |__  _   _                     
   |  _/ _` | __| '_ \| | | |                    
   | || (_| | |_| | | | |_| |                    
   \_| \__,_|\__|_| |_|\__, |                    
                        __/ |                    
@ Email:
## mahmoudfathy0@gmail.com
