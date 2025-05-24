const button : HTMLButtonElement = document.querySelector("button")!
const input : HTMLInputElement = document.querySelector('input')!
const inputMessage : HTMLElement= document.getElementById('message')!
const formContainer : HTMLElement = document.getElementById('formContainer')!
const titleContainer : HTMLElement = document.getElementById('titleContainer')!
const container : HTMLElement = document.getElementById('container')!
button.addEventListener('click',() => {
    if(input.value == ""){
        inputMessage.textContent = "لطفا نام خود را وارد کنید"
     }else{
        console.log(input.value);
        inputMessage.textContent = ""
        formContainer.style.display = 'none'
        titleContainer.style.display= 'none'
        invitation()
        
        }
})

const invitation = () => {
    const inviteMessage :HTMLElement = document.createElement('h1')
    inviteMessage.textContent = `${input.value}، آیا با من فیلم میبینی؟`;
    inviteMessage.classList.add('text-zinc-900', 'text-2xl')
    const buttonContainer : HTMLElement = document.createElement('div')
    buttonContainer.classList.add('flex','justify-center','gap-5')
    const yesButton :HTMLButtonElement = document.createElement('button')
    yesButton.textContent = 'بله'
    yesButton.classList.add('bg-stone-50', 'w-30' ,'h-8', 'border-stone-50', 'rounded-lg')
    const noButton :HTMLButtonElement = document.createElement('button')
    noButton.textContent = 'خیر'
    noButton.classList.add('bg-stone-50', 'w-30' ,'h-8', 'border-stone-50', 'rounded-lg')
    yesButton.type = 'button';
    noButton.type = 'button';
    const inviteMessageContainer = document.createElement('div')
    inviteMessageContainer.classList.add('grid', 'gap-20' ,'text-center')
    inviteMessageContainer.appendChild(inviteMessage)
    buttonContainer.appendChild(yesButton)
    buttonContainer.appendChild(noButton)
    inviteMessageContainer.appendChild(buttonContainer)
    container.innerHTML = ""
    container.appendChild(inviteMessageContainer)


    noButton.addEventListener('click', () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute'; // Ensure it can move
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

    yesButton.addEventListener('click',() => {
        inviteMessageContainer.style.display =  'none'
        const congratsMessage : HTMLElement = document.createElement('h1')
        congratsMessage.textContent = 'ممنون از همکاریتون'
        congratsMessage.classList.add('text-zinc-900','text-2xl')
        container.appendChild(congratsMessage)

    })

}


