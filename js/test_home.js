let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
  empPayrollList = getEmployeePayrollDataFromStorage();
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
  return localStorage.getItem('EmployeePayrollList') ?
                      JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
  if (empPayrollList.length == 0) return;
  const headerHtml = "<th></th><th>Name</th> <th>Gender</th><th>Department</th>" +
                     "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
  let innerHtml =`${headerHtml}`;       
  for(const empPayrollData of empPayrollList) {
   innerHtml = `${innerHtml}        
  <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData.salary}</td>
    <td>${empPayrollData.date}</td>
    
    <td>
      <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.PNG" alt="delete">
      <img id="${empPayrollData._id}" onclick="remove(this)" src="../assets/icons/create-black-18dp.PNG" alt="edit">
    </td>
  </tr>
  `;
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for(const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}