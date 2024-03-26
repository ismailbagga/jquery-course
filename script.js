
const btnEL = document.querySelector('.toggle')

// var const let => 
let isShown = false 
const  onClickHandler = (event) => {
    // Element is hidden 
    if (isShown === false )  {
        $('#first-box').show()
        isShown = true 
    }
    else {
        $('#first-box').hide()
        isShown = false
    }

}



setTimeout(()=> {


    $('.lightbox').show()
    // $('.lightbox').fadeIn(3000)

} , 5000)
// btnEL.onClick = onClickHandler
btnEL.addEventListener('click',onClickHandler)
