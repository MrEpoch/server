import prisma from "../db";

export const getCollections = async (req, res, next) => {
    try {
        const userFolder = await prisma.user.findUnique({
            where: {
                id: req.user.id,
            }, 
            include: {
                userCollections: {
                    include: {
                        collectionTodos: true,
                    },
                },
            },
        });
        console.log(userFolder.userCollections);
        res.json({ userFolder: userFolder.userCollections });
    } catch (e) {
        e.type = "readUserFolder";
        next(e);
    }
}

export const getCollection = async (req, res, next) => {
    try {
        const collection = await prisma.userCollection.findUnique({
            where: {
                id: req.params.id,
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
        const newCollection = await prisma.userCollection.create({
           data: {
                title: req.body.title,
                belongsToId: req.user.id,
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
        const collection = await prisma.userCollection.update({
            where: {
                id: req.params.id,
            },
            data: {
                title: req.body.title,
                favourite: req.body.favourite,
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
        const collection = await prisma.userCollection.delete({
            where: {
                id: req.params.id,
            },
        });

        req.json({ deleted: collection });
    } catch (e) {
        e.type = "deleteCollection";
        next(e);
    }
};


