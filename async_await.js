const num = 2000;

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function saludar() {
    console.log('Esparando ....');
    await esperar(num);
    console.log(`Hola después de ${num / 1000} segundos`);
}
console.log("Fuera de async y await");
saludar();