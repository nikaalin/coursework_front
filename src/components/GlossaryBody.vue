<template>
  <div class="row" >
    <div id="description" class="col-12 col-lg-6 bg-light rounded text-black-50 text-center my-auto ">
      <div v-for="(location, index) in locations" v-if="index===indexCurLocation">
        <h4>{{location.info}}</h4>
      </div>
    </div>
    <div class="table-responsive 11 col-lg-5 ml-1 my_table">
      <table  class="table table-condensed thead-light" >
        <tbody>
        <tr  class="border-1" id="string" v-for="(location, index) in locations" @click="indexCurLocation=index" :class="{'bg-light': location.isChoosed}">
          <th scope="row">
          <a href="#"> {{location.name}}</a>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlossaryBody',
    data: function () {
      return {
        indexCurLocation: 0,
        locations: [{name: 'SPB', info: 'болото'},
          {name: 'Вестерос', info: 'не существует'},
          {name: 'Вестерос', info: 'не существует'},
          {name: 'Вестерос', info: 'не существует'},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false},
        ],
        beasts: [{name: 'дракон', info: '*тяжко дыхает*', isChoosed: false}]
      }
    },
    methods: {
      choose () {

      }
    }
  }
</script>

<style scoped>

</style>
