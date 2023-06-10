/* Your Code Here */

function createEmployeeRecord(arr){
    const employeeRecord = {
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
 
    }
    return employeeRecord
 }

 function createEmployeeRecords(arrays){
    const myRecords = arrays.map(createEmployeeRecord)
    return myRecords
    
  }

  function createTimeInEvent(dateStamp){
         
        this. timeInEvents.push({
             type: "TimeIn",
             hour: parseInt(dateStamp.split(" ")[1]),
             date: (dateStamp.split(" ")[0])
         })
         return this 

  }

  function createTimeOutEvent(dateStamp){
         
    this. timeOutEvents.push({
         type: "TimeOut",
         hour: parseInt(dateStamp.split(" ")[1]),
         date: (dateStamp.split(" ")[0])
     })
     return this 

}

function hoursWorkedOnDate(dateStamp){
    let hours = []
    this.timeOutEvents.map(e => {
        if (e.date === dateStamp ){
            hours.push(e.hour)
        }})
    this.timeInEvents.map(e => {
        if (e.date === dateStamp) {
            hours.push(e.hour)
        }})
    return ((hours[0]-hours[1]) * .01)
      
}
  function wagesEarnedOnDate(dateStamp){
    return hoursWorkedOnDate.call(this,dateStamp) * this.payPerHour


  }

  function findEmployeeByFirstName(srcArray, firstName){
    return (srcArray.find(rec => {
       return rec.firstName === firstName
    }))
  }

  function calculatePayroll(employeeRecordArr){
    const wages= []
   employeeRecordArr.map(record => wages.push(allWagesFor.call(record)))
    return wages.reduce((a, b) => a+b)
  }



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

