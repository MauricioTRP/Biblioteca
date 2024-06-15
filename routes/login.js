import { Router } from "express";
import jwt from 'jsonwebtoken'
import { usuarios } from "../data/usuarios.js";

// instancia de enrutador
const router = Router()

/**
 * { username: string, password: string }
 */
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body
  
    const secreto = process.env.JWT_SECRET
    const usuario = usuarios.find(usuario => usuario.username == username && usuario.password == password)
  
    if (usuario) {
      // Firmar un JWT y enviarlo
      const token = jwt.sign({ username: username }, secreto, { expiresIn: 120 })
  
      res.json({
        message: 'Inicio de sesión exitoso',
        token: token
      })
    } else {
      res.status(401).json({
        message: 'Unauthorized'
      })
    }
  } catch (error) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }
})

export { router }