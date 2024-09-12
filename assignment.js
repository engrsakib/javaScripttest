function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) return "Invalid Input";

  let saveMoney = income - expenses;
  return (saveMoney * 20) / 100;
}

function sendNotification(email) {
  if (!email.includes("@")) return "Invalid Email";

  let fName = email.split("@");
  return fName[0] + " sent you an email from " + fName[1];
}

function checkDigitsInName(name) {
  if (typeof name != "string") return "Invalid Input";

  for (let i = 0; i < name.length; i++) {
    if (!isNaN(name[i]) && name[i] !== " ") return true;
  }
  return false;
}

function calculateFinalScore(obj) {
  if (typeof obj != "object") return "Invalid Input";
  let { name, testScore, schoolGrade, isFFamily } = obj;

  if (
    testScore > 50 ||
    schoolGrade > 30 ||
    typeof name != "string" ||
    typeof isFFamily != "boolean"
  )
    return "Invalid Input";
  let score = testScore + schoolGrade;
  if (isFFamily && score + 20 >= 80) return true;
  return false;
}

function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber != "number")
    return "Invalid Input";
  let sum = 0;
  for (let a of waitingTimes) {
    sum += a;
  }

  let mySerial = serialNumber - waitingTimes.length - 1;
  let avg = Math.round(sum / waitingTimes.length);
  return avg * mySerial;
}
