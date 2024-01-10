const globalUrl ="https://backend-learn-kmt8.onrender.com"

let usersRow = document.getElementById("users-roll");
const table_name_body=document.getElementById("table-name-body");

const tableContainer = document.getElementById("table-container");

const tableDetailsContainer = document.getElementById("table-details-container")

const getPatientsName = async () => {
    try{
        console.log("started now")
      const patients = await axios.get(`${globalUrl}/user/`)
    //   console.log(patients, "from patient list")
      const returnedPatients = await patients.data.msg
      console.log(returnedPatients, "from patient list")
      let table = `<table>`;
      table +=`
        <thead>
            <tr class="row100 head">
                <th class="cell100 column1">Patients Name</th>
            </tr>
        </thead>
      `
    //   let tr = `<tr class="row100 body">`
      
      for (let patient of returnedPatients){
        table +=`
        <tbody id="table-name-body">
            <tr class="row100 body" id="users-roll">
                <td class="cell100 column1">${patient.patient_Name}</td>
            </tr>
        </tbody>
        `
        // tr += `<td class="cell100 column1">${patient.patient_Name}</td>`

        console.log(patient, "patient")
      }
    //   tr += `</tr>`
      table += `</table>`
      tableContainer.innerHTML=table
      console.log(table, "table")
    //   table_name_body.innerHTML = tr
      return tr;
    }catch(err){
      console.log(err)
    }
  }
  
//   getPatientsName();

//   usersRow.innerHTML = getPatientsName()


const getPatientsDetails = async () => {
    try{
        console.log("started now")
      const patients = await axios.get(`${globalUrl}/user/`)
    //   console.log(patients, "from patient list")
      const returnedPatients = await patients.data.msg
      console.log(returnedPatients, "from patient list")

      let table = `<table>`;
      table +=`
      <thead>
        <tr class="row100 head">
            <th class="cell100 column2">Patient Name</th>
            <th class="cell100 column2">Primary Care Physician</th>
            <th class="cell100 column2">Date of birth</th>
            <th class="cell100 column2">address</th>
            <th class="cell100 column2">Email</th>
            <th class="cell100 column2">MMJ Card/MMCC ID</th>
            <th class="cell100 column2">Expiring date</th>
            <th class="cell100 column2">Driver’s License</th>
            <th class="cell100 column2">Driver’s License expiring date</th>
            <th class="cell100 column2">Home phone</th>
            <th class="cell100 column2">Cell phone</th>
            <th class="cell100 column2">Registered Caregiver</th>
            <th class="cell100 column2">veteran</th>
            <th class="cell100 column2">Qualifying Condition</th>
            <th class="cell100 column2">Other medical condition</th>
        </tr>
     </thead>
      `
    //   let tr = `<tr class="row100 body">`
   
MMJ_Card_exp_Date
: 
"2024-01-04"
accept_privacy_policy_and_practice
: 
"false"
address
: 
"address 123"
cell_phone
: 
"0908765342"
createdAt
: 
"2024-01-05T15:32:08.306Z"
date_of_birth
: 
"2024-01-04"
driver_License
: 
"driver 009"
driver_License_exp_Date
: 
"2024-02-11"
email
: 
"queen@lmnurse.ca"
home_phone
: 
"0908765467"
patient_Name
: 
"Julie"
primary_care_physician
: 
"lsdkldll"
registered_caregiver
: 
"some care giver"
      
      for (let patient of returnedPatients){
        table +=`
        <tbody>
            <tr class="row100 body">
                <td class="cell100 column2">${patient?.patient_Name}</td>
                <td class="cell100 column2">${patient?.primary_care_physician}</td>
                <td class="cell100 column2">${patient?.date_of_birth}</td>
                <td class="cell100 column2">${patient?.address}</td>
                <td class="cell100 column2">${patient?.email}</td>
                <td class="cell100 column2">${patient?.MMCC_ID}</td>
                <td class="cell100 column2">${patient?.MMJ_Card_exp_Date}</td>
                <td class="cell100 column2">${patient?.driver_License}</td>
                <td class="cell100 column2">${patient?.driver_License_exp_Date}</td>
                <td class="cell100 column2">${patient?.home_phone}</td>
                <td class="cell100 column2">${patient?.cell_phone}</td>
                <td class="cell100 column2">${patient?.registered_caregiver}</td>
                <td class="cell100 column2">${patient?.primary_care_physician}</td>
                <td class="cell100 column2">${patient?.are_you_a_veteran}</td>
                <td class="cell100 column2">424242xxxxxx6262</td>
            </tr>
        </tbody>
        `
        // tr += `<td class="cell100 column1">${patient.patient_Name}</td>`

        console.log(patient, "patient")
      }
    //   tr += `</tr>`
      table += `</table>`
      tableDetailsContainer.innerHTML=table
      console.log(table, "table")
    //   table_name_body.innerHTML = tr
      return tr;
    }catch(err){
      console.log(err)
    }
  }

  getPatientsDetails()