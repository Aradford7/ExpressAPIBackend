const express = require('express');
const router = express.Router();
const User = require('../models/User')
////////////////////for user login/////////////////////////////////
// router.get('/:id', async (req, res) => {
//     try {
//       const user = await User.findById(req.params.id)
//       res.json({user})
//     } catch(err) {
//       res.json({err})
//     }
// });
// router.post('/', async (req, res) => {
//   try {
//     const user = await User.create(req.body)
//     res.json({user})
//   } catch(err) {
//     res.json({err})
//   }
// });
// router.post('/login', async (req, res) => {
//   console.log('hit')
//   try {
//     const foundUser = await User.findOne({username: req.body.username})
//     res.json({
//       user: foundUser,
//       success: true
//     })
//   } catch(err) {
//     res.json({err})
//   }
// })
router.post('/', async(req,res) => {
  console.log(req.body, 'this is session')
  try{
    const user = await User.create(req.body);
    req.session.logged = false,
    req.session.username = req.body.username;

    res.json({
      status:200,
      data: 'login sucessful'
    });
  }catch(err){
    console.log(err);
    res.send(err);
  }
});
router.get('/login', async(req,res,next) => {
  console.log('hit')
  try{
    const foundUser = await User.findOne({username:req.body.username})
    console.log(foundUser)
    if(req.body.password, foundUser.password)
    console.log("password is valid")
    req.session.logged = true,
    req.session.userDbId = foundUser._id;
    res.json({
      user: foundUser,
      success:true,
    })  
  }catch(err){
    res.json({err})
  }
});
router.post('/register', async (req,res,next) => {
  //const password = req.body.password;
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = req.body.password;
  console.log('====pw====')
  console.log("password", req.body.password)
  console.log("username", req.body.username)
  console.log("===username===")
  try{
    const createdUser = await User.create(userDbEntry);
    console.log('user created')
    req.session.logged = false,
    req.session.userDbId = createdUser._id;
    //console.log("redirecting")
    //res.redirect('/register')
  }catch(err){
    res.json({err})
  }
});
router.get('/logout', (req,res) => {
  req.session.destory((err)=>{
    if(err){
      res.send(err);
    }else{
      console.log(req.session, 'sucessfully logged out')
    }
  })
});

//user GET favorites

// router.get('/', async(req,res,next) => {
//   console.log(req.body, 'this gets all the favorite from UserSchema')
// })

// router.get('/comic/:id', async (req,res) => {
//   try{
//   const foundFavorite = await Favorite.find({})
//   .then(res => res.json())
//   .then(json => res.json({ comic: json.data.results }))
//   res.render('/posts')  //return all favorites
//   }catch(err){
//     res.json({err})
//   }
// })

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
// router.delete("/:id", async (req,res) => {
//   try{
//     const deletedFavorite = await User.findByIdAndRemove(req.params.id);
//     _id:{
//       $in: deletedFavorites.comics
//     }
//     return res.json({comic:json.data.results})
//     res.redirect('/posts');
//   }catch(err){
//     res.json(err);
//   }
//   });




module.exports = router;
