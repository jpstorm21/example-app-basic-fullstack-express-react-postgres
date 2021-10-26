import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import postsRoutes from './routes/post.routes';

const app = express();

// SET PORT
app.set('PORT', process.env.PORT || 4000);

// SET MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/api/posts', postsRoutes);

app.use('/', (req, res) => {
    res.send('BACKEND RUNNING')
});

const PORT = app.get('PORT');

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});