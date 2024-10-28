import { Router } from "express";
import usersRouter from "./users.route.mjs";
import captchaRouter from "./captcha.route.mjs";
import productRouter from "./product.route.mjs"; 

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
    res.send('Server Deployed 🥳'); 
});


indexRouter.use('/users', usersRouter); 
indexRouter.use('/verify-recaptcha', captchaRouter); 
indexRouter.use('/products', productRouter); 

export default indexRouter;
