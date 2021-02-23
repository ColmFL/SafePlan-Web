const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PatientSchema = new Schema({
    
    patientCode: { 
        type: String, 
        required: true
    },

            myPlan: [{ 
                 
                MyWarningSigns: [{type: String, required: false}],
                MyCopingStrategies: [{type: String, required: false}],
                ThingsToDo: [{type: String, required: false}],
                LifeWorthLiving: [{type: String, required: false}],
                MyNetwork: [{type: String, required: false}],
                MakingTheEnvironmentSafe: [{type: String, required: false}]
            }],
                
            

            myDiary: {
                         
                MoodScale: {type: Number, required: false},
                SleepScale: {type: Number, required: false},
                StepCounter: {type: Number, required: false},
                DiaryEntry: {type: String, required: false}
            },

            myStats: {
                AppUsage: {type: Number, required: true}
            },

            date: {type: Date, default: Date.now}
                    
                        
                               
});

module.exports = Patient = mongoose.model("patients", PatientSchema);