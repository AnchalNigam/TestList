const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('../libs/checkLib');

/* Models */
const ListModel = mongoose.model('listModel');

//creation of list
let createList = (req, res) => {
    
    let saveList = () => {
        return new Promise((resolve, reject) => {
            let newList = new ListModel({
                id: shortid.generate(),
                name: req.body.listName,
                
             
            })
            newList.save((err, newList) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ListsController: create list', 10)
                    let apiResponse = response.generateResponse(true, 'Failed to create new list', 500, null)
                    reject(apiResponse)
                } else {

                    resolve(newList)
                }

            })


        });
    }//end

    
    saveList()
        .then((resolve) => {
            let apiResponse = response.generateResponse(false, 'Create TO-Do-List', 200, resolve)
            res.send(apiResponse)

        })
        .catch((err) => {
            res.send(err)

        })


}//end

//creation of items of our list
let createListItem = (req, res) => {
    console.log('create list iteem')
    let saveList = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({id:req.params.IdOfParent})
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'list Controller: CreateListItems', 10)
                    let apiResponse = response.generateResponse(true, `error occurred: ${err.message}`, 500, null)
                    reject(apiResponse)
                } 
                else {
                    console.log('create item success')
                    let newItem=new ListModel({
                        id:req.body.itemId,
                        name:req.body.itemName
                    })
                    result.appendChild(newItem, (err, data)=>{ 
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'ListsController: creatListItem', 10)
                            let apiResponse = response.generateResponse(true, 'Failed to create new list', 500, null)
                            reject(apiResponse)
                        } else {
                     
                            resolve(data)
                        }
                    });
        
                }


            });

        });
    }//end

    
    saveList()
        .then((resolve) => {
            let apiResponse = response.generateResponse(false, 'Create TO-Do-List', 200, resolve)
            res.send(apiResponse)

        })
        .catch((err) => {
            res.send(err)

        })


}//end

let getAllToDoLists = (req, res) => {

    let findLists = () => {

        return new Promise((resolve, reject) => {

            
            ListModel.find({parentId: null})
                .select('-__v -_id -path -_w')
                .exec((err, result) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'List Controller: getAllToDoLists', 10)
                        let apiResponse = response.generateResponse(true, `error occurred: ${err.message}`, 500, null)
                        reject(apiResponse)
                    } else {

                        console.log(result);
                        resolve(result)

                    }

                });



        });
    }

   
        findLists()
        .then((result) => {
            let apiResponse = response.generateResponse(false, 'All Lists Found', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            res.send(error)
        })
}//end


//getting all item od particular list
let getAllItems=(req,res)=>{
   ListModel.findOne({id:req.params.listId},function(err, doc){
    // access to the children
    doc.getChildren(function(err, docs){
        if (err) {
            console.log(err)
            logger.error(err.message, 'list Controller: getAllItems', 10)
            let apiResponse = response.generateResponse(true, `error occurred: ${err.message}`, 500, null)
            res.send(apiResponse)
        } else {
            console.log('All Items Found')
            let apiResponse = response.generateResponse(true, 'all Items Found', 200, docs)
            res.send(apiResponse)
        }
    });
});

}//end

//get all items of list in tree form
let getTree=(req,res)=>{
    ListModel.findOne({id:req.params.listId},function(err, doc){
     // access to the children
     doc.getArrayTree(function(err, docs){
         if (err) {
             console.log(err)
             logger.error(err.message, 'list Controller: getTree', 10)
             let apiResponse = response.generateResponse(true, `error occurred`, 500, null)
             res.send(apiResponse)
         } else {
             console.log('All Items Found')
             let apiResponse = response.generateResponse(true, 'Tree Found', 200, docs)
             res.send(apiResponse)
         }
     });
 });
 
 }

let getAll=(req,res)=>{
    ListModel.find()
                    .exec((err, result) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'list Controller: getAll', 10)
                            let apiResponse = response.generateResponse(true, `error occurred: ${err.message}`, 500, null)
                            res.send(apiResponse)
                        } else if (check.isEmpty(result)) {
                            logger.info('No Items Found', 'list Controller: getAll', 10)
                            let apiResponse = response.generateResponse(true, 'No Items Found', 404, null)
                            res.send(apiResponse)
                        } else {
                            console.log('All Items Found')
                            let apiResponse = response.generateResponse(true, 'all Items Found', 200, result)
                            res.send(apiResponse)
                        }
    
                    });

}



module.exports = {
    createList: createList,
    getAllItems:getAllItems,
    getAll:getAll,
    createListItem:createListItem,
    getTree:getTree,
    getAllToDoLists: getAllToDoLists,
    deleteItem:deleteItem

}