function regresaFuncion () {
    return function () {
        console.log("Más rebuscado no puede ser");
    }
}

const fn = regresaFuncion()

fn()
