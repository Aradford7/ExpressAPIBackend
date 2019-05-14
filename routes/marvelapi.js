const express = require('express');
const router = express.Router();
//get MarvelAPI from models
// const Marvel = require('../models/api');
const fetch = require('node-fetch');

//GET ROUTE
//All characters
router.get("/character/:id", (req,res)=>{
  try {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`)
    .then(res => res.json())
    .then(json => res.json({comics: json.data.results, success: true}))
  }catch(err){
    res.send(err)
  };
})

router.get('/:name',  (req, res, next) => {
  try {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${req.params.name}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`)
    .then(res => res.json())
    .then(json => res.json({ char: json.data.results }))
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
