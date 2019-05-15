const express = require('express');
const router = express.Router();
//get MarvelAPI from models
// const Marvel = require('../models/api');
const fetch = require('node-fetch');

//GET ROUTES
//get character id request from api then json and send response characters/comics (comics characters are in)
router.get("/character/:id", (req,res)=>{
  try {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`)
    .then(res => res.json())
    .then(json => res.json({
      comics: json.data.results,
      success: true}))
  }catch(err){
    res.send(err)
  };
})
//get character name from api based on searching by nameStartsWith and send results
router.get('/:name',  (req, res, next) => {
  try {
    console.log(req.params.name,'==========')
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${req.params.name}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`)
    .then(res => res.json())
    .then(json => res.json({ 
      char: json.data.results,
      comics: json.data.results,
      success:true 
    }))
  }catch(err){
    res.send(err)
  };
});
//get comics id from comics results and show information title, img, description
// (be able to later add to user favorites)

// router.get('/:comic/:id',  (req, res, next) => {
//   try {
//     fetch(`https://gateway.marvel.com:443/v1/public/comics/${req.params.id}&ts=thesoer&apikey=c4bed87b70142a7ee8645e5466f98334&hash=f65084c44934b7db642943416b484ac9`)
//     .then(res => res.json())
//     .then(json => res.json({comic: json.data.results }))
//   }catch(err){
//     res.send(err)
//   };
// });

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
