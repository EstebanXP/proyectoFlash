<template>
<!--Esta es la parte de arriba del cuaduito, donde va el logo y la flecha-->
    <div class="gradient">
      <div class="container nav">
        <div class="row align-items-center">
          <div class="col">
            <router-link to="/">
              <img class="arrow"  src="../assets/ui-elements/Icon-Arrow@2x.png" alt="">
            </router-link>
          </div>
          <div class="col-6">
            <img class="logo" src="../assets/logo.png">
          </div>
          <div class="col">
            
          </div>
        </div>
      </div>
    </div>
    <!--aqui acaba la barra de navegacion-->
  <div class="container-fluid">
    <div id="backEvents">
      <h1 id="h1Events">mostrar proximos eventos</h1>
      <form @submit.prevent="conf" class="form-in">
        <div style="padding-top: 10px"></div>
        <div class="container" style="color: #FF3366">
          <div class="row">
            <div class="col" id="coli"><p class="font-normal">1 Semanas</p></div>
            <div class="col" id="coli"><input style="float: right" type="submit" class="dot" value="" /></div>
          </div>

          <div class="row">
            <div class="col" id="coli"><p class="font-normal">2 Semanas</p></div>
            <div class="col" id="coli"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>

          <div class="row">
            <div class="col" id="coli"><p class="font-normal">1 mes</p></div>
            <div class="col" id="coli"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>

          <div class="row">
            <div class="col" id="coli"><p class="font-normal">todos</p></div>
            <div class="col" id="coli"><input style="float: right" type="submit" class="dot-fill" value="" /></div>
          </div>
          
        </div>
      </form>
    </div>
  </div>
</template>








