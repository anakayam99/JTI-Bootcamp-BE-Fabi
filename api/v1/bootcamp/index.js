const express = require('express');
const router = express.Router();
const mongo = require('mongojs');
const db = mongo('mongodb+srv://fabi:12341234@cluster0.wntzzq7.mongodb.net/CSR', ['todos'])
// router.get('/', function(req, res, next){
//     res.send('Goodbye, World!');
// });

router.get('/', function(req, res, next){
    let query = {};
    if (req.query.text) query.text = req.query.text;
    if (req.query.isCompleted) {
        if (req.query.isCompleted === 'true') query.isCompleted = true;
        else query.isCompleted = false
    }
    db.todos
    .find(query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    })
});

router.get('/:id', function(req, res, next){

    let query = {
        _id: db.ObjectId(req.params.id)
    };

    db.todos
    .findOne(query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;