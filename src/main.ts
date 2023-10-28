import burgerMenuHandler from "./burgerMenu";

const joinTrial: HTMLButtonElement = document.querySelector('#joinTrial')!
let burgerMenuClicked: number = 0

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