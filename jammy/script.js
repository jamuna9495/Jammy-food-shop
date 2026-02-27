// 1. Birthday Food Calculation Logic
function checkBirthdayFood() {
    const month = document.getElementById('birthMonth').value;
    const resultArea = document.getElementById('birthFoodResult');
    
    if (!month) {
        resultArea.innerHTML = "";
        return;
    }

    // Find food based on month
    const luckyFood = foods.find(f => f.month === month);

    // Dynamic HTML for Birthday result
    resultArea.innerHTML = `
        <div class="birth-result-box">
            <h4 style="margin: 0; color: #ff4757;">✨ Your Birthday Special</h4>
            <p>Based on your month, your soul food is <b>${luckyFood.name}</b>!</p>
            <p style="font-size: 1.2rem;">Price: <b>₹${luckyFood.price}</b></p>
            <button class="btn" style="padding: 8px 15px; font-size: 0.8rem;" 
                onclick="addToCart(${luckyFood.id})">Order Birthday Food</button>
        </div>
    `;
}

// 2. Advanced Billing Logic
let cartItems = [];
let grandTotal = 0;

function addToCart(id) {
    const item = foods.find(f => f.id === id);
    
    // Add to Cart Array
    cartItems.push(item);
    
    // Update Total
    grandTotal += item.price;
    
    // UI Updates
    document.getElementById('totalDisplay').innerText = grandTotal;
    
    // Mini Notification
    showToast(`${item.name} added to your bill!`);
}

// 3. Invoice Generation
function showInvoice() {
    const list = document.getElementById('invoiceItems');
    const finalTotal = document.getElementById('finalTotal');
    
    if (cartItems.length === 0) {
        alert("Your order list is empty!");
        return;
    }

    list.innerHTML = cartItems.map((item, index) => `
        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px dashed #ddd;">
            <span>${index + 1}. ${item.name}</span>
            <span>₹${item.price}</span>
        </div>
    `).join('');

    finalTotal.innerText = grandTotal;
    document.getElementById('invoiceModal').classList.remove('hidden');
}

// 4. Toast Notification System
function showToast(msg) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: #2f3542; color: white; padding: 12px 25px;
        border-radius: 50px; z-index: 999; animation: popUp 0.3s ease;
    `;
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}