# SpendWise - Personal Budget & Expense Tracker

A beautiful, clean, and intuitive responsive interface designed to help users log, balance, and track personal expenses seamlessly.

---

## 🚀 Week 4 Layout Updates (Dashboard Shell Architecture)

This week, the layout has been upgraded from a basic linear document flow into a high-fidelity, dual-axis dashboard structure utilizing modern CSS positioning systems.

### 1. Macro Layout Shell (CSS Grid Framework)
* **Structural Blueprint:** The main container (`#tracker-app`) implements a clean **CSS Grid Layout Matrix** generating explicit template tracks for our `header`, `sidebar`, and `main` layout zones. 
* **Zero Position Overrides:** Absolute positioning layouts are completely avoided to maintain a clean layout lifecycle and ensure pixel-perfect flexibility.

### 2. Custom Navigation Sidebar Menu (CSS Pseudo-Elements)
* **HTML Protection:** To preserve our core Weeks 1–3 HTML structure completely unaltered, the required **Sidebar Navigation Menu** is injected visually into the layout grid track using CSS pseudo-elements (`#tracker-app::before`).
* **Static Content:** Displays realistic dashboard sections: *📁 Dashboard, 📊 Analytics, 💰 Budgets, 📜 Ledger,* and *⚙️ Settings*.

### 3. Financial Category Grid Matrix (6 Interactive Cards)
* **Table-to-Grid Transformation:** The standard tabular boundaries of our transaction `<tbody>` are upgraded using CSS Grid to reflow columns fluidly (`repeat(auto-fit, minmax(260px, 1fr))`).
* **Freestanding Cards:** This forces our existing row assets (`<tr>`) to instantly detach from table structures and transform into individual visual category tracking cards.
* **Card 6 CSS Injection:** To meet the threshold of **at least six category cards** without modifying our `index.htm` markup, Card 6 (*Utilities & Fuel*) is generated directly into the 2D grid matrix via pseudo-element injection rules (`tbody::after`).

### 4. Interactive Micro-interactions (`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`) to manage logged user financials.
### 2. Upgraded Input Capture
- Built-in secure drop-down picker panel (`<select>`) hosting core structural budget assignments.
- Implemented corresponding form mapping fields via matching ID anchors (`id="text-input"`, `id="amount-input"`, `id="category-input"`, `id="date-input"`).
### 3. Multimedia Features & Interactivity
- Placed an illustrative asset logo (`<img>`) inline with the app title.
- Provided an educational presentation viewport (`<iframe>`) pointing to budget strategies, combined with an interactive collapsible summary component (`<details>`).

---

## 💻 Week 5 JavaScript Foundation Engine

This week, the SpendWise application was transformed from a purely visual presentation layout into a functional data-processing web tool utilizing core JavaScript logic layers.

### 1. Variables and Data Types Implementation
* **Dynamic Scoping:** Core calculations handle variables using block-scoped local parameters (`let`) to manage arithmetic states safely.
* **Type Casting Data Transformation:** Interactive inputs are fetched as text string fragments and explicitly transformed into numeric figures via `parseFloat()` to execute valid mathematical evaluations.

### 2. Live User Input Capture
* **Native Dialogue Window Frames:** Information assets are collected in real-time by mounting modal intercept windows (`prompt()`) bound to the interface activation hooks.

### 3. Arithmetic Calculation Infrastructure
* **Resource Balance Deductions:** The processing layer computes active financial conditions using arithmetic operation parameters (`budget - expenses`) to map tracking states cleanly.

### 4. Modular Reusable Architecture Functions
* **Logic Isolation Boundaries:** Following production design standards, mathematical formulas are decoupled cleanly inside dedicated functions (`calculateRemainingBalance()`) to separate core computation logic from structural view manipulation.

### 5. Diagnostics Labeled Console Logging
* **Structured Trace Reports:** Calculated transaction objects are piped directly into the browser developer platform tools using clean output tags (`console.log()`), matching precise layout strings and tracking status limits formatted safely via `.toFixed(2)`.
