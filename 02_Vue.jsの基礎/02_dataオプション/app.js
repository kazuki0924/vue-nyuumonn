const vm = new Vue({
  el: '#app',
  data() {
    return {
      message: 'Hello, World!'
    }
  }
})

/**
 * vm.$data.message
 * ->"Hello, World!"
 * vm.$data.message = 'Changed'
 * "Changed"
 */
