const burgerMenuHandler = (menuContent: HTMLDivElement, burgerMenuButton: HTMLButtonElement) => {
    const overlayDiv: HTMLDivElement = document.body.querySelector('#overlay-div')!


  if(overlayDiv)
  {
    menuContent.innerHTML = String.raw`
      <div class="bg-white h-[4px] w-9 transform transition-all duration-300 origin-left"></div>
      <div class="bg-white h-[4px] w-9 rounded transform transition-all duration-300"></div>
      <div class="bg-white h-[4px] w-9 transform transition-all duration-300 origin-left"></div>
    `
    document.body.removeChild(overlayDiv)
  }
  else{

    menuContent.innerHTML = String.raw`
      <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 flex w-0 group-focus:w-12">
        <div class="absolute bg-white h-[4px] w-5 transform transition-all duration-500 delay-300 rotate-45"></div>
        <div class="absolute bg-white h-[4px] w-5 transform transition-all duration-500 delay-300 -rotate-45"></div>
      </div>
    `

    const Navbar: HTMLDivElement = document.querySelector('#navbar')!
    burgerMenuButton.classList.add('z-10')
    const overlay = document.createElement('div')
    overlay.id = 'overlay-div'
    overlay.innerHTML = String.raw`
      <div class="absolute bg-black opacity-60 max-md:opacity-95 h-screen w-screen flex flex-row items-center justify-end px-20 z-10">
      <ul class="flex flex-col gap-8 w-full h-full items-center max-md:justify-center max-md:items-center md:justify-end font-Nunito font-bold text-white xl:text-2xl md:2xl max-md:text-3xl">
            
              <li class="relative group">
                <!-- Join Free Trial Section -->
                <div class="h-20 flex flex-row justify-end items-center">
                    <button id="joinTrial" class="px-4 py-2 h-12 bg-background rounded-full">
                    <span class="font-Nunito font-bold text-white">Join Your Free Trial</span>
                    </button>
                </div>
              </li>
              <li class="relative group">
                <a href="">Our Programs</a>
                <div class="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
                <div class="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
              </li>
              <li class="relative group">
                <a href="">About Us</a>
                <div class="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
                <div class="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
              </li>
              <li class="relative group">
                <a href="">Careers</a>
                <div class="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
                <div class="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
              </li>
              <li class="relative group">
                <a href="">FAQs</a>
                <div class="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
                <div class="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
              </li>
              <li class="relative group">
                <a href="">Contact Us</a>
                <div class="absolute -bottom-1 left-1/2 w-0 h-0.5 rounded-r-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
                <div class="absolute -bottom-1 right-1/2 w-0 h-0.5 rounded-l-full bg-white transition-all duration-300 group-hover:w-1/2"></div>
              </li>
            </ul>
      </div>
    `
    document.body.insertBefore(overlay, Navbar)
  }
}

export default burgerMenuHandler;