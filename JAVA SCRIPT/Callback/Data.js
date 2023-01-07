let employees = [{ id: 101, name: "Rahul", email: "rahul@pm.com" },
{ id: 102, name: "masthan babu", email: "sunkumasthanbabu@gmail.com" }]

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, [4000])
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = ""
        employees.map((employee) => {
            rows = rows + `<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.email}</td>
                           </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, [1000])
}
createEmployee({ id: 103, name: "Priyanka", email: "priya@gmail.com" }, getEmployees)