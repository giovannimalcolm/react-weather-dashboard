export const uviColorFind =  (uvi) => {
  if (uvi < 3) {
    return 'safe-uvi'
  }
  else if (uvi < 7) {
    return 'wary-uvi'
  }
  else {
    return 'danger-uvi'
  }

};