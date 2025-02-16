# nodejs-service

# Instruction Controller
invokes service layer
function getInstructions(req,res)
    instructionsService
        .findAll(req.queryOptions.where)
     
# Instruction Service
invoke sequelizes
const findAll = query => {

    }         

# Summary
##  Service Layer:
The instructionService now handles data retrieval and applies the filtering logic internally through the filterInstructions function.

## Controller:
The controller simply calls findAllFiltered from the service and sends the response, keeping it free of business logic.

# What went wrong
- sequelize query was too complex
- where clause include 

# How to fix this
- simply sequelize query 
- add post filter

Why This Approach?
✅ Separation of Concerns → Filtering is modular, making it easier to test.
✅ Reusability → filterInstructions can be reused in other parts of the app.
✅ Unit Testing → Ensures correctness of filtering logic.

       

File structure
============================
    .
    ├── ...
    ├── server               
    │   └── controller      # Controller
    │       └── instructions.controller.ts    
    │   └── service       
    │       └── instructions.service.js    
    │   └── models          # model
    │       └── instruction.model.js    