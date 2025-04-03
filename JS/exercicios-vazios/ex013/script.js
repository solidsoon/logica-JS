let salary = parseFloat(prompt("Insert your salary: "));
let bonus = parseFloat(prompt("Insert your bonus: "+"%"));

let bonusResult = (salary * bonus) / 100;
let Finalsalary = bonusResult + salary

alert("Seu salário com bonus é: "+Finalsalary.toFixed(2));