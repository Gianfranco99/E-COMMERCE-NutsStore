const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const userRoutes = require('./user')
const authRouter = require("./auth.js");
const orderRoutes = require('./order.js')
const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
router.use('/user', userRoutes);
router.use("/auth", authRouter);
router.use('/products', productRouter);
router.use('/products/category', categoryRouter);
router.use('/orders', orderRoutes)
module.exports = router;
