const prompt = require("prompt-sync")({siglet: true});

        let e = prompt("Enter the number: ") 
        let k = 1;
        let i = 0;
        let arr=[];
        let arrr=[];
        let c;
        console.log("\nThe numbers are: ");
        do {
            if ((e%k)==0) {
                 arr[i] = k;
                 
            }
            k++;
            i++;
            arrr[i] = k-1;
            // ar = arrr.filter((e%k)!=0);
             c = arrr.filter((value)=>{
              return (e%k)=0; //return the new array with elements which are less than than 20
          })

        } while (k<=e);
        console.log(arr)
        console.log(arrr)
        console.log(c)

    
        
    
