const express = require('express');
const router = express.Router();
const { VM } = require('vm2');

router.post('/execute', async  (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "No code provided." });
    }

    const vm = new VM({
        timeout: 10000,
        sandbox: {},
    });

    try {
        const result = vm.run(code);
        res.json({ result });
    } catch (err) {
        res.json({ error: err.message });
    }
});

module.exports = router;