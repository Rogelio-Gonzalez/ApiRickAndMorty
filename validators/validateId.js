const Character = require('../models/character');

const existId = async(id='')=>{
    const existUser = await Character.findById(id);
    if(!existUser){
        throw new Error(`The id ${id} dont exist in the database`);
    }
}
module.exports = {
    existId
}