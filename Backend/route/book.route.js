import express from "express"
import {getBook} from '../controller/book.controller.js'

const router = express.Router();
router.get('/', getBook) // jab 2nd part hai jab index.js / click hoga tab ye chaega oe jab ye chaega tab book.controller.js chega 
export default router   