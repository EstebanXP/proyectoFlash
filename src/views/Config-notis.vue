<template>
  <div class="container-fluid">
    <!--Esta es la parte de arriba del cuaduito, donde va el logo y la flecha-->
    <div class="pad-top-events gradient">
      <img src="../assets/logo.png" style="width: 2%; min-width: 80px" />
    </div>
    <div id="backEvents">
      <h1 id="h1Events">Mostrar proximos eventos</h1>
      <form @submit.prevent="conf" class="form-in">
        <div style="padding-top: 10px"></div>

        <div class="container" style="color: #FF3366">
          <div class="row">
            <div class="col">1 Semana</div>
            <div class="col"><input style="float: right" type="submit" class="dot" value="" /></div>
          </div>

          <div class="row">
            <div class="col">2 Semanas</div>
            <div class="col"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>

          <div class="row">
            <div class="col">1 Mes</div>
            <div class="col"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>

          <div class="row">
            <div class="col">Todos</div>
            <div class="col"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>
          
        </div>
      </form>
    </div>
  </div>
</template>








