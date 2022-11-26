//This script calculates the speed of a vehicle and gives an output
function speedCalculator(){
//Input the speed
    const speedLimit = 70;//assigning the speed limit
    let speed =0;
    if(speed < speedLimit){
        return("Ok")
    }

    else if (speed > speedLimit) {
        let speedDifference = speed - speedLimit;//calculating the difference between the speed limit and the speed of the vehicle
        let demeritPoints = (speedDifference / 5);//dividing the speed difference by 5 because points are added every 5km/h
        return(demeritPoints)
    }
}
console.log(speedCalculator())



