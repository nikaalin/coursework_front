<template>
  <div style="height: 100%; background: url('http://www.youloveit.ru/uploads/posts/2016-12/1481811936_youloveit_ru_oboi_winx_tainiks01.jpg')">
    <AppHeader></AppHeader>
    <div class="row">
      <div id="left" class="col-12 pt-4 pl-5 col-lg-6">
        <h2 class="text-center text-info">Активные существа</h2>
        <div id="carouselIndicators0" class="carousel slide m-3" data-ride="carousel"
             style="height: 25vh; background-color: rgba(66, 205, 170, 0.5)">
          <ol class="carousel-indicators">
            <li data-target="#carouselIndicators0" v-for="(beast, index) in beasts" :class="{active: index===0}"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item text-center" v-for="(beast, index) in beasts" :class="{active: index===0}">
              <div class="m-1 mt-3 text-black-50">
                <h3>type: {{beast.type}}</h3>
                <h3>name: {{beast.name}}</h3>
                <h3>lvl: {{beast.level}}</h3>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselIndicators0" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselIndicators0" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <h2 class="text-center text-info">Существа в запасе</h2>
        <div id="carouselIndicators1" class="carousel slide m-3" data-ride="carousel"
             style="height: 25vh; background-color: rgba(66, 205, 170, 0.5)">
          <ol class="carousel-indicators">
            <li data-target="#carouselIndicators1"  v-for="(beast, index) in beasts" :class="{active: index===0}"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item text-center" v-for="(beast, index) in beasts" :class="{active: index===0}">
              <div class="m-1 mt-3 text-black-50">
                <h3>type: {{beast.type}}</h3>
                <h3>name: {{beast.name}}</h3>
                <h3>lvl: {{beast.level}}</h3>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselIndicators1" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselIndicators1" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div id="right" class="col p-4">
        <div class="row p-4">
          <div class="col justify-content-center">
            <img alt="лик загрузить не удалось" class="border border-danger" src="../static/img/sad-cat.jpg" style="height: 230px; width: 230px"/>
          </div>
          <div class="col justify-content-center"><h2>{{user.name}}</h2>
            <h4>Количество зверей: {{user.count}}</h4>
            <h4>Дни в игре: {{user.time}}</h4>
          </div>
        </div>
        <div>
          <h5 class="text-black-50 p-4 text-center font-italic">{{user.info}}</h5>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  import MyCarousel from '@/components/MyCarousel'

  export default {
    name: 'Account',
    components: {MyCarousel},
    data: function () {
      return {
        beasts: [
          {type: 'dragon', name: 'Drogo', level: '14', hp: 100, isFighter: true, isAlive: true},
          {type: 'dragon', name: 'Smaug', level: '14', hp: 100, isFighter: false, isAlive: false}
        ],
        otherBeasts: [
          {type: 'dragon', name: 'GG', level: '14', hp: 100, isFighter: false, isAlive: true},
          {type: 'dragon', name: 'Pika', level: '14', hp: 55, isFighter: true, isAlive: false}
        ],
        user: {name: 'Deny', count: 2, time: 23, info: 'Очень ленивый герой', img: '../static/img/sad-cat.jpg'},
        isActive1: 0
      }
    }
  }
</script>

<style scoped>

</style>
