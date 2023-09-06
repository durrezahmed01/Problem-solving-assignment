// 1. Given a sorted array A (which is sorted in ascending order), having N integers,
//  examine if there exists any pair of elements (A[i], A[j]) such that their sum is equal to X.



function ArrP(A,X){
    
    let L=0, n=A.length, R= n-1 
    
    
    while(L<R){   
    
    if(A[L]+A[R]===X){
        return true;
    }
    else if(A[L]+A[R]>X){
        R--;
    }
    else if(A[L]+A[R]<X){
        L++;
    }
    }
    return false;
    }
    console.log(ArrP([1,2,3,3],7));

// 2. Given an integer array nums of length n and an integer target, 
//find two integers in nums such that the sum is closest to target.

function Arr2(A,target){
    let i=0,n=A.length,j=n-1
    let diff= Infinity;
    let z = []
    while(i<j){
        let sum = A[i]+A[j]
        let curdiff = Math.abs(target-sum)
         
        if(curdiff<diff){
         diff = curdiff
         z= [A[i],A[j]]
        }
        if(sum>target) {
         j--;
        }
        else{
            i++;
        }

    }
    
return z

}
    
console.log(Arr2([1,2,3,4,5],5.7))






// 3. Given a sorted array of integers, find all pairs that sum to zero.

function Arr3(A){
    
    let L=0, n=A.length, R= n-1 
    
    
    while(L<R){   
    
    if(A[L]+A[R]===0){
        return true;
    }
    else if(A[L]+A[R]>0){
        R--;
    }
    else if(A[L]+A[R]<0){
        L++;
    }
    }
    return false;
    }
    console.log(Arr3([1,2,-1,3]));





// 4. Given a sorted array, count the unique values.
function Arr4(A){ 
    let count=0;
     for(let i=0;i<A.length;i++){
         if(A[i] !== A[i+1]){
             count+=1
         }
         else{
         continue;
         }
     }
     console.log(count);
 
 }
    
     Arr4([1,2,3,4]);




// 5. Given a sorted array of integers and a target average, 
//determine if there is a pair of values in the array that average to the target value.

function Arr5(A,X){
    
    let L=0, n=A.length, R= n-1 
    
    
    while(L<R){   
    
    if(A[L]+A[R]/2===X){
        return true;
    }
    else if(A[L]+A[R]/2>X){
        R--;
    }
    else if(A[L]+A[R]/2<X){
        L++;
    }
    }
    return false;
    }
    console.log(Arr5([1,2,3,3],2.5));


// 6. Given a string, find the length of the longest substring without repeating characters

