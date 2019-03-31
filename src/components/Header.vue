<template>
  <div id="header" class="row bg-light">
    <div id="gameName" class="col-12 col-lg-6 text-justify text-black-50 display-1 flex-row d-flex text-center justify-content-center">
      <h1 class="display-3 text-success">Gam</h1>
      <h1 class="display-3 text-danger">e of Beasts</h1>

    </div>


    <div id="rightPanel" class="col-lg-3 col-6 text-black-50 d-flex flex-column justify-content-center align-items-lg-start">
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
    <div class="col-6 col-lg-3 d-flex flex-column flex-row">
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
