const {response, request} = require('express');
const Character = require('../models/character');
const getCharacters = async(req = request, res = response  )=> {
  let page = parseInt(req.query.page || 1);
  let limit = parseInt(req.query.limit || 12);
  const startIndex = (page - 1) * limit;
  const count = await Character.countDocuments().exec()
  const getPages = (count / limit);
  const pages= Math.ceil(getPages);
  let prev, next;
  if(page > pages | page <= 0 | limit > count){
    return res.status(400).json({"error": 'There is nothing here'});
  }
  else if(page==1){
    next = `http://localhost:8081/api/character/?page=${page + 1}&&limit=${limit}`;
    prev = null;
  }
  else if(page == pages){
    prev = `http://localhost:8081/api/character/?page=${page - 1}&&limit=${limit}`;
    next = null;
  }
  else{
    next = `http://localhost:8081/api/character/?page=${page + 1}&&limit=${limit}`;
    prev = `http://localhost:8081/api/character/?page=${page - 1}&&limit=${limit}`;
  }
  let results = await Character.find({}).skip(startIndex).limit(limit);
  res.json({
    "info":{
      count, 
      pages,
      limit,
      next,
      prev
    },
    results
  })
}
const getMultiplyCharacters = async(req = request, res = response)=> {
  let ids = req.params.ids.split(',');
  let character = await Character.find({_id :{$in : ids}});
  res.send(character);
}

module.exports = {
  //getCharacter,
  getCharacters,
  getMultiplyCharacters
}
