var money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,        
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if (a != '' && b != '' && (typeof(a)) != null && (typeof(b)) != null && (typeof(a)) === 'string' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
    
            }
        }
    },

    detectDayBudget: function () {
        appData.expensesPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет: " + appData.expensesPerDay);
    },

    detectLevel: function () {
        if (appData.expensesPerDay < 500) {
            console.log('Small');
        } else if (appData.expensesPerDay >= 500 && appData.expensesPerDay < 1500) {
            console.log('Medium');
        } else if (appData.expensesPerDay >= 1500) {
            console.log('Big');
        } else {
            console.log('Error2');
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            
            appData.mounthIncome = save/100/12*percent;
            alert("Доход в месяц с Вашего депозита: " + appData.mounthIncome); 
        }
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите НЕобязательную статью расходов в этом месяце", ''),
                b = +prompt("Во сколько обойдется?", '');
            if (a != '' && b != '' && (typeof(a)) != null && (typeof(b)) != null && (typeof(a)) === 'string' && a.length < 50) {
                appData.expenses[a] = b;
            } else {
    
            }
        }
    },

    chooseIncome: function () {
        let items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");

        while (items == '' || items == null || typeof(items) != 'string') {
            items = prompt("Что принесёт дополнительный доход? (Перечислите через запятую)", "");
        }

        appData.income = items.split(', ');
        appData.income.push(prompt("Возможно что-то еще?"));
        appData.income.sort();
        appData.income.forEach(function(item, i) {
            alert("Способы доп.зароботка: " + (i + 1) + '. ' + item);
        })
    }
};

for (item in appData) {
    console.log ("Наша программа включает в себя: " + item);
}

