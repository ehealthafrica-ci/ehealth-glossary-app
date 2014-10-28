"use strict";var glossaryApp=angular.module("glossaryApp",["ngStorage",function(){"9000"!==window.location.port&&appCacheNanny.start()}]);glossaryApp.service("glossaryData",["$http","$q","$localStorage",function(a,b,c){var d,e=a.jsonp("https://script.google.com/macros/s/AKfycbxTSor3m5TaU1dYEpoltOsFwatsr64Ap1YLLL-qzhvw_TKGyyJc/exec?callback=JSON_CALLBACK");return d=c.rawResponse?b.when(c.rawResponse):e,e.then(function(a){c.rawResponse=a}),function(){return d.then(function(a){return a.data.map(function(a){return{name:a[0],explanation:a[1],description:a[2]}})})}}]),glossaryApp.controller("GlossaryCtrl",["$scope","$http","glossaryData",function(a,b,c){c().then(function(b){a.terms=b},function(a){console.log("oops",a)})}]),glossaryApp.filter("rawHtml",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]),glossaryApp.filter("linkify",function(){return function(a){var b,c,d,e;return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,'<a href="$1" target="_blank">link</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,'$1<a href="http://$2" target="_blank">$2</a>'),e=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,b=b.replace(e,'<a href="mailto:$1">$1</a>')}});