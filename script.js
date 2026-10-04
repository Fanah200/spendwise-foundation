// ============================================================================
// Week 5 Web Development Assignment: SpendWise JavaScript Foundation
// File: script.js
// ============================================================================

// 1. Reusable Functional Calculations Engine (Requirement 5)
function calculateRemainingBalance(budget, totalExpenses) {
    // Performs mathematical subtraction calculation arithmetic processing (Requirement 4)
    return budget - totalExpenses;
}

// 2. Application Logic Framework Flow Engine Manager
function runSpendWiseEngine() {
    console.log("--- SpendWise Foundation Analysis Initialized ---");

    // 3. Collect User Inputs via interactive Prompts (Requirement 2 & 3)
    let rawBudgetInput = prompt("Enter your Starting Budget allocation number (e.g. 2000):");
    let startingBudget = parseFloat(rawBudgetInput); // Data type transformation conversion string to float

    let rawExpenseInput = prompt("Enter your Total Accumulated Outflow Expenses (e.g. 620):");
    let totalExpenses = parseFloat(rawExpenseInput);

    // 4. Input Validation checks to ensure calculations execution safety
    if (isNaN(startingBudget) || isNaN(totalExpenses)) {
        console.error("[SYSTEM ERROR]: Processing terminated due to non-numeric entries.");
        alert("Execution failed. Please refresh and input valid numerical values.");
        return;
    }

    // 5. Compute Remaining Balances via functional layers (Requirement 4)
    let remainingBalance = calculateRemainingBalance(startingBudget, totalExpenses);

    // 6. Display Clearly Labeled Structured Structural Results to Browser Console (Requirement 6)
    console.log(`Starting Budget Input:     $${startingBudget.toFixed(2)}`);
    console.log(`Total Tracked Expenses:    $${totalExpenses.toFixed(2)}`);
    console.log("-------------------------------------------------");
    console.log(`Calculated Net Balance:    $${remainingBalance.toFixed(2)}`);

    // Budget Status Logic Threshold Evaluation Indicators
    if (remainingBalance < 0) {
        console.log("ALERT STATUS: Current expenses cross active capital thresholds! Deficit.");
    } else {
        console.log("STATUS OVERVIEW: Accounts stable. Capital surplus effectively maintained.");
    }
    console.log("--- End of Diagnostics Log Framework Stream ---");

    // 7. Dynamic UI View Modification Injections (Updates your HTML cards live!)
    if (document.getElementById("current-balance")) {
        document.getElementById("current-balance").innerText = `$${remainingBalance.toFixed(2)}`;
    }
    if (document.getElementById("money-minus")) {
        document.getElementById("money-minus").innerText = `-$${totalExpenses.toFixed(2)}`;
    }
    if (document.getElementById("money-plus")) {
        document.getElementById("money-plus").innerText = `+$${startingBudget.toFixed(2)}`;
    }

    alert("Analysis Complete! Open your Browser Developer Tools Console (F12) to examine labeled report logs.");
}

// 8. Bind interactive execution listener hook to your new button selector frame
document.getElementById("btn-calculate").addEventListener("click", runSpendWiseEngine);
