<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->

<!--  <h1 class="py-2">test tailwindcss</h1>-->
  <router-view></router-view>
</template>

<style lang="scss">
//@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;

  //min-height: 100vh;

  @apply min-h-screen;
}

//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>
