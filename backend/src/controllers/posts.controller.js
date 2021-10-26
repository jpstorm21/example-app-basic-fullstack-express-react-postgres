import client from '../database/connectionDb';

export const getPosts = async (req, res) => {
    try {
        const { rows } = await client.query('SELECT * FROM POSTS');

        return res.status(200).json({
            msg: 'Post obtenidos exitosamente',
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener los posts',
            error
        });
    }
};

export const insertPost = async (req, res) => {
    try {
        const { name } = req.body;

        if (name === undefined) {
            return res.status(400).json({
                msg: 'Parametro name is undefined'
            });
        }

        const { rows } = await client.query('INSERT INTO POSTS (NAME) VALUES ($1) RETURNING *', [name]);

        return res.status(201).json({
            msg: 'Post ingresado exitosamente',
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener los posts',
            error
        });
    }
};

export const updatePost = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        if (name === "") {
            return res.status(400).json({
                msg: 'Parametro name is undefined'
            });
        }

        if (id === undefined) {
            return res.status(400).json({
                msg: 'Parametro id is undefined'
            });
        }

        const { rows } = await client.query('UPDATE POSTS SET NAME = $1 WHERE ID = $2 RETURNING *', [name, id]);

        return res.status(200).json({
            msg: 'Post actualizado exitosamente',
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener los posts',
            error
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (id === undefined) {
            return res.status(400).json({
                msg: 'Parametro id is undefined'
            });
        }

        const { rows } = await client.query('DELETE FROM POSTS WHERE ID = $1 RETURNING *', [id]);

        return res.status(200).json({
            msg: 'Post eliminado exitosamente',
            data: rows
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Ocurrio un error al obtener los posts',
            error
        });
    }
};
