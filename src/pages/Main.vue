<template>
  <div class="container-fluid" style="height: 100%; background: url('http://www.youloveit.ru/uploads/gallery/main/7/youloveit_ru_oboi_winx_tainiks03.jpg')">
    <AppHeader></AppHeader>
<div class="m-5 row"  >
  <div class="my-auto col">

    <h1 align="center" class="text-monospace text-danger">Куда отправимся?</h1>
    <h2 align="center" class="m-5"><a class="dropdown-item" title="Отсюда начинаются приключения" href = "/map">Карта</a>
    <a class="dropdown-item" title="Информация о тебе на случай, если забыл" href = "/account">Герой</a>
    <!--<a class="dropdown-item" href = "/craft">Кузница</a>-->
    <a class="dropdown-item" title="Можно почитать о том, что встречается здесь" href = "/gl">Глоссарий</a>
    <a class="dropdown-item" title="Собственно то, чем кажется" href = "/login">Выход</a></h2>
</div>
</div>
    <AppFooter class="row"></AppFooter>
    <div class="row mt-5 pt-5 pl-4">
      <h6>Страница входа выглядела хорошо, там явно не хватало несочетающихся цветов и... феечек</h6>
    </div>

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
