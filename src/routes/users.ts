import { Router } from "express";
import { getUserById, getUsers } from "../handlers/users.handlers";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

export default router;
