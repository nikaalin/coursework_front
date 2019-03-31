<template>
  <div>
    <AppHeader></AppHeader>
    <div class="topnav-right">
      <AppNavigation></AppNavigation>
    </div>
    <h1 align="center">Это первая страничка, куда пользователь попадает после логина/регистрации</h1>
    <h1 align="center">можно разместить мануал по игре</h1>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data: function () {
      return {
        userName: 'rgr'
      }
    }
  }
</script>
