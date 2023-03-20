
let justFood = (number) => {
    return `Catering od Just Food pro ${number} lidí za ${number * 50} Kč.`
}

let yourMama = (number) => {
    return `Catering od Your Mama pro ${number} lidí za ${number * 150} Kč.`
}

let flavourHaven = (number) => {
    return `Catering od Flavour Haven pro ${number} lidí za ${number * 300} Kč.`
}


let createEvent = (eventName, number, company) => {

    return `Událost ${eventName} s ${company(number)}`
    
}