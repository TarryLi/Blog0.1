var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('edit', { title: '写博客' });
});

module.exports = router;