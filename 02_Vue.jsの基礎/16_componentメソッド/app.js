Vue.component('user-list', {
  data() {
    return {
      users: [
        { id: 1, name: 'ユーザー１' },
        { id: 2, name: 'ユーザー2' },
        { id: 3, name: 'ユーザー3' },
        { id: 4, name: 'ユーザー4' },
        { id: 5, name: 'ユーザー5' }
      ]
    }
  },
  template: `
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  `
})

const vm = new Vue({
  el: '#app'
})
