define({ "api": [
  {
    "type": "post",
    "url": "/artists",
    "title": "Add a new artist.",
    "name": "add",
    "group": "Artists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns successfully posted information.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/artists",
          "content": "Request Body:\n{\n    \"name\": \"Mike Visser\",\n    \"bio\": \"Just the Best y'all.\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1983-03-22T00:00:00.000Z\",\n    \"gender\": \"Male\"\n  }\n\nSuccess Response: \n{\n    \"_id\": \"5f21dbc5f11c0750d1fedd1b\",\n    \"name\": \"Mike Visser\",\n    \"bio\": \"Just the Best y'all.\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1983-03-22T00:00:00.000Z\",\n    \"gender\": \"Male\",\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "delete",
    "url": "/artists/:id",
    "title": "Delete an artist.",
    "name": "delete",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The database ID of the artist to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns the deleted artist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/artists/5f21dbc5f11c0750d1fedd1b",
          "content": "Success Response: \n{\n    \"_id\": \"5f21dbc5f11c0750d1fedd1b\",\n    \"name\": \"Mike Visser\",\n    \"bio\": \"Just the Best y'all. No really, the best!\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1983-03-22T00:00:00.000Z\",\n    \"gender\": \"Male\",\n    \"wikiUrl\": \"\",\n    \"UlanUrl\": \"\",\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "get",
    "url": "/artists/:field/:query",
    "title": "Show artists that match a field query.",
    "name": "searchByField",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "field",
            "description": "<p>The name of the field to be searched</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The field option to isolate.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns all matching objects in json format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/artists/nationality/American",
          "content": "Success Response: \n{\n    \"_id\": \"5f21b4df830211fe7916a251\",\n    \"name\": \"Reginald Marsh\",\n    \"bio\": \"American, Paris 1898–1954 Dorset, Vermont\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1898-01-01T00:00:00.000Z\",\n    \"deathDate\": \"1954-01-01T00:00:00.000Z\",\n    \"gender\": \"\",\n    \"wikiUrl\": \"https://www.wikidata.org/wiki/Q7308806\",\n    \"UlanUrl\": \"http://vocab.getty.edu/page/ulan/500016727\",\n    \"__v\": 0\n  },\n  {\n    \"_id\": \"5f21b4df830211fe7916a250\",\n    \"name\": \"Meyer Woolens, Inc.\",\n    \"bio\": \"\",\n    \"nationality\": \"American\",\n    \"birthDate\": null,\n    \"deathDate\": null,\n    \"gender\": \"\",\n    \"wikiUrl\": \"\",\n    \"UlanUrl\": \"\",\n    \"__v\": 0\n  },\n  ...",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "get",
    "url": "/artists/name/:name",
    "title": "Search artists by name.",
    "name": "searchByName",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>The name or partial name of the artist (case insensitive).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns all matching objects in json format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/artists/name/mike",
          "content": "Success Response: \n{\n    \"_id\": \"5f21dbc5f11c0750d1fedd1b\",\n    \"name\": \"Mike Visser\",\n    \"bio\": \"Just the Best y'all.\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1983-03-22T00:00:00.000Z\",\n    \"gender\": \"Male\",\n    \"wikiUrl\": \"\",\n    \"UlanUrl\": \"\",\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "get",
    "url": "/artists",
    "title": "Show all artists",
    "name": "show",
    "group": "Artists",
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "put",
    "url": "/artists/:id",
    "title": "Update an existing artist.",
    "name": "update",
    "group": "Artists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The database id of the artist to update.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns updated artist object.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/artist/5f21dbc5f11c0750d1fedd1b",
          "content": "Request Body:\n{\n\"bio\": \"Just the Best y'all. No really, the best!\"\n}\n\nSuccess Response: \n{\n    \"_id\": \"5f21dbc5f11c0750d1fedd1b\",\n    \"name\": \"Mike Visser\",\n    \"bio\": \"Just the Best y'all. No really, the best!\",\n    \"nationality\": \"American\",\n    \"birthDate\": \"1983-03-22T00:00:00.000Z\",\n    \"gender\": \"Male\",\n    \"wikiUrl\": \"\",\n    \"UlanUrl\": \"\",\n    \"__v\": 0\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/artistRoutes.js",
    "groupTitle": "Artists"
  },
  {
    "type": "post",
    "url": "/objects/",
    "title": "Add a new Art object",
    "name": "add",
    "group": "Objects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API will return the new object in json format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/objects",
          "content": "Request Body:\n{\n\t\"featured\" : \"false\",\n\t\"yearAcquired\" : \"2020\",\n\t\"isPublicDomain\" : false,\n\t\"primaryImageSmall\" : \"\",\n\t\"department\" : \"Paintings\",\n\t\"objectType\" : \"Painting\",\n\t\"title\" : \"Mike's Test Painting\",\n\t\"artist\" : \"Mike Visser\",\n\t\"dateCreated\" : \"1936\",\n\t\"medium\" : \"Finger Paints\",\n\t\"dimensions\" : \"18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)\",\n\t\"category\" : \"Paintings\",\n\t\"rights\" : \"© Mike Visser\"\n    }\nSuccess Response: \n{\n\t\"_id\" : ObjectId(\"5f21c8c3e096e928e1ccfd93\"),\n\t\"featured\" : \"false\",\n\t\"yearAcquired\" : \"2020\",\n\t\"isPublicDomain\" : false,\n\t\"primaryImageSmall\" : \"\",\n\t\"department\" : \"Paintings\",\n\t\"objectType\" : \"Painting\",\n\t\"title\" : \"Mike's Test Painting\",\n\t\"artist\" : \"Mike Visser\",\n\t\"dateCreated\" : \"1936\",\n\t\"medium\" : \"Finger Paints\",\n\t\"dimensions\" : \"18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)\",\n\t\"category\" : \"Paintings\",\n\t\"rights\" : \"© Mike Visser\",\n\t\"__v\" : 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "delete",
    "url": "/objects/:id",
    "title": "Delete an object",
    "name": "delete",
    "group": "Objects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The database ID of the object you are updating.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns deleted object in json format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/objects/5f21c8c3e096e928e1ccfd93",
          "content": "Success Response: \n{\n\t\"_id\" : ObjectId(\"5f21c8c3e096e928e1ccfd93\"),\n\t\"additionalImages\" : [ ],\n\t\"featured\" : \"false\",\n\t\"yearAcquired\" : \"2020\",\n\t\"isPublicDomain\" : false,\n\t\"primaryImage\" : \"\",\n\t\"primaryImageSmall\" : \"\",\n\t\"department\" : \"Paintings\",\n\t\"objectType\" : \"Painting\",\n\t\"title\" : \"Mike's Test Painting\",\n\t\"culture\" : \"\",\n\t\"period\" : \"\",\n\t\"artist\" : \"Mike Visser\",\n\t\"dateCreated\" : \"1936\",\n\t\"medium\" : \"Mud\",\n\t\"dimensions\" : \"18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)\",\n\t\"country\" : \"\",\n\t\"category\" : \"Paintings\",\n\t\"rights\" : \"© Mike Visser\",\n\t\"infoLink\" : \"\",\n    \"__v\" : 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/objects/:field/:query",
    "title": "Show objects that match a field query.",
    "name": "searchByField",
    "group": "Objects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "field",
            "description": "<p>The field you would like to search within.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "query",
            "description": "<p>The option from the field options list you would like to isolate.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>objects which match the query.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/objects/department/photographs",
          "content": "Success Response: \n{\n    \"additionalImages\": [\n      \n    ],\n    \"_id\": \"5f21b4de830211fe7916a0d0\",\n    \"featured\": \"false\",\n    \"yearAcquired\": \"1997\",\n    \"isPublicDomain\": false,\n    \"primaryImage\": \"\",\n    \"primaryImageSmall\": \"\",\n    \"department\": \"Photographs\",\n    \"objectType\": \"Photograph\",\n    \"title\": \"H.W. Reitz, Architect\",\n    \"culture\": \"\",\n    \"period\": \"\",\n    \"artist\": \"Werner Mantz\",\n    \"dateCreated\": \"1927\",\n    \"medium\": \"Gelatin silver print\",\n    \"dimensions\": \"23.5 x 17.5 cm (9 1/4 x 6 7/8 in. )\",\n    \"country\": \"\",\n    \"category\": \"Photographs\",\n    \"rights\": \"© 2020 Artists Rights Society (ARS), New York\",\n    \"infoLink\": \"\",\n    \"__v\": 0\n  },\n  ...",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/objects",
    "title": "Show all objects",
    "name": "show",
    "group": "Objects",
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/objects/featured",
    "title": "Show featured objects",
    "name": "showFeatured",
    "group": "Objects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "all",
            "description": "<p>all objects with featured currently set to true</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/objects/:field",
    "title": "Show a list of all possible options for the searched field.",
    "name": "showList",
    "group": "Objects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "field",
            "description": "<p>The object field you would like to query.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "Queried_Field",
            "description": "<p>Array of possible options.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/objects/department",
          "content": "Success Response: \n[\n  \"Egyptian Art\",\n  \"Greek and Roman Art\",\n  \"Drawings and Prints\",\n  \"Modern and Contemporary Art\",\n  \"Islamic Art\",\n  \"Arts of Africa, Oceania, and the Americas\",\n  \"European Sculpture and Decorative Arts\",\n  \"The American Wing\",\n  \"Photographs\",\n  \"Asian Art\",\n  \"Costume Institute\",\n  \"Robert Lehman Collection\",\n  \"Arms and Armor\",\n  \"Musical Instruments\",\n  \"Medieval Art\",\n  \"Ancient Near Eastern Art\",\n  \"European Paintings\",\n  \"The Cloisters\",\n  \"Paintings\"\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "get",
    "url": "/objects/public",
    "title": "Show all objects currently in the public domain",
    "name": "showPublic",
    "group": "Objects",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "all",
            "description": "<p>Json objects with public set to true</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  },
  {
    "type": "put",
    "url": "/objects/:id",
    "title": "Update an existing object",
    "name": "update",
    "group": "Objects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>The database ID of the object you are updating.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "All",
            "description": "<p>API returns updated object in json format.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sample URL: http://domain/objects/5f21c8c3e096e928e1ccfd93",
          "content": "Request Body:\n{\n\"medium\" : \"Mud\"\n}\n\nSuccess Response: \n{\n\t\"_id\" : ObjectId(\"5f21c8c3e096e928e1ccfd93\"),\n\t\"additionalImages\" : [ ],\n\t\"featured\" : \"false\",\n\t\"yearAcquired\" : \"2020\",\n\t\"isPublicDomain\" : false,\n\t\"primaryImage\" : \"\",\n\t\"primaryImageSmall\" : \"\",\n\t\"department\" : \"Paintings\",\n\t\"objectType\" : \"Painting\",\n\t\"title\" : \"Mike's Test Painting\",\n\t\"culture\" : \"\",\n\t\"period\" : \"\",\n\t\"artist\" : \"Mike Visser\",\n\t\"dateCreated\" : \"1936\",\n\t\"medium\" : \"Mud\",\n\t\"dimensions\" : \"18.9 x 23.7 cm (7 7/16 x 9 5/16 in.)\",\n\t\"country\" : \"\",\n\t\"category\" : \"Paintings\",\n\t\"rights\" : \"© Mike Visser\",\n\t\"infoLink\" : \"\",\n    \"__v\" : 0\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/objectRoutes.js",
    "groupTitle": "Objects"
  }
] });
