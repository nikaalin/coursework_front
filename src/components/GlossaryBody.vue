<template>
  <div class="row">
    <div id="description" class="col bg-light rounded text-black-50 text-center ">
      <div v-for="location in locations" v-if="location.isChoosed">
        <h4>{{location.info}}</h4>
      </div>
    </div>
    <div class="table-responsive col">
      <table class="table table-condensed table-striped">
        <tr v-for="location in locations" @click="location.isChoosed=true" :class="{'bg-light': location.isChoosed}">
          {{location.name}}
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlossaryBody',
    data: function () {
      return {
        locations: [{name: 'SPB', info: 'болото', isChoosed: false},
          {name: 'Вестерос', info: 'не существует', isChoosed: false}],
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
