const express = require('express');
const router = express.Router();

//get MarvelAPI from models
const Marvel = require('../models/marvel');

router.get('/', (req, res, next) => {
  console.log(results, 'this is get all Marvel Characters')
  try {
    const results = Marvel.find(data.results);
    // doGetComics =  async (e) => {
    //   e.preventDefault();
    //   const results = await Marvel.find();
    //response to react
    res.json({
      status: 200,
      data: results
    });
  }catch(err){
    res.send(err)
  };
});


router.post('/', (req, res) => {
  return res.json({
    body: req.body
  });
});

router.put('/', (req, res) => {
  return res.json({data: 'Received a PUT HTTP method'});
});

router.delete('/', (req, res) => {
  return res.json({data: 'Received a DELETE HTTP method'});
});

module.exports = router;
