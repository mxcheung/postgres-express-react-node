// instructionService.js

const findALL = (query, replacements) => {
    return sequelize.query(query, {
        raw: true,
        type: QueryTypes.SELECT,
        replacements
     });
};

// Filtering function
function filterInstructions(instructions) {
    const allowedAccounts = new Set(["x", "y", "z"]);
 
    return instructions.filter(instruction => {
       if (instruction.messageType === "A") {
          return allowedAccounts.has(instruction.accountId);
       }
       return true; // Include all other messageTypes
    });
 }

module.exports = {
  findAll,
};
