import express from 'express';
import analyticsRoutes from './src/routes/analyticsRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/analytics', analyticsRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000'); 
});
