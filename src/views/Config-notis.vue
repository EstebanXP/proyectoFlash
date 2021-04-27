<template>
    <div class="container-fluid">
        <!--Esta es la parte de arriba del cuaduito, donde va el logo y la flecha-->
        <div class="pad-top-events gradient">
                <img src="../assets/logo.png" style="width:2%; min-width:80px">
        </div>
        <div  id=backEvents>
                <h1 id="h1Events">Mostrar proximos eventos</h1>
                <form @submit.prevent="conf" class="form-in">
                <div style="padding-top:10px"></div>
            
                <div  class="botones">
                    <p style="color: black; " id="sem">1 semana</p>
    
                    <input style="float:left;" type="submit" class=" dot" value="">
                </div>
                <br>
                <div  class="botones">
                    <p style="color: black; ">2 semanas</p>
                    
                    <input style="float:left;" type="submit" class=" dot-fill" value="">
                </div>
                <br>
                <div  class="botones">
                    <p style="color: black; ">1 mes</p>
                    
                    <input style="float:left;" type="submit" class=" dot-fill" value="">
                </div>
                <br>
                <div  class="botones">
                    <p style="color: black; ">todos</p>
                    
                    <input style="float:left;" type="submit" class=" dot-fill" value="">
                </div>
               
            </form>
        </div>   
    </div>
</template>








