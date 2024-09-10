function calculateTax(income, expenses) {

    // You have to write your code here
    if(income < 0 || expenses < 0 || income < expenses)
        return "Invalid Input";
    
    let saveMoney = income - expenses;
    return (saveMoney * 20) / 100;
}


function sendNotification(email) {

    // You have to write your code here
    if(!email.includes('@')) return "Invalid Email";
    
    let fName = email.split("@");
    return fName[0] + " sent you an email from " + fName[1];
}


function checkDigitsInName(name) {

    //write your code here
    if(typeof name != 'string') return "Invalid Input";

    if(name.includes(1,2,3,4,5,7,8,9,0)) return true;
    else return false;
}


function calculateFinalScore(obj) {

          //write your code here
        if(typeof obj != 'object') return "Invalid Input";
        let { name, testScore, schoolGrade, isFFamily } = obj;
        
        if(testScore > 50 ||schoolGrade > 30 || typeof name != 'string' || typeof isFFamily != 'boolean') return "Invalid Input";
        let score = testScore + schoolGrade;
        if(isFFamily && score + 20 >= 80) return true; 
        return false;
}


function  waitingTime(waitingTimes  , serialNumber) {

    // You have to write your code here
    if(!Array.isArray(waitingTimes) || typeof serialNumber != 'number') return "Invalid Input";
    let sum = 0;
    for(let a of waitingTimes){
        sum += a;
    }
    
    let mySerial = (serialNumber - waitingTimes.length) -1;
    let avg = Math.round((sum / waitingTimes.length));
    return avg * mySerial;
}
