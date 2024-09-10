const { log } = require('console');
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require("dotenv").config()
const app = express();

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB
})

//zwraca kierunki
app.post('/getKierunki', (req, res) => {
    db.query(
        "SELECT * FROM kierunki;",  
        [],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send("Błąd serwera")
            }else{
                res.status(200).json(result);
            }
        }
    )
})

//dodaje klase
app.post('/klasa', (req, res) => {
    const nr_klasy = req.body.nr_klasy
    const symbol_klasy = req.body.symbol_klasy
    const kierunek_id = req.body.kierunek_id

    db.query(
        "SELECT id FROM klasy WHERE nr_klasy = ? AND litera_klasy = ?",
        [nr_klasy, symbol_klasy],
        (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).send("Błąd serwera")
            }else{
                if (result.length === 0) {
                    db.query(
                        "INSERT INTO klasy (nr_klasy, litera_klasy, kierunek_id) VALUES (?, ? , ?)",
                        [nr_klasy, symbol_klasy, kierunek_id],
                        (err, result) => {
                            if (err) {
                                console.log(err)
                                res.status(500).send("Błąd serwera")
                            }else{
                                res.status(200).send("dodano klase pomyślnie")
                            }
                        }
                    )
                }else{
                    res.status(409).send("Taka klasa już istnieje")
                }
            }
        }
    )

    
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("serwer działa na porcie 3001");
})