//This script calculates the speed of a vehicle and gives an output
function speedCalculator(){
    const speedLimit = 70;//assigning the speed limit since it will not change
    let speed = 0;//Input the speed of the vehicle
    if(speed < speedLimit){
        return("Ok")
    }

    else if (speed > speedLimit) {
        let speedDifference = speed - speedLimit;//calculating the difference of the speed limit and the speed of the vehicle
        let demeritPoints = (speedDifference / 5);//dividing the speed difference by 5 because demerit points are added every 5km/h
        return(`This drivers's total demerit points are = ${demeritPoints}`)
    }
}
console.log(speedCalculator())