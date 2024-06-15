import express from 'express'
import morgan from 'morgan'
import { router as login } from './routes/login.js'
import { router as libros } from './routes/librosExclusivos.js'

// Instancia de express
const app = express()

// Usamos Logger
app.use(morgan("dev"))

// Middleware de JSON
app.use(express.json())

// Registrar las rutas
app.use("/login", login)
app.use("/libros-exclusivos", libros)

// Iniciamos App en puerto 3000
app.listen(3000, () => { console.log("App en puerto 3000") })