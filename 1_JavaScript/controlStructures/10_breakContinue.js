const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(i in num){
    if(i == 5){
        break
    }
    console.log(`i = ${num[i]}`)
}

for (j in num) {
    if (j == 5) {
        continue
    }
    console.log(`${j} = ${num[j]}`)
}

externo: for (a in num){
    for (b in num){
        if(a == 2 && b ==3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}
