const employee = {
    name: "Beau" ,
    streetAddress: "692 knickerbocker",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeTwo = {...employee};
    
    employeeTwo[key] = value;

    return employeeTwo;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeTwo = {...employee};

    delete employeeTwo.name;

    return employeeTwo;
}

function destructivelyDeleteFromEmployeeByKey() {
    delete employee.name;
    return employee;
}