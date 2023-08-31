const alumno0054 = {
    nombre: "Marcos",
    apellido: "Markinson",
    cursa: "Programación",
    notas: {
        primerCuat: 10,
        segundoCuat: 8.75,
        tercerCuat: 9.75
    },
    sobreNombre: "Oso",
    intereses: ["matematicas", "tecnología", "computación", "cine"],
    horario: "turno mañana"
}

console.log(alumno0054.notas.segundoCuat)

console.log(((alumno0054.notas.primerCuat + alumno0054.notas.segundoCuat + alumno0054.notas.tercerCuat) / 3).toFixed(2))

console.log(alumno0054.intereses[1])

alumno0054.intereses.push({
    nombre: "Roilan"
})

console.log(alumno0054.intereses)
