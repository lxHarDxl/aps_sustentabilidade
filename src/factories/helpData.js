exports.data = {
    titulo: "HELPER",
    descricao: "Segue lista com todos os endpoints e parâmetros para acessá-los",
    homePage: {
        resumo: "Página inicial da aplicação",
        descricao: "Introdução sobre o problema que a aplicação procura resolver",
        path: "/",
        param: "",
        method: "GET"
    },
    calculos: {
        papel: {
            resumo: "Calculo de árvores destruídas pela quantidade de papel",
            endpoints: {
                papelUnidade: {
                    descricao: "Calcula a quantidade de árvores que podem ser poupadas pelo unitário de folhas de papel A4 à serem recicladas",
                    path: "/calculo/papel/unidade",
                    param: {
                        0: {
                            field: "unidade",
                            type: "inteiro"
                        },
                    },
                    method: "POST"
                },
                papelPeso: {
                    descricao: "Calcula a quantidade de árvores que podem ser poupadas pelo valor em gramas de folhas de papel A4 à serem recicladas",
                    path: "/calculo/papel/grama",
                    param: {
                        0: {
                            field: "unidade",
                            type: "inteiro"
                        },
                    },
                    method: "POST"
                },
            }
        },
        carbono: {
            resumo: "Calculo de emissão de carbono ao meio ambiente pelo combustível utilizado",
            endpoints: {
                diesel: {
                    descricao: "Calcula a quantidade de carbono emitido por veículos que utilizam DIESEL",
                    path: "/calculo/emissaocarbono/diesel",
                    param: {
                        0: {
                            field: "quilometros",
                            type: "float"
                        },
                        1: {
                            field: "quilometrosPorLitro",
                            type: "float"
                        },
                    },
                    method: "POST"
                },
                gasolina: {
                    descricao: "Calcula a quantidade de carbono emitido por veículos que utilizam GASOLINA",
                    path: "/calculo/emissaocarbono/gasolina",
                    param: {
                        0: {
                            field: "quilometros",
                            type: "float"
                        },
                        1: {
                            field: "quilometrosPorLitro",
                            type: "float"
                        },
                    },
                    method: "POST"
                },
                etanol: {
                    descricao: "Calcula a quantidade de carbono emitido por veículos que utilizam ETANOL",
                    path: "/calculo/emissaocarbono/etanol",
                    param: {
                        0: {
                            field: "quilometros",
                            type: "float"
                        },
                        1: {
                            field: "quilometrosPorLitro",
                            type: "float"
                        },
                    },
                    method: "POST"
                },
            }
        }
    }
    
}