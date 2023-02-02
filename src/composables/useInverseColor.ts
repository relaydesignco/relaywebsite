export function useInverseColor() {
  function getInverseColor(color: string) {
    switch(color) {
      case 'black':
        return 'white'
      case 'white':
        return 'blue'
      case 'blue':
        return 'red'
      case 'red':
        return 'white'
      case 'pink':
        return 'blue'
      case 'orange':
        return 'pink'
      case 'yellow':
        return 'pink'
      case 'green':
        return 'pink'
      default:
        return 'blue'
    }
  }

  // expose managed state as return value
  return { getInverseColor }
}