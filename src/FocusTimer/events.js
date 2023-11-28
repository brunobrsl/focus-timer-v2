import state from './state.js'
import { controls, soundControls } from './elements.js'
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'

export function registerTimerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}

export function setSeconds() {
  el.seconds.addEventListener('focus', () => {
    el.seconds.textContent = ""
  })

  el.seconds.onkeypress = (event) => /\d/.test(event.key)

  el.seconds.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 59 ? 0 : time

    state.seconds = time

    updateDisplay()
    el.seconds.removeAttribute('contenteditable')
  })
}

export function registerSoundControls() {
  soundControls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}