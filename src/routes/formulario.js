const express = require('express');
const router = express.Router();

router.get('/formulario', async (req, res) => {
    res.render('formulario/crear');
});

module.exports = router;