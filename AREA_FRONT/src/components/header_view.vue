<template>
  <header>
    <nav class="head navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <router-link to="/home"
          ><a href="#" class="navbar-brand"
            ><img
              src="../assets/logo_landing.png"
              class="rounded"
              style="width: 20%"
              alt="..." /></a
        ></router-link>

        <button
          type="button"
          class="navbar-toggler"
          data-bs-target="#navbarNav"
          data-bs-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle Navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/home"
                ><a href="#" class="nav-link text-white">Home</a></router-link
              >
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">About</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link text-white">Profile</a>
            </li>
            <li class="nav-item">
              <button class="dropdown-item text-danger" @click="disconnect">
                Deconnexion
              </button>
            </li>
            <!-- <li class="nav-item"> -->
            <!-- <a
                ><img
                  src="../assets/logout.jpg"
                  class="rounded"
                  style="width: 5%"
                  alt="..."
              /></a> -->
            <!-- </li> -->
          </ul>
          <!-- <a @click="disconnect"
            ><img
              src="../assets/logout.jpg"
              class="rounded"
              style="width: 5%"
              alt="..."
          /></a> -->
        </div>
      </div>
    </nav>
  </header>
</template>

<!-- <script>
import axios from "axios";
export default {
  name: "Header_view",
  methods: {},
  data() {
    return {};
  },
  disconnect() {
    // localStorage.clear();
    // this.$router.push("/home");
    const user_info = JSON.parse(localStorage.getItem("user_info"));
    const token = user_info["token"];
    let reqInstance = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.post("/logout", {}, reqInstance).then((response) => {
      console.log(response);
      this.$toast.success("Deconnexion réussi", {
        duration: 2000,
      });
      // if (this.$router.currentRoute._value.name == "/home") {
      //   this.$router.go(0);
      // } else {
      //   this.$router.path({ name: "/home" });
      // }
      localStorage.clear();
      this.$router.push("/home");
    });
    //   // .catch((err) => {
    //   //   console.log(err.response.data);
    //   // });
  },
};
</script> -->

<script>
export default {
  name: "Header_view",
  methods: {
    disconnect() {
      localStorage.clear();
      this.$router.push('/login');
    }
  },
};
</script>
