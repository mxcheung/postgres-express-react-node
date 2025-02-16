// instructionService.js

const findALL = (query, replacements) => {
    return sequelize.query(query, {
        raw: true,
        type: QueryTypes.SELECT,
        replacements
     });
};


const getInstructionQeury = (param1, param2) => {
    const query = new InstructionsQuery(param1, param2);
    if (param1 == 'xyz') {
        // Filtering JSON field directly in SQL 
        const accountQueryStatement = `instruction_content->>'Account' in (${accounts.map(a => `'${a}'`).join(',')})`
        query.addWheres([accountQueryStatement]);
        return query.getQuery()
    }  else {
        return query.getQuery()
    }
};

module.exports = {
  findAll,
};
