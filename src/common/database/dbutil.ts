//src\common\database\dbutil.ts

// Método 1: Hexadecimal (más rápido)
export function generateRandomId16(): string {
    return Array.from({ length: 16 }, () => 
        Math.floor(Math.random() * 16).toString(16)
    ).join('');
}

// Método 2: Alphanumérinico (más legible)
export function generateAlphaNumId16(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 16 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}

// Método 3: Con crypto (más seguro)
export function generateCryptoId16(): string {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        // UUID sin guiones, cortado a 16 chars
        return crypto.randomUUID().replace(/-/g, '').substring(0, 16);
    }
    
    // Fallback con crypto.getRandomValues
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => 
        (byte % 16).toString(16)
    ).join('');
}

// Método 4: Timestamp + random (para evitar duplicados)
export function generateTimestampId16(): string {
    const timestamp = Date.now().toString(36); // Base 36
    const randomPart = Math.random().toString(36).substring(2);
    const combined = (timestamp + randomPart).substring(0, 16);
    
    // Rellenar si es menor a 16
    return combined.padEnd(16, '0');
}

// Método 5: Usando Node.js crypto (servidor)
import { randomBytes } from 'crypto';

export function generateNodeCryptoId16(): string {
    return randomBytes(8).toString('hex'); // 8 bytes = 16 hex chars
}

// PRUEBAS Y EJEMPLOS:
console.log('Hexadecimal:', generateRandomId16());     // e.g: "a3f7b2c9d4e8f1a6"
console.log('Alfanumérico:', generateAlphaNumId16());  // e.g: "Kx9mP2qR7sL4nW8Y"
console.log('Crypto:', generateCryptoId16());          // e.g: "f47ac10b58cc4372"
console.log('Timestamp:', generateTimestampId16());    // e.g: "lm8x3k7p00000000"

// Para usar en Prisma:
/*
const newRecord = await prisma.codelang.create({
    data: {
        id: generateAlphaNumId16(), // Si tu ID es string
        name: "JavaScript",
        description: "Programming language"
    }
});
*/

// RECOMENDACIONES:
// - Hexadecimal: Más rápido, menos legible
// - Alfanumérico: Más legible, case-sensitive
// - Crypto: Más seguro para datos sensibles
// - Timestamp: Evita colisiones, ordenable cronológicamente