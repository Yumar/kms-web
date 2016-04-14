(function () {
    'use strict';

    angular.module('kms.warning')
            .factory('warningSearch', function () {
                var serv = {
                    searchObservers:[],
                    search: null
                }
                
                serv.registerSearchObserver = function(callback){
                    this.searchObservers.push(callback);
                }
                
                serv.notifyObservers = function(){
                    this.searchObservers.forEach(function(callback){
                        callback(serv.search);
                    });
                }
                
                serv.fullTextSearch = function(text){
                    if(!this.search){
                       this.search = {}; 
                    }
                    this.search.text = text;
                    this.notifyObservers();
                }
            })
})();

