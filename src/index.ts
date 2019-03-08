import './styles.css';

const inputBill = document.getElementById("bill");
let bill: number;
inputBill.addEventListener('keyup', function () {
    bill = Number((<HTMLInputElement>document.getElementById('bill')).value);
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
        return true;
    }
}
function ClearValues() {
    (<HTMLInputElement>inputBill).value = "";
    document.getElementById('tipPercent').innerText = "";
    document.getElementById('fullBill').innerText = "";
    document.getElementById('tipSelected').innerText = "";
    document.getElementById('tipAmount').innerText = "";
    document.getElementById('totalPaid').innerText = "";
}