import express from 'express';

const router = express.Router();

// toutes les routes commencent avec /users
router.get('/', (req , res) => {
    res.send('Hello');
    console.log('Test');
});


export default router;