import expres from 'express'
// import {getevent, createvent, updatevent, deletevent} from '../controller/Events.js'
import { createvent, getevent} from '../controller/Events.js'

const router = expres.Router();

router.get('/events:id', getevent);
// paganation ke liye rahe gaya hai 
router.post('/events', createvent);
// router.put('/events/:id', updatevent);
// router.delete('/events/:id', deletevent);

export default router;