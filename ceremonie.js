let TheDelegations = ["Chill 101 2", "Estonia 58 1", "Romania 102 3", "Ecuador 103 4",
        "Madagascar 104 5", "Oman 50 1","Nicaragua 51 3", "Yemen 53 4"
    ]
const getLastDelegations = (TheDelegations) => {
    let LastDelegations = ""
    let maxtime = -1 
    for(let i = 0; i<TheDelegations.length;i++ ){
        const delegations = TheDelegations[i].split(" ")
        let name = delegations[0]
        let distance = parseFloat(delegations[1])
        let speed = parseFloat(delegations[2])

        const time = distance / speed
        if(time > maxtime){
            maxtime = time
            LastDelegations = name
        }
    }
    return LastDelegations 
}
console.log(getLastDelegations(TheDelegations));

