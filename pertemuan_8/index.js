let account = {
    Name: "Rondonuwu",
    Expenses: [],
    addExpenses: function(description, amount){
        this.Expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.Expenses.forEach(function (el){
            totalExpenses = totalExpenses + el.amount;
        });
    return totalExpenses;
    }
};
account.addExpenses('Bayar SPP', 8000000);
account.addExpenses('Beli Laptop ', 4500000);
console.log("Total pengeluaran " + account.Name + " adalah Rp." + account.getAccountSummary());