const {Router} = require('express');
const { getCharacter, getCharacters, getMultiplyCharacters } = require('../controllers/character.controller');

const router = Router();
router.get('/',getCharacters);
//A unique character
/*router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existId),
    validateCharacter
],getCharacter);*/
router.get('/(:ids*)',getMultiplyCharacters);
module.exports = router;