import { Appearance } from 'react-native-appearance'

const colorSchemeInstance = (function() {
  const callbacks = []
  let colorSchemeState = {
    colorScheme: Appearance.getColorScheme()
  }

  const getCurrentColorScheme = () => {
    const colorScheme = Appearance.getColorScheme()
    colorSchemeState = {
      ...colorSchemeState,
      colorScheme: colorScheme
    }
  }

  Appearance.addChangeListener(({ colorScheme }) => {
    colorSchemeState = {
      ...colorSchemeState,
      colorScheme: colorScheme
    }
    sendUpdateToSubscribers(colorSchemeState)
  })

  function sendUpdateToSubscribers(data) {
    callbacks.forEach(callback => callback(data))
  }

  return {
    subscribe: function(callback) {
      getCurrentColorScheme()
      callbacks.push(callback)
      callback(colorSchemeState)
    },
    unsubscribe: function(callback) {
      const index = callbacks.indexOf(callback)
      callbacks.splice(index, index)
    },
  }
})()

export { colorSchemeInstance }
