<script>
//import { findDir } from "@vue/compiler-core";

import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "http://localhost:8080";

export default {
  name: "loginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      confirmation: false,
    };
  },
  methods: {
    callback(Auth) {
      console.log(Auth);
    },
    redirect_after_google() {
      axios
        .post(
          "/login",
          qs.stringify({
            email: this.form.email,
            password: this.form.password,
          })
        )
        .then((response) => {
          console.log(response);
          if (response.status == 200)
            localStorage.setItem("token", response.data.token);
          this.$router.push("/connexion_verification");
        })
        .catch((error) => {
          console.log(error);
        });
      this.$router.push("/service");
    },
    find() {
      if (this.form.email == "" || this.form.password == "") {
        this.confirmation = true;
      } else {
        this.confirmation = false;
      }
      if (this.confirmation == false) {
        axios
          .post(
            "/login",
            qs.stringify({
              email: this.form.email,
              password: this.form.password,
            })
          )
          .then((response) => {
            let get_data = response.data;
            console.log(response);
            if (response.status == 200) {
              // localStorage.setItem('user_info', get_data)
              localStorage.setItem("user_info", JSON.stringify(get_data));
              this.$router.push("/connexion_verification");
            }
          });
      }
    },
    submit() {
      console.log(this.form);
      this.find();
    },
  },
  mounted() {
    const googleScript = document.createElement("script");
    googleScript.src = "https://accounts.google.com/gsi/client";
    document.head.appendChild(googleScript);
    window.addEventListener("load", () => {
      window.google.accounts.id.initialize({
        client_id:
          "797459302927-9mf23v1thrd9fm0lo2slb0hcda6bp2ke.apps.googleusercontent.com",
        callback: this.callback,
      });
    this.$router.push("/service");
    });
  },
};
</script>

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
  <!-- Section: Design Block -->
  <Header_view />

  <body>
    <div class="card bg-dark text-back">
      <section class="">
        <div
          class="bg-img px-4 py-5 px-md-5 text-center text-lg-start"
          style="background-color: hsl(0, 0%, 96%)"
        >
          <div class="container">
            <div class="row gx-lg-5 align-items-center mt-5">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <h1 class="my-5 display-3 fw-bold ls-tight">
                  Welcome Back to Area <br />
                </h1>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <form>
                      <!-- 2 column grid layout with text inputs for the first and last names -->
                      <!-- <div class="row content d-flex justify-content-center align-items-center"> -->
                      <!-- <div class="col-md-5"> -->
                      <div class="box shadow bg-white p-4">
                        <h3 class="mb-4 text-center fs-1">Login Form</h3>
                        <form @submit.prevent="submit()" action="" class="mb-3">
                          <div class="form-floating mb-3">
                            <input
                              v-model="form.email"
                              name="email"
                              type="text"
                              class="form-control rounded-0"
                              id="email"
                              placeholder="name@exemple.com"
                            />
                            <label for="floatingInput">Email</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input
                              v-model="form.password"
                              name="password"
                              type="password"
                              class="form-control rounded-0"
                              id="password"
                              placeholder="password"
                            />
                            <label for="floatingPassword">Password</label>
                          </div>
                          <div class="d-grid gap-2 mb-3">
                            <button
                              @click="find()"
                              type="button"
                              class="btn btn-dark btn-lg border-0 rounded-0"
                            >
                              Login
                            </button>
                          </div>
                          <div class="not-sign-up-link mb-3">
                            Don't have an account ?
                            <router-link to="/connexion"
                              ><a
                                href="#"
                                title="Not sign up"
                                class="text-decoration-none"
                                >Sign up</a
                              ></router-link
                            >
                          </div>
                        </form>
                        
                        <div class="sign-up-accounts">
                          <div
                            id="g_id_onload"
                            data-client_id="797459302927-9mf23v1thrd9fm0lo2slb0hcda6bp2ke.apps.googleusercontent.com"
                            data-context="signin"
                            data-ux_mode="popup"
                            data-auto_prompt="false"
                          ></div>

                          <div
                            class="g_id_signin"
                            data-type="standard"
                            data-shape="rectangular"
                            data-theme="outline"
                            data-text="signin_with"
                            data-size="large"
                            data-logo_alignment="left"
                          ></div>
                        </div>
                      </div>
                      <!-- </div> -->
                    </form>
                    <div v-if="confirmation">Informations not complete</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
    </div>
  </body>
  <!-- Section: Design Block -->
</template>
