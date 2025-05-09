/** 
 * map (carrée)
 * X : arbre
 * . : espace libre
 * bobsleigh : HORIZONTALE de 4 blocs 
 * Trouver le nombre max de bobsleigh qu'on peut placer 
 * 
 * countMaxBobsleigh (N, map)
 * -N : nb de colonne et de ligne du terrain
 * -map : tableau de string
 * -sortie : nombre max de bobsleigh */

let map = [
    "....x",
    "x....",
    ".....",
    "..x..",
    "x...x"
];

const countMaxBobsleigh = (N, map) => {
    let result = 0;
    if( N < 4 ) return 0; 
    for( let i=0 ; i< map.length ; i++ ) {
        if( !map[i].includes("x") ) {
            result += 1;
        }
        for( let p=0 ; p< map[i].length ; p++) {
            if( (map[i][p] ===".") && (map[i][p+1] ===".") && (map[i][p+2] ===".") &&( map[i][p+3] ===".")) {
                console.log(map[i]);
            }
        }
    }
    return result;
};
console.log(countMaxBobsleigh(5,map));

let exemple = "...X."