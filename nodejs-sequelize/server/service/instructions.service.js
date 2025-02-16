// instructionService.js

const findALL = (query, replacements) => {
    return sequelize.query(query, {
        raw: true,
        type: QueryTypes.SELECT,
        replacements
     });
};

module.exports = {
  findAll,
};
