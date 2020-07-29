# Museum API Plan

## Repo Structure

planning - Directory containing markdown file of project plan.

db - Directory containing connection.js, museumObjects.json, and seed.js files

models - Directory containing Object.js and Artist.js model files for db object documents.

routes - Directory containing objectRoutes.js file which describes api routes and responses. 

controllers - Directory containing controller.js with callback functions.

index.js - main file to run to interact with the api

## Development Plan

### Import Data
- Create connection, model, and seed files. 
- Read axios documentation
- Write and test connection to met api.

### Seed database
- Finish seed document and seed DB
- Test db to confirm all fields were imported correctly.
- Test db in Mongo using different search attributes.

### Write Routes
- Add controllers to controllers.js. Ideally use the same basic controllers for different routes. 
- Add routes to the routes.js file.

### Finish API

- Write index.js
- Test various routes using browser and postman.


## Routes and Methods

### URLs
- "/" - redirect to "/objects" url
- "/objects" - Lists all objects in the db. Search for objects using query strings to specify mutliple filters.
- ".../name" - Search object by name (ideally use contains name).
-".../department" - Show all departments. Search by specific department.
-".../category" - Show all categories. Search by specific category.
-".../medium" - Show all media. Search by medium.
- ".../featured" - Show featured objects or set object as featured in the collection.
-".../public" - Show all items in public domain.
-".../culture" - Show all cultures, search items by culture name.
-".../artist" - Show all artists, search items by artist.

### Methods

-GET - find all items that match specific url designation.
-GET /:val - find all items that match specific value. Value will be based on url
-GET with query strings - Search all items based on query strings.
-POST - Add a new item to the database
-PUT /featured - Update item to featured or not featured in the collection.
-PUT /public - Set or remove item from public domain. 
-Delete - Delete an item from the database. 

## Model attributes
Use the following from the api

### Object
isHighlight - featured item
accessionYear - year acquired
isPublicDomain - boolean
primaryImage - 
primaryImageSmall - Thumbnail image
additionalImages - array
department
objectName - object type
title - name
culture -
period - 
artistDisplayName - Artist's name
objectDate - approx date or range art was created.
medium - art medium
dimensions - 
country - country where art was created
classification - general term describing work
rightsAndReproduction - 
linkResource - link to met page for art piece

### Artist
artistDisplayName
artistDisplayBio
artistNationality
artistBeginDate
artistEndDate
artistGender
artistWikidata_URL
artistULAN_URL

