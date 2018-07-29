define({ "api": [
  {
    "group": "List",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/get/tree/:listId",
    "title": "api for getting all items of list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of list whose items we want to fetch.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n\"error\": true,\n\"message\": \"Tree Found\",\n\"status\": 200,\n\"data\": [\n    {\n        \"id\": \"6Fb5MGDBL\",\n        \"name\": \"My second list\",\n        \"parentId\": null,\n        \"_w\": 0,\n        \"_id\": \"5b5c70428d8c474533ab1100\",\n        \"path\": \"\",\n        \"__v\": 0,\n        \"depth\": 0,\n        \"children\": [\n            {\n                \"id\": \"tCHY1Rbc\",\n                \"name\": \"second subitem\",\n                \"parentId\": \"5b5c70428d8c474533ab1100\",\n                \"_w\": 0,\n                \"_id\": \"5b5d860c6653d23b3a2dfea9\",\n                \"path\": \",5b5c70428d8c474533ab1100\",\n                \"__v\": 0,\n                \"depth\": 1,\n                \"children\": [\n                    {\n                        \"id\": \"WgBxVCKma\",\n                        \"name\": \"second subsubitem\",\n                        \"parentId\": \"5b5d860c6653d23b3a2dfea9\",\n                        \"_w\": 0,\n                        \"_id\": \"5b5d99006653d23b3a2dfeac\",\n                        \"path\": \",5b5c70428d8c474533ab1100,5b5d860c6653d23b3a2dfea9\",\n                        \"__v\": 0,\n                        \"depth\": 2\n                    }\n                ]\n            },\n        ]\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   \n{\n    \"error\": true,\n    \"message\": error occurred\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/edList.js",
    "groupTitle": "List",
    "name": "GetApiV1ListsGetTreeListid"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/create",
    "title": "api to create todolist.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>ToDoList Name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"Create TO-Do-List\",\n    \"status\": 200,\n    \"data\": {\n        \"id\": \"6Fb5MGDBL\",\n        \"name\": \"My second list\",\n        \"_id\": \"5b5c70428d8c474533ab1100\",\n        \"parentId\": null,\n        \"_w\": 0,\n        \"path\": \"\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   \n{\n    \"error\": true,\n    \"message\": \"Failed to create new list\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/edList.js",
    "groupTitle": "List",
    "name": "PostApiV1ListsCreate"
  },
  {
    "group": "List",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/create/items/:IdOfParent",
    "title": "api to create items of list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "IdOfParent",
            "description": "<p>Parent Id. (url params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"Create TO-Do-List\",\n    \"status\": 200,\n    \"data\": {\n        \"id\": \"WgBxVCKma\",\n        \"name\": \"second subsubitem\",\n        \"_id\": \"5b5d99006653d23b3a2dfeac\",\n        \"parentId\": \"5b5d860c6653d23b3a2dfea9\",\n        \"_w\": 0,\n        \"path\": \",5b5c70428d8c474533ab1100,5b5d860c6653d23b3a2dfea9\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   \n{\n    \"error\": true,\n    \"message\": \"Failed to create new list\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/edList.js",
    "groupTitle": "List",
    "name": "PostApiV1ListsCreateItemsIdofparent"
  }
] });
