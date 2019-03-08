import './styles.css';

const inputBill = document.getElementById("bill");
let bill: number;
inputBill.addEventListener('keyup', function () {
    bill = Number((<HTMLInputElement>document.getElementById('bill')).value);
})
const people = document.getElementById("people");
let persons: number;
people.addEventListener('keyup', function () {
    persons = Number((<HTMLInputElement>document.getElementById('people')).value);
})

const buttons = document.querySelectorAll('.button');

buttons.forEach(b => b.addEventListener('click', function () {
    if (CheckBill()) {
        let prct = Number(b.id);
        DisableEnable(prct);
        Calculate(prct);
    }
}))

function DisableEnable(prct: number) {
    buttons.forEach(b => {
        if (Number(b.id) === prct) {
            (<HTMLButtonElement>b).disabled = true;
        }
        else {
            (<HTMLButtonElement>b).disabled = false;
        }
    })
}
function Calculate(prct: number) {
    console.log('inside Calculate');
    document.getElementById('tipPercent').innerText = prct.toString() + '%';
    document.getElementById('fullBill').innerText = '$' + bill.toString();
    document.getElementById('tipSelected').innerText = prct.toString() + '%';
    let tipAmt = bill * prct / 100;
    document.getElementById('tipAmount').innerText = '$' + tipAmt.toFixed(2);
    document.getElementById('personPaid').innerText = '$' + ((bill + tipAmt) / persons).toFixed(2);
    document.getElementById('totalPaid').innerText = '$' + (bill + tipAmt).toFixed(2);
}
function CheckBill(): boolean {
    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount");
        (<HTMLInputElement>inputBill).classList.add('error');
        ClearValues();
        return false;
    } else {
        (<HTMLInputElement>inputBill).classList.remove('error');
        if (isNaN(persons) || !persons) {
            alert("Assuming 1 person in the party");
            (<HTMLInputElement>people).value = "1";
            persons = 1;
        }
        return true;
    }
}
function ClearValues() {
    (<HTMLInputElement>inputBill).value = "";
    (<HTMLInputElement>people).value = "";
    document.getElementById('tipPercent').innerText = "";
    document.getElementById('fullBill').innerText = "";
    document.getElementById('tipSelected').innerText = "";
    document.getElementById('tipAmount').innerText = "";
    document.getElementById('personPaid').innerText = "";
    document.getElementById('totalPaid').innerText = "";
}