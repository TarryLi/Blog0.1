var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blog', { title: '博客' });
});

router.get('/blogs', function(req, res, next) {
    res.render('blogs', { title: 'XXX的博客' });
});

module.exports = router;
