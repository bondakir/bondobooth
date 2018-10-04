<template>
    <div>
      <div class="mobilemenu" :class="{open:menuOpen}">
        <ul>
          <li><a href="/about">about</a></li>
          <li><a href="/gallery">gallery</a></li>
          <li><a href="/booths">photo booths</a></li>
          <li><a href="/events">events</a></li>
          <li><a href="/faq">faq</a></li>
          <li><a href="contact.html">contact</a></li>
        </ul>
      </div>
      <nav>
        <a href="/about">about</a>
        <a href="/gallery">gallery</a>
        <a href="/booths">photo booths</a>
        <img id="nav-logo" src="https://static1.squarespace.com/static/59b726b3bebafb5c24ca98d2/t/59dc33419f8dceedaf2e4cec/1526942355543/?format=1500w" alt="Bondo Booth Logo">
        <a href="events">events</a>
        <a href="/faq">faq</a>
        <a href="contact.html">contact</a>
      </nav>
      <div class="menu">
        <img class="x" :class="{close:menuOpen}" @click="closeMenu" src="~/assets/images/letter-x.png" alt="Close Menu">
        <img id="menulogo" src="~/assets/images/Bondo--Square-Logo-Black.png">
        <img id="hamburger"  @click="openMenu" src="~/assets/images/menu.png">
       </div>
      
    </div>

</template>

<script>
export default {
  data(){
    return {
      menuOpen:false
    }
  },
  methods:{
    openMenu(){
      console.log('open')
      this.menuOpen = true;
    },
    closeMenu(){
      this.menuOpen = false;
    }
  }
}
</script>

<style lang="stylus">

@import '~assets/breakpoint'

 nav {
  display: flex;
  align-items: center;
  width:100%;
  justify-content: space-between;
  padding: 0px 60px;
  font-size: 19px;
  z-index: 100;
  position: relative;
  background-color:transparent;
  @media screen and (max-width:phone) {
    font-size:16px;
    }  

}

#nav-logo {
  max-width:250px;
  padding: 0px;
}

a {
  color:black;
  text-decoration:none;
}

a:hover {
  color:gray;
}

.menu {
  display:none;
}

#hamburger {
  width:30px;
}

#menulogo {
  width:200px;
  height:auto;
}

.mobilemenu {
  display:none;
}

.x {
  width:5vw;
  position:fixed;
  left:33vw;
  top:10px;
  display:none;
}

.close {
  display:block;
}

.open {
  display:block;
  position:fixed;
  right:0;
  background-color:#ef5897;
  opacity:0.92;
  height:100vh;
  width:55vw;
  z-index:200;

}
ul {
  list-style-type: none;
  font-size:3vh;
}

li {
  margin-top:5vh;
  margin-left:3vw;
}

div.open ul li a {
  color:white;
}

@media (max-width:tablet) {
  nav {
    display:none;
  }
  .menu {
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 100;
    position: relative;
    justify-content:space-between;
    padding-left:20%;
    padding-right:20%;
  }
}

@media (min-width:tablet) {
  .open {
    display:none;
  }
}

@media (min-width:phone) {
    ul {
    list-style-type: none;
    font-size:3vh;
}
}

</style>