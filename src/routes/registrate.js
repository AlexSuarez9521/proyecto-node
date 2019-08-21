const express = require('express');
const router = express.Router();

router.get('/registrate', async (req, res) => {
    res.render('registrate/registrate');
});

module.exports = router;