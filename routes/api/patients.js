const express = require("express");
const router = express.Router();

const Patient = require("../../models/Patient");

router.get("/patientData", (req, res) => {
    Patient.find({  }).then(patient => {
        if (patient) {
            return res.json({ patient });
        }else{
            return res.json({ patient : 'patient cannot be found' });
        }
    });
});
    
module.exports = router;