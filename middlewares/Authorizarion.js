import jwt from 'jsonwebtoken'

/**
 * url?token=asdp98hlodihsadasd.123e98aSWA.ASSAD
 */
export const Authorization = async(req, res, next) => {
  try {
    const { token } = req.query
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    next()//pasar a la ruta correspondiente
  } catch (error) {
    res.status(401).json({
      html: 'No autorizado'
    })
  }
}
