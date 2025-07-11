import { db } from "../db.js";
import bcrypt from "bcrypt";
export const register = (req, res) => {
  /* Check existing user */

  const q = "SELECT * FROM users WHERE email=$1 OR password=$2";
  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists!");

    /* Hash the password to store in DB*/
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Store hash in your password DB.

    /* Insert user to db */
    const q =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    db.query(q, [req.body.username, req.body.email, hash], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created succesfully");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
