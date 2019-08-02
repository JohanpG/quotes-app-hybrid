<template>
  <ion-app>
    <menu-left/>
    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Quotes - App</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
         <ion-vue-router />
         <ion-menu-controller></ion-menu-controller>
         <ion-modal-controller></ion-modal-controller>
         <ion-popover-controller></ion-popover-controller>
      </ion-content>
    </div>
  </ion-app>

</template>
<script>
  import MenuLeft from "@/components/menus/MenuLeft";
  export default {
    name: 'App',
    components: { MenuLeft }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
        padding: 5px;
        border: 1px solid green;
        font-size: 12px;
        margin: 10px;
    }
$light-blue: hsl(194, 49%, 73%);
$dark-blue: hsl(221, 49%, 33%);
$dark-green: hsl(166, 72%, 28%);
$light-green: hsl(156, 72%, 73%);
$gray: hsl(210, 36%, 96%);
body{
  margin:0;
}
div.quote-left{
  position:relative;
  display:flex;
  flex-direction:row;
  //align-items:center;
  align:center;
  width:100%;
  min-height:100%;
  max-height:100%;
  border-radius: 16px;
  background-color: $dark-blue;
  box-shadow:0px 0px 15px gray;
  transition: all 0.3s ease-in-out;
  margin-bottom:60px;

  div.quote-image{
    width:40%;
    height:inherit;
    background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/812449/user-blue1.jpg);
    background-position:center;
    background-size: cover;
    border-radius: 16px 0px 0px 16px;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }
  div.quote-circle{
    position:absolute;
    left:31%;
    top:40%;
    z-index:10;
    height:50px;
    width:50px;
    border-radius: 50%;
    background-color:white;
    color:$dark-blue;

    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    }
  }
  .quote-left::after {
  content: "";
  border-radius: 5px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  opacity: 0;
  -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.quote-left:hover {
  -webkit-transform: scale(1.25, 1.25);
  transform: scale(1.25, 1.25);
}

.quote-left:hover::after {
    opacity: 1;
}



div.quote-circle-inner{
  height:35px;
  width:35px;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;
  box-shadow:0px 0px 10px $dark-blue;
}
div.quote-text{
  flex:1;
  padding:10px 30px 10px 30px;
  border-radius: 0px 16px 16px 0px;
  color:white;
  font-family: proxima-nova, sans-serif;
  font-style:italic;
  font-size:18px;
  font-weight:100;
  line-height:22px;

div.quote-author{
    text-align:right;
    font-size:20px;
    font-weight:500;
    font-style:normal;
    color:$light-blue;
  }

  div.quote-to{
    text-align:left;
    font-size:20px;
    font-weight:500;
    font-style:normal;
    color:$light-blue;
  }
}
div.quote-right{
  position:relative;
  display:flex;
  flex-direction:row;
  //align-items:center;
  align:center;
  width:100%;
  min-height:100%;
  max-height:100%;
  border-radius: 16px;
  background-color: $dark-green;
  box-shadow:0px 0px 15px gray;
  transition: all 0.3s ease-in-out;
  margin-bottom:60px;

div.quote-image{
    width:40%;
    height:inherit;
    background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/812449/user-gray1.jpg);
    background-position:center;
    background-size: cover;
    border-radius: 0px 16px 16px 0px;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
  }

div.quote-circle{
    position:absolute;
    right:31%;
    top:40%;
    z-index:10;
    height:50px;
    width:50px;
    border-radius: 50%;
    background-color:white;
    color:$dark-green;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;

    div.quote-circle-inner{
      height:35px;
      width:35px;
      border-radius: 50%;

      display:flex;
      justify-content:center;
      align-items:center;
      text-align:center;
      box-shadow:0px 0px 10px $dark-green;
    }
  }
  div.quote-text{
    flex:1;
    padding:10px 20px 10px 40px;
    border-radius: 0px 16px 16px 0px;
    color:white;
    font-family: proxima-nova, sans-serif;
    font-style:italic;
    font-size:18px;
    font-weight:100;
    line-height:22px;

div.quote-author{
      text-align:right;
      font-size:20px;
      font-weight:500;
      font-style:normal;
      color:$light-green;
    }
    div.quote-to{
      text-align:left;
      font-size:20px;
      font-weight:500;
      font-style:normal;
      color:$light-green;
    }
  }
}

.quote-right::after {
content: "";
border-radius: 5px;
position: absolute;
z-index: -1;
top: 0;
left: 0;
width: 100%;
height: 100%;
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
opacity: 0;
-webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.quote-right:hover {
-webkit-transform: scale(1.25, 1.25);
transform: scale(1.25, 1.25);
}

.quote-right:hover::after {
  opacity: 1;
}

.spin{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 }
 ion-spinner {
    width: 28px;
    height: 28px;
    stroke: #444;
    fill: #222;
 }
</style>
