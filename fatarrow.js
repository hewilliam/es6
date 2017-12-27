let add = function(a,b) {
    return a + b
}

add = (a, b) => {
    return a + b
}


//when there is a single expression, we can remove the {} and return. its called implicit return
// add = (a, b) => a + b

//if there is a single argument, drop the parens
const double = number => number * 2

console.log(double(2))

//fat arrow functions have property of "lexical this"
// let team = {
//     members: ['Jane', 'Doe'],
//     name: 'Super Squad',
//     teamSummary: function () {
//         return this.members.map(function(member){
//             return `${member} is on ${this.teamSummary}`
//         })
//     }
// }
//we are passing the anonymous function into somewhere in the code base, so the this.teamSummary is LOST!
// console.log(team.teamSummary())

// let team = {
//     members: ['Jane', 'Doe'],
//     name: 'Super Squad',
//     teamSummary: () => { //DON'T do this. As stated previously, arrow function expressions are best suited for non-method functions.
//         return this.members.map((member) => {
//             return `${member} is on ${this.teamSummary}`
//         })
//     }
// }

let team = {
    members: ['Jane', 'Doe'],
    name: 'Super Squad',
    teamSummary: function () { 
        return this.members.map((member) => {
            return `${member} is on ${this.name}`
        })
    }
}

console.log(team.teamSummary())