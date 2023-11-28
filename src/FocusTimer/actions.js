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
  sounds.bgReset()
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
  state.isSoundPlaying = document.querySelector('.ph.ph-tree').classList.toggle('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioForest.play()
    return
  }

  sounds.bgAudioForest.pause()
}

export function toggleRainSound() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = document.querySelector('.ph.ph-cloud-rain').classList.toggle('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioRain.play()
    return
  }

  sounds.bgAudioRain.pause()
}

export function toggleCoffeeShopSound() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = document.querySelector('.ph.ph-storefront').classList.toggle('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioCoffeeShop.play()
    return
  }

  sounds.bgAudioCoffeeShop.pause()
}

export function toggleFireplace() {
  sounds.buttonPressAudio.play()
  state.isSoundPlaying = document.querySelector('.ph.ph-fire').classList.toggle('active')
  
  if(state.isSoundPlaying) {
    sounds.bgAudioFireplace.play()
    return
  }
  
  sounds.bgAudioFireplace.pause()
}