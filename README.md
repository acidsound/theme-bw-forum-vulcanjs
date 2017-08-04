# whitecat-vulcan

WhiteCat theme for vulcanJS

# Prerequisite
install Meteor

# How to install
* clone ```vulcan``` and ```whitecat``` repository side by side.
```
$ https://github.com/VulcanJS/Vulcan.git
$ https://github.com/acidsound/whitecat-vulcan.git
```
* copy ```sample_setting.json``` to ```settings.json``` into the Vulcan directory.
```
cd whitecat-vulcan
cp sample_settings.json ../vulcan/settings.json
```
* in the ```vulcan``` directory. install npm packges
```
meteor npm install
```
* set the ```METEOR_PACKAGE_DIRS```
```
export METEOR_PACKAGE_DIRSMETEOR_PACKAGE_DIRS="<absolute parent directory path of whitecat repo>:<absolute path of vulcan js>/packages"
```
for example.
```
export METEOR_PACKAGE_DIRS="/Users/my/meteor:/Users/my/meteor/vulcan/packages"
```
* run ```vulcan``` project
```
meteor npm start
```
or if you use the windows.
```
meteor run --settings settings.json
```

# Customization
TBD