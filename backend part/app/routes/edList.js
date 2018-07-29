const express = require('express');
const EdListConfig = require('../../config/EdlistConfig');
const listController = require("./../../app/controllers/listController");
const app = express();
// const auth=require('../middlewares/Authorization');

module.exports.setRouter = (app) => {

    let baseUrl = `${EdListConfig.apiVersion}/lists`;

    app.post(`${baseUrl}/create`,listController.createList);
    /**
     * @apiGroup List
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/create api to create todolist.
     
     
     * @apiParam {string} listName  ToDoList Name. (body params) (required)
   
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
     {
    "error": false,
    "message": "Create TO-Do-List",
    "status": 200,
    "data": {
        "id": "6Fb5MGDBL",
        "name": "My second list",
        "_id": "5b5c70428d8c474533ab1100",
        "parentId": null,
        "_w": 0,
        "path": "",
        "__v": 0
    }
}
 @apiErrorExample {json} Error-Response:
    *
   
{
    "error": true,
    "message": "Failed to create new list",
    "status": 500,
    "data": null
}
    */
    app.post(`${baseUrl}/create/items/:IdOfParent`,listController.createListItem);
    /**
     * @apiGroup List
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/create/items/:IdOfParent api to create items of list.
     
      * @apiParam {string} itemId Id item. (body params) (required)
     * @apiParam {string} itemName  Name of item. (body params) (required)
     * @apiParam {string} IdOfParent  Parent Id. (url params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
    {
    "error": false,
    "message": "Create TO-Do-List",
    "status": 200,
    "data": {
        "id": "WgBxVCKma",
        "name": "second subsubitem",
        "_id": "5b5d99006653d23b3a2dfeac",
        "parentId": "5b5d860c6653d23b3a2dfea9",
        "_w": 0,
        "path": ",5b5c70428d8c474533ab1100,5b5d860c6653d23b3a2dfea9",
        "__v": 0
    }
}
 @apiErrorExample {json} Error-Response:
    *
   
{
    "error": true,
    "message": "Failed to create new list",
    "status": 500,
    "data": null
}
    */
app.get(`${baseUrl}/get/tree/:listId`, listController.getTree); 

     /**
     * @apiGroup List
     * @apiVersion  1.0.0
     * @api {get} /api/v1/lists/get/tree/:listId api for getting all items of list.
     
     
     * @apiParam {string} listId Id of list whose items we want to fetch.
    
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {json} Success-Response:
    {
    "error": true,
    "message": "Tree Found",
    "status": 200,
    "data": [
        {
            "id": "6Fb5MGDBL",
            "name": "My second list",
            "parentId": null,
            "_w": 0,
            "_id": "5b5c70428d8c474533ab1100",
            "path": "",
            "__v": 0,
            "depth": 0,
            "children": [
                {
                    "id": "tCHY1Rbc",
                    "name": "second subitem",
                    "parentId": "5b5c70428d8c474533ab1100",
                    "_w": 0,
                    "_id": "5b5d860c6653d23b3a2dfea9",
                    "path": ",5b5c70428d8c474533ab1100",
                    "__v": 0,
                    "depth": 1,
                    "children": [
                        {
                            "id": "WgBxVCKma",
                            "name": "second subsubitem",
                            "parentId": "5b5d860c6653d23b3a2dfea9",
                            "_w": 0,
                            "_id": "5b5d99006653d23b3a2dfeac",
                            "path": ",5b5c70428d8c474533ab1100,5b5d860c6653d23b3a2dfea9",
                            "__v": 0,
                            "depth": 2
                        }
                    ]
                },
            ]
        }]
    }
 @apiErrorExample {json} Error-Response:
    *
   
{
    "error": true,
    "message": error occurred",
    "status": 500,
    "data": null
}
    */

// this is for checking purpose
    app.get(`${baseUrl}/get/all`, listController.getAll);
    app.get(`${baseUrl}/view/all/:listId`, listController.getAllItems);  //this is for gettiing todololists of friends
    
    app.get(`${baseUrl}/get/all/lists`, listController.getAllToDoLists); 
    





}