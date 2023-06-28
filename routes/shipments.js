const express = require('express')
const router = express.Router()

//TODO http//localhost/shipments GET, POST, DELETE, PUT

router.get("/", (req, res) => {
    
    /*const data = ["hola", "mundo"]
    res.send({data})*/
    //const data = { mensaje: 'Hola, mundo!' };

    const json = 
    {
        "shipmentList":
        [
            {
              "id": 215,
              "streetName": "Osinski Manors",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 9856,
              "streetName": "Marvin Stravenue",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 7127,
              "streetName": "Kathlyn Ferry",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 987,
              "streetName": "Champlin Lake",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 63187,
              "streetName": "Volkman Garden Suite 447",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 75855,
              "streetName": "Dessie Lights",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 1797,
              "streetName": "Adolf Island Apt. 744",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 2431,
              "streetName": "Lindgren Corners",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 8725,
              "streetName": "Aufderhar River Suite 859",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            },
            {
              "id": 1234,
              "streetName": "Fake St.",
              "city": "San Diego",
              "state": "CA",
              "zipCode": 92126
            }
        ]
    }

    res.json(json);
})

module.exports = router