// ============================================================================
// Week 6 Web Development Assignment: SpendWise Interactive Engine
// File: script.js
// ============================================================================

// 1. DATA STORAGE USING ARRAYS (Requirement 2)
// This state layer manages multiple records chronologically instead of individual variables
let transactions = [];

// 2. PROCESS DATA WITH LOOPS & UPDATE DOM (Requirement 3 & 4)
function calculateAndUpdateDashboard() {
    let totalIncome = 0;
    let totalExpenses = 0;

    // LOOP LAYER: Traverses the active data collection array to process records (Requirement 3)
    for (let i = 0; i < transactions.length; i++) {
        let currentTransaction = transactions[i];
        
        if (currentTransaction.amount > 0) {
            totalIncome += currentTransaction.amount;
        } else {
            totalExpenses += currentTransaction.amount; // Aggregates negative outflows
        }
    }

    let netBalance = totalIncome + totalExpenses;

    console.log("--- SpendWise Loop Calculation Report ---");
    console.log(`Total Tracked Records:   ${transactions.length}`);
    console.log(`Aggregated Income:       $${totalIncome.toFixed(2)}`);
    console.log(`Aggregated Expenses:     $${Math.abs(totalExpenses).toFixed(2)}`);
    console.log(`Calculated Net Balance:  $${netBalance.toFixed(2)}`);
    console.log("-----------------------------------------");

    // DYNAMIC DOM UPDATES: Injects variables into active interface blocks (Requirement 4)
    if (document.getElementById("money-plus")) {
        document.getElementById("money-plus").textContent = `+$${totalIncome.toFixed(2)}`;
    }
    if (document.getElementById("money-minus")) {
        document.getElementById("money-minus").textContent = `-$${Math.abs(totalExpenses).toFixed(2)}`;
    }
    if (document.getElementById("current-balance")) {
        if (netBalance >= 0) {
            document.getElementById("current-balance").textContent = `$${netBalance.toFixed(2)}`;
        } else {
            document.getElementById("current-balance").textContent = `-$${Math.abs(netBalance).toFixed(2)}`;
        }
    }
}

// 3. APPLICATION LOGIC FRAMEWORK FLOW ENGINE MANAGER (Requirement 6)
function runSpendWiseEngine() {
    
    // Collect parameters via interactive prompt frame dialogues
    let nameInput = prompt("Enter transaction description label (e.g. Freelance, Coffee):");
    if (nameInput === null || nameInput.trim() === "") {
        alert("Action aborted. A valid transaction description is required.");
        return;
    }

    let rawAmountInput = prompt("Enter amount (Positive numbers for Income, Negative signs for Outflow Expenses like -25):");
    let parsedAmount = parseFloat(rawAmountInput); // Data type transformation string to float

    // 4. DECISION MAKING VIA CONDITIONALS (Requirement 1)
    if (!isNaN(parsedAmount) && parsedAmount !== 0) {
        
        let categoryInput = prompt("Enter a category label (e.g. Salary/Income, Groceries, Rent, Transport):");
        if (categoryInput === null || categoryInput.trim() === "") {
            categoryInput = "Other";
        }

        // Structure a multi-attribute data record item object
        let newRecord = {
            name: nameInput.trim(),
            amount: parsedAmount,
            category: categoryInput.trim(),
            date: new Date().toISOString().split('T')[0] // Generates automated YYYY-MM-DD string
        };

        // Append the record item into our global memory array collection
        transactions.push(newRecord);

        // Run the dynamic evaluation computational loop pipeline
        calculateAndUpdateDashboard();

        // 5. INJECT DYNAMIC TRANSCRIPT ROW TO HISTORICAL LEDGER TABLE
        const historyTableBody = document.getElementById("transaction-history");
        if (historyTableBody) {
            let newRow = document.createElement("tr");
            
            let amountClass = newRecord.amount > 0 ? "amount-income" : "amount-expense";
            let amountSign = newRecord.amount > 0 ? "+" : "-";
            
            newRow.innerHTML = `
                <td>${newRecord.name}</td>
                <td class="${amountClass}">${amountSign}$${Math.abs(newRecord.amount).toFixed(2)}</td>
                <td>${newRecord.category}</td>
                <td>${newRecord.date}</td>
            `;
            
            historyTableBody.appendChild(newRow);
        }

    } else {
        alert("[INPUT VALIDATION ERROR]: Please enter a true non-zero numeric amount value.");
    }
}

// 6. BIND INTERACTIVE EXECUTION LISTENER HOOK TO THE ELEMENT FRAME (Requirement 5)
document.getElementById("btn-calculate").addEventListener("click", runSpendWiseEngine);
