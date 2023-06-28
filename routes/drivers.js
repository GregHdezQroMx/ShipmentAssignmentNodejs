const express = require('express')
const router = express.Router()

//TODO http//localhost/shipments GET, POST, DELETE, PUT

router.get("/", (req, res) => {
    
    const json = {
        "driverList": [
          {"driverName": "Everardo Welch"},
          {"driverName": "Orval Mayert"},
          {"driverName": "Howard Emmerich"},
          {"driverName": "Izaiah Lowe"},
          {"driverName": "Monica Hermann"},
          {"driverName": "Ellis Wisozk"},
          {"driverName": "Noemie Murphy"},
          {"driverName": "Cleve Durgan"},
          {"driverName": "Murphy Mosciski"},
          {"driverName": "Kaiser Sose"}
        ]
      }
      
    res.json(json);
})

module.exports = router