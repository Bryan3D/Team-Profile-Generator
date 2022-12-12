


const generateManagerCard = (manager) => {
    return `
    <div class="manager-card col-4 mt-4">
            <div class="card h-100">
            
            <div class="card-header text-white bg-dark">
                
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
                <i class="material-icons">content_paste</i>
              </div>

              <div class="card-body text-dark">
                <p class="employeeId">ID: 007</p>
                <p class="email">Email:<a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
              </div>
            </div>
          </div>
`
}