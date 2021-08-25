// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n = 7
// ar = [1,2,1,2,1,3,2]

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints
//  1 <= n <= 100
//  1 <= ar[i] <= 100 where 0<= i < n

 function sockMerchant(n, ar) {
    // Write your code here
    // create a result variable set to 0;
    var result = 0;
    // sort through array
    ar.sort()
    //iterate over array
    for(let i = 0; i < n; i++){
        // check if ar[i] is the same as the following number
        if(ar[i] == ar[i + 1]){
            // incrememt i
            i++; 
            // increment result 
            result++; 
        }
    }
    // return the number of pairs 
    return result;
}