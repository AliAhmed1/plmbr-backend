import express from 'express';
import setLocation from '../services/locationService';

const router = express.Router();

router.post('/setLocation', async (req, res) => {
  const { userId, providerId, locationData } = req.body;

  try {
    const result = await setLocation(userId, providerId, locationData);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
