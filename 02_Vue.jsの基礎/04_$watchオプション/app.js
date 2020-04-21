const vm = new Vue({
  el: '#app',
  data() {
    return {
      numbers: [],
      total_num: 0
    }
  },
  watch: {
    numbers(value) {
      this.total_num = 0
      this.numbers.forEach((number) => {
        this.total_num += number
      })
    }
  }
})

/**
 * vm.numbers.push(10)
 * 1
 * vm.numbers.push(12)
 * 2
 * vm.numbers.push(22)
 * 3
 * -> 44
 */
