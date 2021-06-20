window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th> <th>Gender</th><th>Department</th>" +
                     "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
  let innerHtml =`${headerHtml}`;
  let empPayrollList = createEmployeePayrollJSON();
  for(const empPayrollData of empPayrollList) {
   innerHtml = `${innerHtml}        
  <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._salary}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
      <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.PNG" alt="delete">
      <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/create-black-18dp.PNG" alt="edit">
    </td>
  </tr>
  `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
    {
      _name: 'Abhishek',
      _gender: 'male',
      _department: [
        'Engineer',
        'Finance',
      ],
      _salary: '500000',
      _startDate: '21 June 2021',
      _note: '',
      _id: new Date().getTime(),
      _profilePic: '../assets/profile-pictures/profile2.jpg' 
    },
    {
      _name: 'Mary John Jain',
      _gender: 'female',
      _department: [
        'Sales',
      ],
      _salary: '400000',
      _startDate: '21 June 2021',
      _note: '',
      _id: new Date().getTime() + 1,
      _profilePic: '../assets/profile-pictures/profile1.jpg' 
    },
  ];
  return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for(const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}