window.addEventListener('DOMContentLoaded', (event) => {
  createInnerHtml();
});

const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th> <th>Gender</th><th>Department</th>" +
                     "<th>Salary</th> <th>Start Date</th> <th>Actions</th>";
  const innerHtml = `${headerHtml}        
  <tr>
    <td><img class="profile" src="../assets/profile-pictures/profile2.jpg" alt=""></td>
    <td>Abhishek</td>
    <td>Male</td>
    <td><div class="dept-label">HR</div>
      <div class="dept-label">Finance</div></td>
      <td>300000</td>
      <td>1 June 2021</td>
      <td>
        <img id="1" onclick="remove(this)" src="../assets/icons/delete-black-18dp.PNG" alt="delete">
        <img id="1" onclick="remove(this)" src="../assets/icons/create-black-18dp.PNG" alt="edit">
      </td>
  </tr>
  `;
  document.querySelector('#table-display').innerHTML = innerHtml;
}