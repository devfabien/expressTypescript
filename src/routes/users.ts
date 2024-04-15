import { Router } from "express";
import { getUsers } from "../handlers/users.handlers";

const router = Router();

router.get("/", getUsers);

export default router;
