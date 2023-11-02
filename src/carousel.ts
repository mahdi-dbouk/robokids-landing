const firstCard: HTMLDivElement = document.querySelector('#first-card')!
const secondCard: HTMLDivElement = document.querySelector('#second-card')!
const thirdCard: HTMLDivElement = document.querySelector('#third-card')!

const carouselHandler = () => {
    
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
}

export default carouselHandler;