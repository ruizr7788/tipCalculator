// selectors----------------------------------
const billInput = document.getElementById("form_input--bill-amount");
const serviceEl = document.getElementById("tip_service");
const serviceNone = document.querySelector(".select_option--none");
const serviceGreat = document.querySelector(".select_option--great");
const serviceAvg = document.querySelector(".select_option--average");
const serviceBad = document.querySelector(".select_option--bad");
const numberOfPeopleInput = document.querySelector(".form_input--people");
const tipDisplay = document.querySelector(".tip_display");
const tipAmount = document.querySelector(".tip_amount");
const tipMessage = document.querySelector(".tip_message");
const calculateBtn = document.querySelector(".tip_button--calculate");
const errorMsgBill = document.querySelector(".error_message--bill");
const errorMsgPeople = document.querySelector(".error_message--people");
// End selectors-----------------------------

// CONSTANTS---------------------------------
const GREAT = 0.2;
const AVERAGE = 0.1;
const BAD = 0.05;
const DEFAULT = 0.15;

// variable information----------------------
let bill = [];
let numOfPeople = [];
let serviceType = [];

// functions---------------------------------
const displayTipMessage = () => tipDisplay.classList.remove("hidden");
const displayErrorMsgBill = () => errorMsgBill.classList.remove("hidden");
const displayErrorMsgPeople = () => errorMsgPeople.classList.remove("hidden");

const noneOption = function (bill, numOfPeopleSharing) {
  displayTipMessage();
  const total =
    numOfPeopleSharing.join("") === "0"
      ? bill * DEFAULT
      : (bill * DEFAULT) / numOfPeopleSharing;
  tipAmount.textContent = `$${total.toFixed(2)}`;
};

const badOption = function (bill, numOfPeopleSharing) {
  displayTipMessage();
  const total =
    numOfPeopleSharing.join("") === "0"
      ? bill * BAD
      : (bill * BAD) / numOfPeopleSharing;
  tipAmount.textContent = `$${total.toFixed(2)}`;
};

const averageOption = function (bill, numOfPeopleSharing) {
  displayTipMessage();
  const total =
    numOfPeopleSharing.join("") === "0"
      ? bill * AVERAGE
      : (bill * AVERAGE) / numOfPeopleSharing;
  tipAmount.textContent = `$${total.toFixed(2)}`;
};

const greatOption = function (bill, numOfPeopleSharing) {
  displayTipMessage();
  const total =
    numOfPeopleSharing.join("") === "0"
      ? bill * GREAT
      : (bill * GREAT) / numOfPeopleSharing;
  tipAmount.textContent = `$${total.toFixed(2)}`;
};

function clearAndShow() {
  billInput.value = "";
  numberOfPeopleInput.value = "";
  serviceEl.value = "--Choose an Option--";

  billInput.textContent = "";
  numberOfPeopleInput.textContent = "";
  numberOfPeopleInput.innerHTML = "";

  bill = [];
  numOfPeople = [];
  serviceType = [];
}

// receiving input information --------------
function insert() {
  // push input info onto new arrays
  bill.push(Number(billInput.value));
  numOfPeople.push(Number(numberOfPeopleInput.value));
  serviceType.push(serviceEl.value);
  //   check if any input is invalid
  if (bill.join("") !== "0" && numOfPeople.join("") >= "0") {
    //   call function based on service type
    serviceType.join("") === "--Choose an Option--" &&
      noneOption(bill, numOfPeople, serviceType);
    serviceType.join("") === "Bad" && badOption(bill, numOfPeople);
    serviceType.join("") === "Average" && averageOption(bill, numOfPeople);
    serviceType.join("") === "Great" && greatOption(bill, numOfPeople);
  } else {
    return bill.join("") <= "0"
      ? displayErrorMsgBill()
      : displayErrorMsgPeople();
  }

  clearAndShow();
}

calculateBtn.addEventListener("click", insert);
