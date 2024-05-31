function showWorkDetails(isWorking) {
    const workDetailsDiv = document.getElementById('workDetails');
    if (isWorking) {
        workDetailsDiv.style.display = 'block';
    } else {
        workDetailsDiv.style.display = 'none';
    }
}
function calculateSalary() {
    const hoursWorked = document.getElementById('hoursWorked').value;
    const hourlyRate = document.getElementById('hourlyRate').value;
    const taxRate = document.getElementById('taxRate').value;
    if (hoursWorked && hourlyRate && taxRate) {
        const grossSalary = hoursWorked * hourlyRate;
        const taxAmount = grossSalary * (0.14);
        const netSalary = grossSalary - taxAmount;
        const resultDiv = document.getElementById('salaryResult');
        resultDiv.innerHTML = `Gross Salary: R${grossSalary.toFixed(2)}
                               Tax Amount: R${taxAmount.toFixed(2)}
                               Net Salary: R${netSalary.toFixed(2)}`;
    } else {
        alert('Please fill out all fields.');
    }
}

