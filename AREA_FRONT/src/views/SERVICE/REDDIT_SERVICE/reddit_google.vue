<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<style scoped>
/* .bg-img {
  background-image: url("@/assets/background.jpg");
} */
.head {
  background-color: rgba(0, 0, 0, 0.712);
}

.all-good {
  font-family: "Acme";
  font-size: 60px;
}
/* .banner-image {
  background-image: url(../../assets/background.jpg);
  background-size: cover;
} */
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
import Header_view from "../../../components/header_view.vue";
</script>

<template>
  <Header_view />

  <body>
    <body>
      <div
        class="bg-img px-4 py-5 px-md-5 text-center text-lg-start"
        style="background-color: hsl(0, 0%, 96%)"
      >
        <div class="container" style="margin-top: 50px">
          <button class="box3">
            <img
              src="../../../assets/reddit-removebg-preview.png"
              alt=""
              style="margin-top: -60px; margin-left: 10px; width: 70px"
            />
            <img
                src="../../../assets/Gmail-Logo.png"
                alt=""
                style="margin-top: -60px; margin-left: 50px; width: 70px"
            />
            <div style="font-size: 50%">Save a post on reddit, get an email with the post title</div>
          </button>
          <div class="box1">
            AREA 2
            <router-link to="/"></router-link
            >
            <!-- <img
              src="../../assets/twitter-removebg-preview.png"
              alt=""
              style="margin-top: 30px; margin-left: 30px"
            /> -->
          </div>

          <div class="box1">AREA 3</div>
          <div class="box_trans">
            <!-- <img
                  src="../../assets/google_logo.png"
                  alt=""
                  style="margin-top: 30px; margin-left: 30px"
              /> -->
          </div>
          <div class="box_trans"></div>

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
/* .banner-image {
  background-image: url(../../assets/background.jpg);
  background-size: cover;
} */
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
