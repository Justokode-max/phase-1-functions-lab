// Code your solution in this file!
distanceFromHqInBlocks(43);
function distanceFromHqInBlocks(currentLocation){
    const headQuarter=42;
    let distance=headQuarter-currentLocation;
     distance=Math.abs(distance);
     return distance;
}
function distanceFromHqInFeet(currentLocation){
    const headQuarter=42;
    let distance=headQuarter-currentLocation;
     distance=Math.abs(distance);
     
    let distanceInFeet=distance*264;
    return distanceInFeet;

}
function distanceTravelledInFeet(start,destination){
    
     
    let distanceInFeet=Math.abs((start-destination)*264);
    return distanceInFeet;

}
function calculatesFarePrice(start,destination){
    let distanceInFeet=Math.abs((start-destination)*264)
    
        if (distanceInFeet<400){
            return 0;
        }else if(distanceInFeet>400 && distanceInFeet<=2000){
            return (distanceInFeet-400)*0.02;
        }else if(distanceInFeet>2000 && distanceInFeet<2500){
            return 25;
        }else if (distanceInFeet>2500){
            return "cannot travel that far"
        }
           
           
          
    }  
