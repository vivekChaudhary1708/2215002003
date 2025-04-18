import express from 'express';
import analyticsRoutes from './routes/analyticsRoutes.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api/analytics', analyticsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
