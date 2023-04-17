

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
      <div class="bg-img px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
        <!-- <div class="d-flex justify-content-between"  style="margin-top: 30px">
            <div class="p-5 bg-info">Flex item 1</div>
            <div class="p-5 bg-warning">Flex item 2</div>
            <div class="p-5 bg-primary">Flex item 3</div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="p-5 bg-info">Flex item 1</div>
            <div class="p-5 bg-warning">Flex item 2</div>
            <div class="p-5 bg-primary">Flex item 3</div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="p-5 bg-info">Flex item 1</div>
            <div class="p-5 bg-warning">Flex item 2</div>
            <div class="p-5 bg-primary">Flex item 3</div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="p-5 bg-info">Flex item 1</div>
            <div class="p-5 bg-warning">Flex item 2</div>
            <div class="p-5 bg-primary">Flex item 3</div>
          </div> -->
        <h1 class="all-good text-white text-center">Select your service</h1>
        <div class="container" style="margin-top: 50px">
          <!-- <router-link to="/reddit"> -->
            <button class="box1" @click="redirectToRedditAuthorizationPage">          <!-- <div class="box1"> -->
              <img src="../../assets/reddit-removebg-preview.png" alt=""
                style="margin-top: 30px; margin-left: 30px; width: 200px" />
              </button>
          <!-- </router-link> -->
          <div class="box2">
            <img src="../../assets/pinterest-removebg-preview.png" alt="" style="margin-top: 30px; margin-left: 30px" />
          </div>
          <!-- <div class="box3"> -->
            <button class="box3" @click="loginGmailPage">
              <img src="../../assets/Gmail-Logo.png" alt=""
                style="margin-top: 50px; margin-left: 1px; width: 250px" />
            </button>
            <!-- <router-link to="/google"> -->
              
              <!-- </router-link> -->
          <!-- </div> -->
          <div class="box3">
            <img src="../../assets/one_drive_logo.png" alt="" style="margin-top: 50px; margin-left: 30px" />
          </div>
          <div class="box5">
            <img src="../../assets/you_tube_logo.png" alt="" style="margin-top: 65px; margin-left: 40px" />
          </div>
          <div class="box3">
            <router-link to="/service2"><img src="../../assets/plug.png" alt=""
                style="margin-top: 10px; margin-left: 30px" />
              <p style="margin-top: -25px; margin-left: 100px">
                To
              </p>
            </router-link>
          </div>
          <div class="box4">
            <img src="../../assets/spotify3.png" alt="" style="margin-top: 20px; margin-left: -10px" />
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
  margin-top: 20px;
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

.all-good {
  font-family: "Acme";
  font-size: 60px;
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

<!-- <script>
export default {
  data() {
    return {
      dataentry: {
        appart_id: "",
      },
    };
  },

  created() {
    const user_info = JSON.parse(localStorage.getItem("user_info")) || {};
    const size = Object.keys(user_info).length;
    if (size == 0) {
      this.$toast.warning("Vous n'êtes pas connecté", {
        duration: 2000,
      });
      this.$router.push({ name: "/login" });
    }
    // let panoscript1 = document.createElement('script')
    // panoscript1.setAttribute('src', '../src/three.min.js')
    // document.head.appendChild(panoscript1)

    // let panoscript2 = document.createElement('script')
    // panoscript2.setAttribute('src', '../src/panolens.min.js')
    // document.head.appendChild(panoscript2)

    // let panoscript3 = document.createElement('script')
    // panoscript3.setAttribute('src', '../src/pano.js')
    // document.head.appendChild(panoscript3)
  },
  methods: {
    go_back() {
      this.$router.back();
    },
  },
};
</script> -->

<script>
//import { findDir } from "@vue/compiler-core";

import axios from "axios";
// import qs from "qs";

axios.defaults.baseURL = "http://localhost:8080";

export default {
  name: "loginForm",
  data() {
    return {};
  },
  created() {
    const user_info = JSON.parse(localStorage.getItem("user_info")) || {};
    console.log(user_info);
    const size = Object.keys(user_info).length;
    if (size == 0) {
      this.$toast.warning("Vous n'êtes pas connecté", {
        duration: 2000,
      });
      this.$router.push({ path: "/home" });
    }
  },
  methods: {
    redirectToRedditAuthorizationPage() {
      const clientId = "IobzKvIgjnnWKIHFG8AkSw";
      const redirectUri = "http://localhost:8080/auth/reddit/callback";

      const redditAuthorizationUrl = `https://www.reddit.com/api/v1/authorize?client_id=${clientId}&response_type=code&state=area&redirect_uri=${redirectUri}&duration=temporary&scope=history`;
      window.location.href = redditAuthorizationUrl;
    },
    loginGmailPage() {
      axios.get("/auth/gmail")
      .then ((response) => {
        console.log(response.data)
        window.location.href = response.data.authUrl;
      })
      .catch ((error) => {
        console.log(error);
      });
    }
  },
}
</script>
