import burgerMenuHandler from "./burgerMenu";

const joinTrial: HTMLButtonElement = document.querySelector('#joinTrial')!

joinTrial.addEventListener('click', (e: Event) => {
  const target: EventTarget = e.target!;
  console.log(target);
})

const burgerMenuButton: HTMLButtonElement = document.querySelector('#burger-menu-button')!
const menuContent: HTMLDivElement = document.body.querySelector('#burger-menu-content')!
menuContent.innerHTML = String.raw`
<div class="bg-white h-[4px] w-9 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
<div class="bg-white h-[4px] w-9 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
<div class="bg-white h-[4px] w-9 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
`

burgerMenuButton.addEventListener('click', () => burgerMenuHandler(menuContent, burgerMenuButton))


const firstCard: HTMLDivElement = document.querySelector('#first-card')!
const secondCard: HTMLDivElement = document.querySelector('#second-card')!
const thirdCard: HTMLDivElement = document.querySelector('#third-card')!

firstCard.classList.toggle('visible')
secondCard.classList.toggle('hidden')
thirdCard.classList.toggle('hidden')

let currentCardIndex = 0

const prevButton = document.querySelector('#left-btn')
prevButton?.addEventListener('click', () => prevClicked())
const nextButton = document.querySelector('#right-btn')
nextButton?.addEventListener('click', () => nextClicked())

const selectCard = (currentCardIndex: number) => {
  if(currentCardIndex == 0){
    firstCard.classList.add('visible')
    firstCard.classList.remove('hidden')
    secondCard.classList.remove('visible')
    secondCard.classList.add('hidden')
    thirdCard.classList.remove('visible')
    thirdCard.classList.add('hidden')
    
  }
  else if(currentCardIndex == 1) {
    firstCard.classList.remove('visible')
    firstCard.classList.add('hidden')
    secondCard.classList.add('visible')
    secondCard.classList.remove('hidden')
    thirdCard.classList.remove('visible')
    thirdCard.classList.add('hidden')
  }
  else if(currentCardIndex == 2){
    firstCard.classList.remove('visible')
    firstCard.classList.add('hidden')
    secondCard.classList.remove('visible')
    secondCard.classList.add('hidden')
    thirdCard.classList.add('visible')
    thirdCard.classList.remove('hidden')
  }
}
const prevClicked = () => {
    if(currentCardIndex == 0){
        return
    }
    else if(currentCardIndex > 0 && currentCardIndex <= 2){
        currentCardIndex--
        selectCard(currentCardIndex)
    }
}
const nextClicked = () => {
    if(currentCardIndex == 2){
        return
    }
    currentCardIndex++
    selectCard(currentCardIndex)
}