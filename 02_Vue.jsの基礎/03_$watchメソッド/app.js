const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello, World!'
    }
  }
})

vm.$watch(
  function () {
    return this.message
  },
  function (message) {
    console.log('変更後の値: ' + message)
  }
)

/**
 * vm.$data.message = 'Changed'
 * -> 変更後の値: Changed
 * -> "Changed"
 */
