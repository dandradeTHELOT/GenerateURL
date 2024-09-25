function generateRandomToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

const token = generateRandomToken(10); // Cambia 10 por la longitud que desees
const baseUrl = "https://qkstzdro6ry.typeform.com/RefundWEBTHELOT"; // Reemplaza con tu dominio
const temporaryUrl = baseUrl + token;

return { temporaryUrl, token };
