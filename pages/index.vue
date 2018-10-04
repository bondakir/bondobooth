<template>

<body>
  <div class="container">
    <main>
      <div>
          <h1>An engaging + imaginative</h1>
          <h1>photo booth experience.</h1>
        <div class="links">
          <a
            href="https://www.bondobooth.com/gallery"
            target="_blank"
            class="button">FIND YOUR EVENT</a>
          <a
            href="https://www.bondobooth.com/book"
            target="_blank"
            class="button">BOOK US</a>
        </div>
      </div>
    </main>
  </div>

</body>
</template>

<script>

</script>

<style lang="stylus">

@import '~assets/breakpoint'


.container {
  min-height: 100vh;
  width:100vw;
  background-image: url("~/assets/images/DS184623.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  margin-top:-193.18px;
  @media screen and (max-width:phone) {
    background-size:auto 100%;
    background-position: center;
    }  
}
.container:before {  
   content: "";
   display: block;
   position: absolute;
   height: 100vh;
   width: 100vw;
   background-color: rgba(0,0,0,0.2);
 }


main {
 z-index: 10;
 position: absolute;
 text-align: center;
 align-items:center;
 top: 45vh;
   left: 0;
  right: 0;
  margin: 0 auto;
 /* top: calc(50% - 112px); */
 /* left: 22%; */
 justify-content:center;
 /* transform: translateY(90%); */
}

 /*  left: calc(50% - 366px); */
 /* text-align:center;
 display: flex;
 justify-content:center;

} */


.links {
  padding-top: 15px;
}

@media (max-width:tablet) {
    .container {
        margin-top:25px;
    }
}

</style>
