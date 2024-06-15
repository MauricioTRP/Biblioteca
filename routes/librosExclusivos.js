import { Router } from "express";
import { Authorization } from "../middlewares/Authorizarion.js"
import { librosExclusivos } from "../data/libros.js";

const router = Router()

router.get("/", Authorization, async (req, res) => {
  const { libroId } = req.query

  const libro = librosExclusivos.find(libro => libro.id == libroId && libro.disponible )

  if (libro) {
    res.json({
      libro: libro,
      message: 'Libro encontrado'
    })
  } else {
    res.status(404).json({
      message: 'Libro no encontrado o no disponible'
    })
  }
})

export { router }