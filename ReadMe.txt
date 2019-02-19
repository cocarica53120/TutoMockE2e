Web link of this tuto :
	https://blog.michalszalkowski.com/java-script/protractortest-simple-example-with-backend-mocking/


A/  ########################
Before starting tests
How to install nodejs/npm on CentOs 7
	https://linuxize.com/post/how-to-install-node-js-on-centos-7/
Then, install protractor globally:
		sudo npm install -g protractor

B/  ########################
To use webdriver, the version of chromedriver must the one which manage the version of the current chrome installed.


1/ To know the version of chrome installed, open chrome browser and go to "chrome://settings/help".
	Here it is "Version 68.0.3440.106 (Official Build) (64-bit)"

2/ To know the chromedriver version of th chrome installed on the machine, go to the following page 
	http://chromedriver.chromium.org/system/app/pages/search

2.1/ And type the version of chrome in search field.
	The response will give the chromeversion to download

	For example, for installed chrome version=65, the response gives 2.39 (ChromeDriver 2.36 Supports Chrome v63-65)
	For example, for installed chrome version=68, the response gives 2.40 (ChromeDriver 2.40 Supports Chrome v66-68)

As we are on version=68, use chromedriver version=2.40

3/ To update/start webdriver to chrome version=68 (It is the version we have currently),
	sudo webdriver-manager update --versions.chrome 2.40
	sudo webdriver-manager start --versions.chrome 2.40

4/ To verify, open a browser on localhost:4444/wd/hub and create a session with chrome.
	And it should open a session....

C/  ########################
To start application, 
	python -m SimpleHTTPServer 8900
To run tests, 
	protractor conf.js


