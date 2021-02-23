import React, {Component} from 'react';

class PatientList extends Component {
  state = {
    patient: [], 
    isLoading: true, 
    error: null 
  }; 


  componentDidMount() {
    fetch('http://danu7.it.nuigalway.ie:8515/api/patients/patientData')
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false,
          patient: res.patient,
          
        });
      })
      .catch(error =>
        this.setState({ error: error.message, isLoading: false }),
      );  
  }
  

      renderPatients = () => {
        const { patient, isLoading, error } = this.state;
    
        if (error) {
          return <div>{error}</div>;
        }
    
        if (isLoading) {
          return <div>Loading...</div>;
        }
    
        return (
          <div class="col s12 center-align">
            {patient.map(patient => (
              <div key={patient.id}><h4> ID: {patient._id}</h4> <b>Name:</b> {patient.patientCode} 
              <div>My Plan- Warning Signs: {patient.myPlan.MyWarningSigns}</div>
              <div>My Diary- Mood Scale: {patient.myDiary.MoodScale}, My Diary- Sleep Scale: {patient.myDiary.SleepScale},
              My Diary- Step Counter: {patient.myDiary.StepCounter}, My Diary- Diary Entry: {patient.myDiary.DiaryEntry}</div>
              My Stats: {patient.myStats.AppUsage}</div>
              
             
            
            ))};
         
         </div>
        
        );
        
      };

  render() {
    const patient= this.state.patient;
    console.log(patient);
    
    return <div>{this.renderPatients()}</div>;
}
}
export default PatientList;

