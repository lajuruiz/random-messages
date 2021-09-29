const messages= [
    "django",
    "ana",
    "diego",
    "laura",
    "nel"
] 

// math.floor lo que hace es que me regresa el primer valor redondeado
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * 
    messages.length)];
    console.log(message)
};

module.exports = {randomMsg};