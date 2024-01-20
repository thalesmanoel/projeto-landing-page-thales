//botao tema dark/light

const darkColor = ['#fff', '#beb6b3', '#404040', '#000000', '#BFB0AA', '#9c9c9c', '#8e8e8e', '#000000'];

const lightColor = ['#000', '#bdbdbd', '#9a9a9a', '#bababa', '#beb6a5', '#dfdfdf' ,'#ffffff', '#39bbb2'];

document.querySelector('#chk').addEventListener('click', function(){
        if(this.checked){
        document.body.style.setProperty('--cortxt', lightColor[0])
        document.body.style.setProperty('--cor00', lightColor[1])
        document.body.style.setProperty('--cor0', lightColor[2])
        document.body.style.setProperty('--cor1', lightColor[3])
        document.body.style.setProperty('--cor2', lightColor[4])
        document.body.style.setProperty('--cor3', lightColor[5])
        document.body.style.setProperty('--cor4', lightColor[6])
        document.body.style.setProperty('--cor5', lightColor[7])
    }else{
        document.body.style.setProperty('--cortxt', darkColor[0])
        document.body.style.setProperty('--cor00', darkColor[1])
        document.body.style.setProperty('--cor0', darkColor[2])
        document.body.style.setProperty('--cor1', darkColor[3])
        document.body.style.setProperty('--cor2', darkColor[4])
        document.body.style.setProperty('--cor3', darkColor[5])
        document.body.style.setProperty('--cor4', darkColor[6])
        document.body.style.setProperty('--cor5', darkColor[7])
    }
});

//botao para voltar para cima

const voltarParaCima = document.querySelector("#voltarparacima");

voltarParaCima.onclick = () => {
    document.documentElement.scroll({
        top:0,
        behavior: "smooth"
    })
}

window.onscroll = () => {
    voltarParaCima.hidden = (document.documentElement.scrollTop < 250)
}
