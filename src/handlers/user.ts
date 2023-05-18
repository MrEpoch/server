import prisma from "../db";
import { createJWT, hashPassword, comparePasswords } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
    try {
        const userCheck = await prisma.user.findUnique({
            where: {
                username: req.body.username,
            }
        });

        if (userCheck) {
            res.status(409);
            res.json({ message: "User already exists" });
            return;
        }

        const user = await prisma.user.create({
            data: {
                username: req.body.username,
                password: await hashPassword(req.body.password),
            }
        });
        const token = await createJWT(user);
        res.json({ token });
    } catch (e) {
        e.type = "input";
        next(e);
    } try {
         const userCollections = await prisma.collection.create({
            data: [],
        });
    } catch (e) {
       e.type = "folderCreation";
       next(e);
    }
};

export const signIn = async (req, res, next) => {
        const user = await prisma.user.findUnique({
            where: {
                username: req.body.username,
            }
        });

        const isValid = await comparePasswords(req.body.password, user.password);

        if (!isValid) {
            res.status(401);
            res.json({ message: "Invalid password" });
            return;
        }

        const token = await createJWT(user);
        res.json({ token });
};
