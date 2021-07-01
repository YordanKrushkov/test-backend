const express = require('express')
const router = express.Router()
const User = require('./Schema/index')
router.post('/data', async (req, res) => {
    console.log(req.body);
    res.status(200).send()
    // const newUser = await new User(req.body);

    // newUser.save()
    //     .then((data) => {
    //         res.status(200).send(data)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         return
    //     });
})

module.exports = router;