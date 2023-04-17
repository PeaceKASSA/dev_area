<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<style scoped>
.bg-img {
  background-image: url("@/assets/background.jpg");
}
.head {
  background-color: rgba(0, 0, 0, 0.712);
}

.all-good {
  font-family: "Acme";
  font-size: 60px;
}
.banner-image {
  background-image: url(../../assets/background.jpg);
  background-size: cover;
}
#login_button {
  position: relative;
  left: 500px;
}

#register_button {
  position: relative;
  left: 670px;
  top: -39px;
}
</style>
<script setup>
import Header_view from "../../components/header_view.vue";
</script>

<template>
  <Header_view />

  <body>
    <body>
      <div
        class="bg-img px-4 py-5 px-md-5 text-center text-lg-start"
        style="background-color: hsl(0, 0%, 96%)"
      >
      <h1 class="all-good text-white text-center" >Select your service for reaction</h1>

        <div class="container" style="margin-top: 50px">
          <div class="box_trans">
          </div>
          <div class="box3">
            <img
                src="../../assets/pinterest-removebg-preview.png"
                alt=""
                style="margin-top: 30px; margin-left: 30px"
            />
          </div>
          <div class="box_trans">
          </div>
          <div class="box1">
            <!-- <img
              src="../../assets/one_drive_logo.png"
              alt=""
              style="margin-top: 50px; margin-left: 30px"
            /> -->
          </div>
          <div class="box1">
            <router-link to="/google_twitter"><img
              src="../../assets/twitter-removebg-preview.png"
              alt=""
              style="margin-top: 30px; margin-left: 30px"
            /></router-link>
          </div>
          <div class="box1">
            <!-- <router-link to="/service2"
              ><img
                src="../../assets/plug.png"
                alt=""
                style="margin-top: 10px; margin-left: 30px"
              />
              <p style="margin-top: -25px; margin-left: 100px">
                To
              </p></router-link
            > -->
          </div>
          <div class="box_trans">
            <!-- <img
              src="../../assets/spotify3.png"
              alt=""
              style="margin-top: 20px; margin-left: -10px"
            /> -->
          </div>
        </div>
      </div>
    </body>
  </body>
</template>

<style>
.head {
  background-color: rgba(0, 0, 0, 0.712);
}

.all-good {
  font-family: "Acme";
  font-size: 60px;
}
.banner-image {
  background-image: url(../../assets/background.jpg);
  background-size: cover;
}
#login_button {
  position: relative;
  left: 500px;
}

#register_button {
  position: relative;
  left: 670px;
  top: -39px;
}
.container {
  width: 100%;
  height: auto;
  /*background: black;*/
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
}

.box {
  width: 250px;
  height: 250px;
  background: yellow;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}
.all-good {
  font-family: "Acme";
  font-size: 60px;
}
.box_trans {
  width: 250px;
  height: 250px;
  background: rgba(255, 255, 255, 0);
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}
.box1 {
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}

.box2 {
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}

.box3 {
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}

.box4 {
  width: 250px;
  height: 250px;
  background: black;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}

.box5 {
  width: 250px;
  height: 250px;
  background: red;
  margin: 20px;
  box-sizing: border-box;
  font-size: 50px;
  border-radius: 25%;
}

@media screen and (max-width: 1200px) {
  .box {
    width: 40%;
  }
  .image1 {
    margin-top: 1000px;
  }
}

@media screen and (max-width: 600px) {
  .box {
    width: 90%;
  }
}
</style>
