
import { db } from "../dbLegacy.js"
import jwt from "jsonwebtoken";

export const getGenero = (req, res) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json("No autenticado!")
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token no es valido!");
    const q = 
    "select g.genero_nombre from perf_usuario p inner join tiene t inner join genero g on p.perfusuario_id = t.perfusuario_id and g.genero_id = t.genero_id where p.perfusuario_id = ? ;"
    db.query(q, [userInfo.categoria_id], (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data)
        return res.status(200).json(data);
    });
});
}