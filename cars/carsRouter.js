const express = require('express');
const Cars = require('./cars-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    Cars.get()
        .then(cars => res.status(200).json(cars));
})

router.get('/:id', (req,res) => {
    const { id } = req.params;
    Cars.getById(id)
        .then(car => {
            if(car) {
                res.status(200).json(car);
            } else {
                res.status(404).end();
            }
        });
});

router.post('/', (req,res) => {
    const { vin, make, model, mileage, transmission, title } = req.body;
    Cars.insert({ vin, make, model, mileage, transmission, title})
    .then(car => {
        if(car) {
            res.status(200).json(car);
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:'Error inserting car'
        })
    })
})



module.exports = router;