var engine = require("./engine.js");
 
describe('simple test', function () {

    beforeEach(function () {
        browser.get('http://localhost:8900');
        // mock
        browser.addMockModule('httpMocker', function() {
            angular.module('httpMocker', ['ngMockE2E'])
                .run(function($httpBackend) {
                    $httpBackend.whenGET('data1.json').respond({"name": "Data from MOCK Json file"});
//                    $httpBackend.whenGET('data2.json').passThrough();

                    // const data2_error = [
                    //   {"id":1, "name":"Lorem 1"},
                    //   {"id":2, "name":"Lorem 2"},
                    //   {"id":3, "name":"Lorem 3"},
                    //   {"id":4, "name":"Lorem 4"},
                    //   {"id":5, "name":"Lorem 5"},
                    //   {"id":6, "name":"Lorem 6 error"}
                    // ];
                    // $httpBackend.whenGET('data2.json').respond(data2_error);
                    const data2 = [
                      {"id":1, "name":"Lorem 1"},
                      {"id":2, "name":"Lorem 2"},
                      {"id":3, "name":"Lorem 3"},
                      {"id":4, "name":"Lorem 4"},
                      {"id":5, "name":"Lorem 5"},
                      {"id":6, "name":"Lorem 6"}
                    ];
                    $httpBackend.whenGET('data2.json').respond(data2);})
        });

    });

    afterEach(() => {
        browser.removeMockModule('httpMocker');
    })
 
    it('static text', function () {
        engine.waitFor(by.id('pageTitle'));
        expect(element(by.id('pageTitle')).getText()).toEqual('Static Page Title');
    });
 
    it('dynamic text', function () {
        engine.waitFor(by.binding('dynamicPageTitle'));
        expect(element(by.binding('dynamicPageTitle')).getText()).toEqual('Dynamic Page Title');
    });
 
    it('json one object', function () {
        engine.waitFor(by.binding('data1'));
        expect(element(by.binding('data1')).getText()).toEqual('Data from MOCK Json file');
    });
 
    it('json list of objects', function () {
        const data2 = require('./data2.json');
        console.log('data2', data2);

        element.all(by.repeater('item in listData')).getText()
            .then(txt => console.log(txt));
        element.all(by.repeater('item in listData')).each((e,i) => {
            e.getText()
                .then(txt => console.log(`${i}:${JSON.stringify(txt)}`));
            expect(e.getText()).toEqual(`${data2[i].id} - ${data2[i].name}`);
        })

        expect(element.all(by.repeater('item in listData')).get(0).toString())
            .toEqual(({"id":1, "name":"Lorem 1"}).toString());
    });
});
