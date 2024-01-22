const express = require ("express")
const app = express()
const port = 3000

const clients = [
        {
            Id: 1,
            IdClient: "17",
            Name: "Stanislav",
            Surname: "Pshenichnikov",
            PhoneNumber: "8-999-999-99-99",
            Email: prodamgaragegmail.com
        },
    
        {
            Id: 2,
            IdClient: "11",
            Name: "Vladislav",
            Surname: "Kalyavin",
            PhoneNumber: "8-908-999-99-99",
            Email: vlad1gmail.com
        },

        {
            Id: 3,
            IdClient: "15",
            Name: "Egor",
            Surname: "Zhurikov",
            PhoneNumber: "8-912-999-99-99",
            Email: zhuravelgmail.com
        },

        {
            Id: 4,
            IdClient: "26",
            Name: "Timur",
            Surname: "Sokolovskiy",
            PhoneNumber: "8-922-999-99-99",
            Email: sokolovbrilliantgmail.com
        }
]

app.get( '/', (req,res) => {
    res.set({
        "content-type": "application/json",
    })
    res.json (JSON.stringify(clients))
 })
 
 app.listen(port, () => {
    console.log(`Мы начали прослушивать ${port} порт.`)
 })

