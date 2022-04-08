// Considera una lista / array de ovejas.Cada oveja tiene un nombre y un color.Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const filtradas = ovejas.filter(ove => ove.name.toLowerCase().includes("n" && "a") && ove.color === "rojo")
console.log(filtradas)

export default function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter(ove => ove.name.toLowerCase().includes("n") && ove.name.toLowerCase().includes("a") && ove.color === "rojo")
}
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

// const conteo = (oveja) => {
//     oveja.filter(oveja => {
//         if (oveja.name.toLowerCase().includes('a' && 'n') && ove.color === "rojo")
//     })
// }