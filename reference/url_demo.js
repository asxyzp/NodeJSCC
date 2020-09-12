/*
    Understanding URL module of OS
    Created by Aashish Loknath Panigrahi (@asxyzp)
*/
const url = require('url');

//Creates a new URL object
const newURL = new URL('https://asxyzp.ml:8080/projects.html?year=2020&status=active');

//URL object
console.log(newURL);

//Getting the URL Hyperlink Reference (HREF)
console.log('URL : '+newURL.href);
console.log('URL : '+newURL.toString());

//Getting protocol
console.log('PROTOCOL : '+newURL.protocol);

//Getting host
console.log('HOST : '+newURL.host);

//Getting hostname
console.log('HOSTNAME : '+newURL.hostname);

//Getting port
console.log('PORT : '+newURL.port);

//Getting path name
console.log('PATH NAME : '+newURL.pathname);

//Getting query string
console.log('QUERY SEARCH STRING : '+newURL.search);

//Getting query parameters
console.log('QUERY SEARCH PARAMETERS : '+newURL.searchParams);
console.log('VALUE SEARCH PARAMETER : '+newURL.searchParams.get('year'));
console.log('STATUS SEARCH PARAMETER : '+newURL.searchParams.get('status'));

//Sorting out query parameters
newURL.searchParams.sort()
console.log(newURL.searchParams);

//Adding new Parameters dynamically
newURL.searchParams.append('type','web');
console.log(newURL.searchParams);

//Looping through search parameters
newURL.searchParams.forEach((value,name)=>{
    console.log(`${name}:${value}`);
});