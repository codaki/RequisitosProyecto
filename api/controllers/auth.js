import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req, res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR name = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);;
        
        if (data.length) return res.status(409).json("Usuario ya existe!");

        //Encriptado
        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const picture = "https://static.vecteezy.com/system/resources/previews/008/844/895/non_2x/user-icon-design-free-png.png";

        const q = "INSERT INTO users(name,email,password,picture) VALUES (?);";
        const values = [
            req.body.username,
            req.body.email,
            hash,
            picture];

        db.query(q, [values], (err, data) => {
            if (err) return console.log(err);
            return res.status(200).json("Se creo el usuario");
        });
    });

};

export const login = (req, res) => {
    //CHECK USER

    const q = "SELECT * FROM users WHERE name = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("Usuario no encontrado!");

        //Check password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Usuario o Contraseña incorrecta!");

        const token = jwt.sign({ id: data[0].id , categoria_id: data[0].categoria_id}, "jwtkey");
        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200).json(other);
    });
}

export const loginGoogle = (req, res) => {
    const token = jwt.sign({ id: req.body.id }, "jwtkey");
    console.log(req.body);
    const { ...other } = req.body;
    
    
    const q = "SELECT * FROM users WHERE email = ? OR name = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);;
        
        if (data.length)
        {

        } else {
            const q = "INSERT INTO users(name,email,password,picture) VALUES (?);";
            const values = [
                req.body.name,
                req.body.email,
                req.body.id,
                req.body.picture];
    
            db.query(q, [values], (err, data) => {
                if (err) return console.log(err);
            });
        }
    });
    
    res.cookie("access_token", token, {
        httpOnly: true,
    })
    .status(200).json(other);
}

export const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };