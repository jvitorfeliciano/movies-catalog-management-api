import prisma from "../db/db.js";
import { Genre_Ids } from "../protocols/genres.js";

async function insertGenre(name: string) {
    return await prisma.genre.create({
        data: {
            name,
        },
    });
}

async function findMany() {
    return await prisma.genre.findMany();
}

async function findGenreByName(name: string) {
    return await prisma.genre.findFirst({
        where: {
            name,
        },
    });
}

async function deleteById(id: number) {
    return await prisma.genre.delete({
        where: {
            id,
        },
    });
}

async function findById(id: number) {
    return await prisma.genre.findUnique({
        where: {
            id,
        },
    });
}

async function findManyById(array: Genre_Ids) {
    return await prisma.genre.findMany({
        where: {
            id: {
                in: [...array],
            },
        },
    });
}

async function countGenreApperance() {
    return await prisma.genre.findMany({
        include: {
            _count: {
                select: {
                    movies: true,
                },
            },
        },
    });
}

const genresRepository = {
    insertGenre,
    findGenreByName,
    deleteById,
    findById,
    findMany,
    findManyById,
    countGenreApperance,
};

export default genresRepository;
