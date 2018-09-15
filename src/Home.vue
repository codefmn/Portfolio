<template>
  <div class="container-fluid">
    <my-header></my-header>
    <card :portfolioList="portfolioList"></card>
  </div>
</template>

<script>
import axios from 'axios'
import MyHeader from './components/Header'
import Card from './components/Card'
export default {
  name: 'Home',
  components: {
    MyHeader,
    Card
  },
  data () {
    return {
      portfolioList: []
    }
  },
  mounted () {
    axios.get('/')
      .then(response => response.data)
      .then(response => {
        if (response.success && response.data) {
          this.portfolioList = response.data.portfolioList
        }
      })
  }
}
</script>

<style lang="stylus" scoped>
.container-fluid
  padding 0
</style>
