<template>
  <div id="header" class="row bg-light">
    <div id="gameName" class="col">
      <div class=" text-center text-black-50 display-1 flex-row d-flex">
        <h1 class="display-3 text-success">Gam</h1>
        <h1 class="display-3 text-danger">e&nbsp</h1>
      </div>
    </div>

    <div id="gameName2" class="col">
      <h1 class="display-3 text-danger">of Beasts</h1>
    </div>
    <div id="rightPanel" class="col text-black-50 d-flex flex-column justify-content-center align-items-lg-start">
      <div>
        <h4>{{user.name}} lvl: {{user.level}}</h4>
      </div>
      <div>
        <h5>
          exp: {{user.exp}}
          money: {{user.level}}
        </h5>
      </div>

    </div>
    <div class="col">
      <AppNavigation></AppNavigation>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      user: {name: 'Dany', level: 10, exp: 1400, money: 50}
    }
  }
}
</script>

<style scoped>

</style>
