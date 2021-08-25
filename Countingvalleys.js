// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly "steps" steps, for every step it was noted if it was an uphill,U , or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

// Example

//  steps = 8 path = [DDUUUUDD]

// The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain  units high. Finally, the hiker returns to sea level and ends the hike.

// Function Description

// Complete the countingValleys function in the editor below.

// countingValleys has the following parameter(s):

// int steps: the number of steps on the hike
// string path: a string describing the path

function countingValleys(steps, path) {
    // Write your code here
// split the string into an array of substrings
let s = path.split("");
// this variable will hold how many valleys the hiker has been through
let valleyCount = 0;
// this variable will keep track of current sea level status 
let currentSeaLevel = 0;
// this variable will check if hiker is an a valley
let valleyStatus = false;

s.forEach(s => {
    // checking if "U" then add to sealevel otherwise subtract 
  s === 'U' ? currentSeaLevel++ : currentSeaLevel--;
  // if both are true than add to valleycount and set valleyStatus to true
    if(currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true
      // otherwise you are above sea level and valleystatus is false
    } else if(currentSeaLevel >= 0 && valleyStatus) {
      valleyStatus= false
    }
  })
  return valleyCount;

}