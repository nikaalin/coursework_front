<template>
  <div>
    <AppHeader></AppHeader>

    <div class="container col-6">
      <div class="row text-center flex-nowrap">
        <div class="col-sm-4">1</div>
        <div class="col-sm-4">2</div>
        <div class="col-sm-4">3</div>
        <div class="col-sm-4">4</div>
        <div class="col-sm-4">5</div>
        <div class="col-sm-4">6</div>
        <div class="col-sm-4">7</div>
        <div class="col-sm-4">8</div>
        <div class="col-sm-4">9</div>
      </div>

    </div>
  </div>

</template>

<script>
  import Carousel from 'vue-strap/src/Carousel'
  import Slider from 'vue-strap/src/Slider'

  export default {
    name: 'Account',
    components: {Slider, Carousel},
    data: function () {
      return {
        beasts: [
          {type: 'dragon', name: 'Drogo', level: '14', hp: 100, isFighter: true, isAlive: true},
          {type: 'dragon', name: 'Smaug', level: '14', hp: 100, isFighter: false, isAlive: false}
        ],
        otherBeasts: [
          {type: 'dragon', name: 'GG', level: '14', hp: 100, isFighter: false, isAlive: true},
          {type: 'dragon', name: 'Pika', level: '14', hp: 55, isFighter: true, isAlive: false}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
