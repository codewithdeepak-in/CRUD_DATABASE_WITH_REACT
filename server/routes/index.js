const express = require('express');
const router = express.Router();
const createRoute = require('./create.Route');
const fetchRoute = require('./fetch.Route');
const deleteRoute = require('./delete.Route');
const updateRoute = require('./update.Route')
const getRoute = require('./get.Route');

const routerIndex = [
    {
        path: '/create',
        route: createRoute
    },
    {
        path: '/data',
        route: fetchRoute
    },
    {
        path: '/delete',
        route: deleteRoute
    }, 
    {
        path: '/update',
        route: updateRoute
    },
    {
        path: '/get/:id',
        route: getRoute
    }
]

routerIndex.forEach((item) => router.use(item.path, item.route));

module.exports = router;