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


router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.create(req.body)
    console.log(user)
    res.json({user})
  } catch(err) {
    res.json({err})
  }
});


router.put('/', (req,res) => {
  return res.json({data:'Recieved a PUT HTTP method user'})
})


router.delete('/', (req,res) => {
  return res.json({data:'Recieved a DELETE HTTP method user'})
})


router.post('/login', async (req, res) => {
  console.log('hit')
  try {
    const foundUser = await User.findOne({username: req.body.username})
    res.json({
      user: foundUser,
      success: foundUser? true: false
    })
  } catch(err) {
    res.json({err})
  }
})




//user GET favorites

router.get('/', async(req,res,next) => {
  console.log(req.body, 'this gets all the favorite from UserSchema')
})

router.post('/:id/comic', async (req,res) => {
  try{
    const foundUser = await User.findById(req.params.id)
    foundUser.favorite.push(req.body)
    await foundUser.save()
    res.json({
      user: foundUser
    })
  }catch(err){
    res.json({err})
  }
})

// //user ADD Favorites  POST favorites
// router.post('/post', async (req,res) => {
//   try{
//     const addFavorite = Favorite.create(req.body.favorites);
//     return res.json({comic:json.data.results})
//     res.redirect('/posts')
//   }catch(err){
//     res.json(err)
//   }
// });
// router.get("/:id", async (req,res) => {
//   try{
//     const showFavorites = await User.findById(req.params.id).populate("comics")
//     .exec();
//     let current;
//     if(req.session.logged) {
//       if(showFavorites._id.toString() === req.session.userDbId.toString()){
//         current = true
//       }
//     }
//     return res.json({comic:json.data.results})
//     res.render('/posts', {
//       user:showFavorites,
//       current
//     });
//   }catch(err){
//     res.json(err);
//   }
// });
//user PUT favorites
/////////////////////////////////////////////////////////////////////
// router.put('/', (req, res) => {
//   return res.json({data: 'Received a PUT HTTP method user'});
// });

//user DELETE favorites
/////////////////////////////////////////////////////////////////////
// router.delete('/', (req, res) => {
//   return res.json({data: 'Received a DELETE HTTP method user'});
// });

router.delete("/:id/comic", async (req,res) => {
  try{
    const deletedFavorite = await User.findByIdAndRemove(req.params.id);
    _id:{
      $in: deletedFavorites.comics
    }
    return res.json({comic:json.data.results})
  }catch(err){
    res.json(err);
  }
  });




module.exports = router;
