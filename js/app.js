
const items = document.querySelectorAll('.triangule')

items.forEach( (item, index) => {
    item.draggable = true
    item.id = item.id || `draggable-item-${index}`
    

    item.addEventListener('dragstart', dragstart)
    item.addEventListener('drag', drag)
    item.addEventListener('dragend', dragend)

    function dragstart(e){
            e.dataTransfer.setData('item-id', e.target.id)
            this.classList.add('is-dragging')
    }

    
    function drag(){
    }

    function dragend(){
        this.classList.remove('is-dragging')
    }

})


const dropzones = document.querySelectorAll('.dropzones')

    dropzones.forEach( dropzone => {
        dropzone.addEventListener('dragenter', dragenter)
        dropzone.addEventListener('dragover', dragover)
        dropzone.addEventListener('dragleave', dragleave)
        dropzone.addEventListener('drop', drop)


    function dragenter(){
        this.style.animation = '1s force linear'
    }
    
    function dragover(e){
        e.preventDefault()
        this.classList.add('over')
    }
    
    function dragleave(){
        this.style.animation = 'none'
        this.classList.remove('over')
    }
    
    function drop(e){

        const id = e.dataTransfer.getData('item-id')
        const item = document.getElementById(id)
        dropzone.appendChild(item) // coloca item em outro lugar

        console.log('drop active!')
        this.classList.remove('over')
        
    }
})



function config(){
    const inputRange = document.querySelector('input[type=range]:nth-of-type(1)')
    const inputRange2 = document.querySelector('input[type=range]:nth-of-type(2)')
    var triangule = document.querySelectorAll('.triangule')

    inputRange.oninput = () =>{

        triangule.forEach( (t) => {
            t.style.borderRadius = `${inputRange.value}%` 
        })

    }
    inputRange2.oninput = () =>{

        triangule.forEach( (t) => {
            t.style.filter = `hue-rotate(${inputRange2.value}deg)` 
        })

    }
    
    const item = document.querySelector('.config')
    item.style.position='absolute'

    item.onmousemove = e => {
        item.style.cursor = 'move'
        if (e.buttons){ // se for diferente de zero é verdadeiro
            e.target.style.top = `${e.clientY - (item.clientHeight / 2)}px`
            e.target.style.left = `${e.clientX - (item.clientWidth / 2)}px`
        }
    }
}


config()


