# SpendWise - Interactive Personal Budget & Expense Tracker

SpendWise is a responsive web application designed to help users log financial transactions, track categories, and monitor their active balance states dynamically in real-time.

## Week 6 Improvements Made
* **Dynamic State Infrastructure:** Upgraded the application from a static showcase page into a fully reactive dashboard app.
* **Interactive Prompts Engine:** Hooked up browser-native workflows to accept user parameters natively on form interaction.
* **Algorithmic Total Summation:** Implemented automated math operations across historical inputs to keep financial figures aligned accurately.

## Core JavaScript Architecture Implemented

### 1. Decision Making via Conditionals
Conditionals (`if/else` statements) handle system validation logic. The code evaluates incoming inputs to ensure amounts are valid non-zero digits (`!isNaN(parsedAmount) && parsedAmount !== 0`). It also checks transaction directions (`amount > 0`) to dynamically branch numbers into separate income or expense ledger pipelines.

### 2. Multi-Record Storage via Arrays
Instead of tracking separate entries in isolated data values, transaction collections are captured inside a global list array named `transactions`. Each time an item is recorded, it formats into an object record containing `{ name, amount, category, date }` parameters for structured storage.

### 3. Processing Data with Loops
Data aggregation is calculated iteratively. Every time a new transaction updates the application state, a dedicated `for` loop executes across the `transactions` array. The loop visits every record inside the collection to calculate total metrics dynamically before rendering balances.

### 4. Dynamic DOM Updates
Webpage text components transform asynchronously without standard document refreshes. The application leverages elements like `textContent` to modify dashboard panels (`#current-balance`, `#money-plus`, `#money-minus`). Furthermore, it creates new rows programmatically via `document.createElement("tr")` to inject incoming records right into the historical ledger view.

### 5. Event Handling & Interaction
All execution procedures are managed through DOM event mapping. By setting up an element query listener (`addEventListener("click")`) directly onto the control action target (`#btn-calculate`), user clicks successfully trigger data collections, process loop logic, and balance calculations immediately.

## Technical Challenges Encountered & Resolutions
* **Challenge:** Extracting values through browser windows naturally treats values as clean strings, which causes math addition operators to concatenate values textually (e.g., `100 + 50` outputs as `10050`).
* **Resolution:** Solved by routing target variables through explicit arithmetic wrappers using `parseFloat()`, casting standard numeric characters into computational float states before saving records.
