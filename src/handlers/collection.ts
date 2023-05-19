import prisma from "../db";


export const getCollections = async (req, res, next) => {
    try {
        const userFolder = await prisma.user.findUnique({
            where: {
                id: req.body.id,
            },
            include: {
                userCollections: true,
            }
        });
        res.json({ userFolder: userFolder.userCollections });
    } catch (e) {
        e.type = "readUserFolder";
        next(e);
    }
}

export const getCollection = async (req, res, next) => {
    try {
        const collection = await prisma.collection.findUnique({
            where: {
                id: req.body.id,
                belongsToId: req.user.id,
            },
        });

        res.json({ collection: collection });
    } catch (e) {
        e.type = "getOneCollection";
        next(e)
    }
}

export const createCollection = async (req, res, next) => {
    try {
        const newCollection = await prisma.collection.create({
           data: {
                title: req.body.title,
                belongsToId: req.user.id,
                favourites: false,
           } 
        });

        res.json({ collection: newCollection });
    } catch (e) {
        e.type = "createCollection";
        next(e);
    }
};

export const updateCollection = async (req, res, next) => {
    try {
        const collection = await prisma.collection.update({
            where: {
                id: req.body.id,
                belongsToId: req.user.id,
            },
            data: {
                title: req.body.title,
                favourites: false,
            }
        });

        res.json({ collection: collection });
    } catch (e) {
        e.type = "updateCollection";
        next(e);
    }
};

export const deleteCollection = async (req, res, next) => {
    try {
        const collection = await prisma.collection.delete({
            where: {
                id: req.body.id,
                belongsToId: req.user.id
            },
        });

        req.json({ deleted: collection });
    } catch (e) {
        e.type = "deleteCollection";
        next(e);
    }
};


