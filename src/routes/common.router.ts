import { Router } from "express";
import userRouter from "../routes/user.router";
import authRouter from "../routes/auth.router";

const router = Router();

const defaultRoute = [
    {
        path: "/welcomePage",
        route: userRouter
    },
    {
        path: "/auth",
        route: authRouter
    }
]

defaultRoute.forEach((route) => {
    router.use(route.path, route.route); 
})

export default router;