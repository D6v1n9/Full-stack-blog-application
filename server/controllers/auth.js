import {db} from "../db.js";
import bcrypt from "bcrypt"
export const register = (req, res) => {
    /* Check existing user */

    const q = "SELECT * FROM users WHERE eamil=$1 OR password=$2";
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists!")


        /* Hash the password to store in DB*/
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt);
        // Store hash in your password DB.
    })
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}