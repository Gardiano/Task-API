
import { Router } from 'express';

const routes = new Router();

routes.get('/teste', (req,res) => {
    return res.json({m: 'GET Task List ON!' })
});

export default routes;