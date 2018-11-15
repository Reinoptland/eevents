const data = {
    name: 'Rein',
    id: '108',
    age: '21',
}

// const getName = (obj) => {
//     return obj.name
// }

// const getId = (obj) => {
//     return obj.id
// }

const getAttribute = attribute => obj => {
    return obj[attribute]
}


const getId = getAttribute('id')
const getName = getAttribute('name')

console.log(getName(data))
console.log(getId(data))