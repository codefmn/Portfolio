<template>
  <div class="row">
    <div
      class="card-deck col-sm-12 col-md-6 col-lg-4"
      v-for="item of portfolioList"
      :key="item.id"
    >
      <div class="card text-center">
        <img
          class="card-img-top"
          :src="item.imgUrl"
          alt="image"
        >
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <h6 class="card-subtitle text-muted">{{item.subtitle}}</h6>
          <p class="card-text">{{item.desc}}</p>
        </div>
        <div class="card-footer"><a :href="item.url">查看在线部署</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    portfolioList: Array
  }
}
</script>

<style lang="stylus" scoped>
.card-deck
  margin 0
  .card
    margin 1rem
    img
      margin 1rem auto 0 auto
      width 50%
</style>
