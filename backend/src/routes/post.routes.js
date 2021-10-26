import { Router } from 'express';
import { getPosts, insertPost, updatePost, deletePost } from '../controllers/posts.controller';

const router = Router();

// GET
router.get('/', getPosts);

// POST
router.post('/', insertPost);

// PUT
router.put('/:id', updatePost);

// DELETE
router.delete('/:id', deletePost);

router.all('*', (req, res) => {
    res.status(404).json({
        msg: 'La ruta solicitada no es valida'
    })
});

export default router;