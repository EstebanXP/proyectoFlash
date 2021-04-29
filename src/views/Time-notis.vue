<template>
  <div class="container-fluid">
    <div class="pad-top-events gradient">
      <img src="../assets/logo.png" style="width: 2%; min-width: 80px" />
    </div>
    <div id="backEvents">
      <h1 id="h1Events">notificaciones</h1>
      <div class="container" style="color: #ff3366">
          <div class="row">
            <div class="col" id="coli">
              <p class="font-normal">Notificaciones de aliento</p>
            </div>
            <div class="col" id="coli">
              <input style="float: right" type="submit" class="dot" value="" />
            </div>
          </div>
      </div>
                    <!--Aqui atascar las horas-->
      <form @submit.prevent="conf" class="form-in">
        <div class="container" style="color: #ff3366">
          <p class="font-normal" id="colonotis">Notificaciones rojas</p>
          <div class="row">
            <div class="col" id="colonum">
              <p class="font-normal">36</p>
            </div>
            <div class="col" id="coloras">
              <p class="font-normal">horas</p>
            </div>
          </div>

          <p class="font-normal" id="colonotis">Notificaciones amarillas</p>
          <div class="row">
            <div class="col" id="colonum">
              <p class="font-normal">72</p>
            </div>
            <div class="col" id="coloras">
              <p class="font-normal">horas</p>
            </div>
          </div>

          <p class="font-normal" id="colonotis">Notificaciones verdes</p>
          <div class="row">
            <div class="col" id="colonum">
              <p class="font-normal">+72</p>
            </div>
            <div class="col" id="coloras">
              <p class="font-normal">horas</p>
            </div>
          </div>

        </div>
      </form>
    </div>
  </div>
</template>