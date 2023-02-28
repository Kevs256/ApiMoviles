import { Router } from "express";
import UsersController from "../controller/user.controller"

class UserRouter {

    router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config() {
        this.router.route('/login').post(UsersController.Login);
        this.router.route('/listView').get(UsersController.ListView);
    }

}

export default new UserRouter();