const ui = {
  container: document.querySelector('[data-3d-attract-container]'),
  target: document.querySelector('[data-3d-attract]')
}

const dimensions = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight
}

dimensions.screenWidthHalf = dimensions.screenWidth / 2
dimensions.screenHeightHalf = dimensions.screenHeight / 2

const cache = {
  x: 0,
  y: 0
}

let moving = false

ui.container.addEventListener('mousemove', e => {
  moving = true
  cache.x = e.pageX
  cache.y = e.pageY

  animate(e.pageX, e.pageY)

  setTimeout(() => {
    moving = false
  }, 1000)
})

setInterval(() => {
  if (!moving) {
    if (cache.x > 10) {
      animate(--cache.x, --cache.y)
    } else if (cache.x < -10) {
      animate(++cache.x, ++cache.y)
    }
  }
}, 100)

function animate(x, y) {
  if (x < dimensions.screenWidthHalf) {
    x = utils.map(x, 0, dimensions.screenWidthHalf, 30, 0)
    x = x * -1
  } else {
    x = utils.map(
      x,
      dimensions.screenWidthHalf + 1,
      dimensions.screenWidth,
      0,
      30
    )
  }

  if (y < dimensions.screenHeightHalf) {
    y = utils.map(y, 0, dimensions.screenHeightHalf, 30, 0)
  } else {
    y = utils.map(
      y,
      dimensions.screenHeightHalf + 1,
      dimensions.screenHeight,
      0,
      30
    )
    y = y * -1
  }

  ui.target.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
}

const utils = {
  normalize: ($value, $min, $max) => {
    return ($value - $min) / ($max - $min)
  },

  interpolate: ($normValue, $min, $max) => {
    return $min + ($max - $min) * $normValue
  },

  map: ($value, $min1, $max1, $min2, $max2) => {
    if ($value < $min1) {
      $value = $min1
    }

    if ($value > $max1) {
      $value = $max1
    }

    return utils.interpolate(
      utils.normalize($value, $min1, $max1),
      $min2,
      $max2
    )
  }
}
