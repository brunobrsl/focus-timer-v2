import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()

  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
  el.seconds.setAttribute('contenteditable', true)
}

export function addFiveMinutes() {
  timer.addMinutes()
  sounds.buttonPressAudio.play()
}

export function removeFiveMinutes() {
  timer.removeMinutes()
  sounds.buttonPressAudio.play()
}

export function toggleForestSound() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = el.treeCard.classList.toggle('active')

  el.rainCard.classList.remove('active')
  el.coffeeShopCard.classList.remove('active')
  el.fireplaceCard.classList.remove('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioForest.play()

    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeeShop.pause()
    sounds.bgAudioFireplace.pause()
    
    return
  }

  sounds.bgAudioForest.pause()
}

export function toggleRainSound() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = el.rainCard.classList.toggle('active')

  el.treeCard.classList.remove('active')
  el.coffeeShopCard.classList.remove('active')
  el.fireplaceCard.classList.remove('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioRain.play()

    sounds.bgAudioForest.pause()
    sounds.bgAudioCoffeeShop.pause()
    sounds.bgAudioFireplace.pause()
  
    return
  }

  sounds.bgAudioRain.pause()
}

export function toggleCoffeeShopSound() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = el.coffeeShopCard.classList.toggle('active')

  el.treeCard.classList.remove('active')
  el.rainCard.classList.remove('active')
  el.fireplaceCard.classList.remove('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioCoffeeShop.play()

    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioFireplace.pause()

    return
  }

  sounds.bgAudioCoffeeShop.pause()
}

export function toggleFireplace() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = el.fireplaceCard.classList.toggle('active')

  el.treeCard.classList.remove('active')
  el.rainCard.classList.remove('active')
  el.coffeeShopCard.classList.remove('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioFireplace.play()

    sounds.bgAudioForest.pause()
    sounds.bgAudioRain.pause()
    sounds.bgAudioCoffeeShop.pause()

    return
  }
  
  sounds.bgAudioFireplace.pause()
}