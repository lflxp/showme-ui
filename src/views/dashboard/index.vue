<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Showme from '@/utils/showme'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    // this.getables()
    // this.getnote()
    this.exec()
    this.getdbs()
  },
  methods: {
    getables() {
      Showme.GetAllTables('test').then(data => {
        console.log('getables', data)
      })
    },
    getnote() {
      Showme.GetNote().then(data => {
        console.log('getnote', data)
      })
    },
    getdbs() {
      var t = {
        'sql': 'select 200'
      }
      Showme.dbs(t).then(data => {
        console.log('dbs', data)
      })
    },
    exec() {
      var t = {
        'sql': 'select 100'
      }
      Showme.exec(t).then(data => {
        console.log('exec', data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
