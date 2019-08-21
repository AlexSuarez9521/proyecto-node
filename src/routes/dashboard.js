const express = require('express');
const router = express.Router();

router.get('/dashboard', async (req, res) => {
    res.render('dashboard/dashboard');
});

module.exports = router;