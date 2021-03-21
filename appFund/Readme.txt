Installation on server :

Execute command: npm install

Technology used: 

.NET Core 3.1
Angular CLI: 11.2.5
Node: 14.16.0
OS: win32 x64

Architecture:

Front End : there is a layer for the frontend done with Angular 
Back End : there are several layer in the back end to access Data. It is divided on BL layer and DAL layer.
The data for the investments was mocked on a json file
This architecture is prepared to horizontal and vertical scaling.

Refactor :

As it is a POC/MVP done in one day and it is just a module inside of a bigger system,
this module needs connection with the user module, security module, logging module and
so others to work properly. There are many things to refactor, beginning with the way
the data is being load on the funding lists building some services for this loading,
building services for the validations, add more style in the pages, the validations
are just on the frontend and some of them also should be on the backend.
I would separate the back and the front in the solution doing the services atomics.
With this this Architecture we can take advantage of AWS, Azure cloud or any other 
cloud services. I also would introduce Cosmos DB to build the database and i would 
remove the mock data. This a summary to have a MVP working.
