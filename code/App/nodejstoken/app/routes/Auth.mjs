import express from "express";
import jwt from "jsonwebtoken";
import { privateKey } from "../private_key.mjs";

// Il manque l'import du module jwt

import { connectToDatabase } from "../utils/dbUtils.mjs";


const router = express.Router();

// Middleware pour la connexion à la base de données
const connectToDatabaseMiddleware = async (req, res, next) => {
  try {
    req.dbConnection = await connectToDatabase();
    next();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


router.post('/', connectToDatabaseMiddleware, async (req, res) => {
  const { username, password } = req.body;

  const queryString = 'SELECT * FROM t_users WHERE useName = ? AND usePassword = ?';

  try {
    const [rows] = await req.dbConnection.execute(queryString, [username, password]);
    if (rows.length > 0) {

      // signer et renvoyer votre token ici (utiliser un code http de succès)

      const message = `user has successfully connected`;
      const token = jwt.sign({ name: "hello", iat: Math.floor(Date.now() / 1000) - 30 }, privateKey, {
      expiresIn: "2y"} // Token expires in 1 year
      );
      return res.status(401).json({ message, token});
      //res.status(401).json({ error: "Renvoi du token pas implémenté" });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
