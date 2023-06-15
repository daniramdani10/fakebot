const pertanyaan = document.getElementById('pertanyaan')
const jawaban = document.getElementById('jawaban')

let init = 0

const botSay = (data) => {
    return [
        `Halo, Perkenalkan nama saya danibot. Siapa nama kamu?`,
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Ooh ${data?.umur} tahun, kamu hobinya apa?`,
        `Waah sama dong hobi kita ${data?.hobi}, btw punya pacar gak?`,
        `Ooh ${data?.pacar}, nice to meet you😊`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init == 1) {
        botDelay({
            nama: jawaban.value
        })


    } else if (init == 2) {
        botDelay({
            umur: jawaban.value
        })
    } else if (init == 3) {
        botDelay({
            hobi: jawaban.value
        })

    } else if (init == 4) {
        botDelay({
            pacar: jawaban.value
        })

    } else if (init == 5) {
        finishing()

    } else {
        botEnd()
    }
}


function botDelay(jawabanUser) {
    console.log({
        usersData: usersData
    })
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, 500);
    usersData.push(jawaban.value)
    jawaban.value = ''
}

function finishing() {
    pertanyaan.innerHTML = `Thanks ya ${usersData[0]} udah main ke danibot😊`
    jawaban.innerHTML = 'okay thx juga'

}

function botEnd() {
    window.location.reload()
}