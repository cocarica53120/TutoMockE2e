exports.config = {
 
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
 
    rootElement: '[ng-app]',
 
    specs: [
        'app.spec.js'
    ],
 
    multiCapabilities: [
        //{browserName: 'firefox'},
        {browserName: 'chrome',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
            }
        }
    ],
 
    onPrepare: function () {
        //browser.get('http://localhost:63342/protractor/simple_mock/app/index.html');
        //browser.get('http://localhost:8900');
 
        // mock
//        browser.addMockModule('httpMocker', function() {
//            angular.module('httpMocker', ['ngMockE2E'])
//                .run(function($httpBackend) {
//                    $httpBackend.whenGET('data1.json').respond({"name": "Data from MOCK Json file"});
//                    $httpBackend.whenGET('data2.json').passThrough();
//                })
//        });
    }
};
