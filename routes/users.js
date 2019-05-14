const express = require('express');
const router = express.Router();

const User = require('../models/User')

////////////////////for user login/////////////////////////////////
router.get('/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      res.json({user})
    } catch(err) {
      res.json({err})
    }
});
///////////////////////////////////////////////////////////////
//user GET favorites
// router.get('/comic/:id', async (req,res) => {
//   try{
//   const foundFavorite = await Favorite.find
//   .then(res => res.json())
//   .then(json => res.json({ comic: json.data.results }))
//   res.render('/posts')  //return all favorites
//   }catch(err){
//     res.json({err})
//   }
// })
// //user ADD Favorites POST favorites
// router.post('/post', async (req,res) => {
//   try{
//     const addFavorite = Favorite.create {req.body.favorites};
//     const 
//   }
// })

//router.post('/post')

//user PUT favorites

//user DELETE favorites


////////////////////////////create user/////////////////////////////////////
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body)
    res.json({user})
  } catch(err) {
    res.json({err})
  }
});

router.put('/', (req, res) => {
  return res.json({data: 'Received a PUT HTTP method user'});
});

router.delete('/', (req, res) => {
  return res.json({data: 'Received a DELETE HTTP method user'});
});
///////////////////////////login//////////////////////////////////
router.post('/login', async (req, res) => {
  console.log('hit')
  try {
    const foundUser = await User.findOne({username: req.body.username})
    res.json({
      user: foundUser,
      success: true
    })
  } catch(err) {
    res.json({err})
  }
})

module.exports = router;
