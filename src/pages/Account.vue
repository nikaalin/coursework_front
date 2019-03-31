<template>
  <div>
    <AppHeader></AppHeader>

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="height: 100px; background-color: #1d2124">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active text-center">
          <h1>Terct1</h1>
        </div>
        <div class="carousel-item text-center">
          <h1>Terct2</h1>
        </div>
        <div class="carousel-item text-center">
          <h1>Terct3</h1>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Account',
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
