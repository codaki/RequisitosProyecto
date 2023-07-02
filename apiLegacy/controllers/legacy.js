
import { db } from "../dbLegacy.js"


export const getGenero = (req, res) => {

    const q = 
    "select g.genero_idtmdb from perf_usuario p inner join tiene t inner join genero g on p.perfusuario_id = t.perfusuario_id and g.genero_id = t.genero_id where p.perfusuario_id = ? ;"
    db.query(q, [req.params.id], (err, data) => {
        if (err){ 
            console.log(err);
            return res.status(500).json(err);}
        console.log(data)
        return res.status(200).json(data);
    });

}