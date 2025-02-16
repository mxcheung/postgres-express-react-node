// instructionsController.js

const instructionService = require('./instructionService');
const res = require('./respondHandler'); // Your response helper


function getInstructions(req,res) {
    // Perform query and return results 
    instructionService
        .findAll(req.queryOptions.where)
        .then( data => responseHandler.data(req,res, data)))
        .catch(err => responseHandler.console.error(req,res, err);
}
    


