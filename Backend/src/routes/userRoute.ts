import { Router } from 'express';
import { getAllusers, userLogin, getOneUser, createUser, updateUser, deleteUser } from "../controllers/userController"
import { UserMulter } from '../middleware/multer';

export const UserRouter: Router = Router();

// liste des routes users

UserRouter.post('/users/login', userLogin);
UserRouter.get('/users', getAllusers);
UserRouter.get('/users/:id', getOneUser);
UserRouter.post('/users', createUser);
UserRouter.put('/users/:id', UserMulter, updateUser);
UserRouter.delete('/users/:id', deleteUser);