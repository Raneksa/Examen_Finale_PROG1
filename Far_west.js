const Far_west = (array) => {
for (let i =0 ; i<array.length ; i++){
    let regex = /pair/g ;
         pair  = (array[i] != array[i+1])
    return array.match(regex)
   } 
   
}
console.log(Far_west(["Nord","Sud","Sud","Est","Oeust","Nord",]))
