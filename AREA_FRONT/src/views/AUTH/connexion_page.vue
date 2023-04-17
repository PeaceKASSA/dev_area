<script>
// import Header_view from "../../components/header_view.vue";
//import { findDir } from "@vue/compiler-core";

import axios from "axios";
import qs from "qs";

axios.defaults.baseURL = "http://localhost:8080";

export default {
  name: "registerPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        confirm: "",
      },
      confirmation: false,
    };
  },
  methods: {
    find() {
      if (
        this.form.email == "" ||
        this.form.password == "" ||
        this.form.confirm == "" ||
        this.form.name == ""
      ) {
        this.confirmation = true;
      } else {
        this.confirmation = false;
      }
      if (this.confirmation == false) {
        axios
          .post(
            "/register",
            qs.stringify({
              name: this.form.name,
              email: this.form.email,
              password: this.form.password,
              confirm: this.form.confirm,
            })
          )
          .then((response) => {
            console.log(response);
            if (response.status == 200)
              this.$router.push("/login");
          })
        }
    },
    submit() {
      console.log(this.form);
      this.find();
    },
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
                  Welcome to Area <br />
                </h1>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="card">
                  <div class="card-body py-5 px-md-5">
                    <div class="box shadow bg-white p-4">
                      <h3 class="mb-4 text-center fs-1">Connexion Form</h3>
                      <form @submit.prevent="submit()" class="mb-3">
                        <div class="form-floating mb-3">
                          <input
                            v-model="form.name"
                            type="text"
                            class="form-control rounded-0"
                            name="name"
                            id="name"
                            placeholder="name@exemple.com"
                          />
                          <label for="NameInput">Name</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            v-model="form.email"
                            name="email"
                            type="text"
                            class="form-control rounded-0"
                            id="email"
                            placeholder="name@exemple.com"
                          />
                          <label for="EmailInput">Email</label>
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
                          <label for="PasswordInput">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            v-model="form.confirm"
                            name="confirm"
                            type="password"
                            class="form-control rounded-0"
                            id="confirm"
                            placeholder="password"
                          />
                          <label for="PasswordInputC">Confirm Password</label>
                        </div>
                        <div class="d-grid gap-2 mb-3">
                          <button
                            @click="find()"
                            type="button"
                            class="btn btn-dark btn-lg border-0 rounded-0"
                          >
                            Register
                          </button>
                        </div>
                        <!-- <div class="not-sign-up-link mb-3">
                            Don't have an account ?
                            <router-link to="/connexion"
                            ><a
                            href="#"
                            title="Not sign up"
                            class="text-decoration-none"
                            >Sign up</a
                            ></router-link
                            >
                          </div> -->
                        <div v-if="confirmation">Please fill all the informations</div>
                      </form>

                      <!-- <div class="sign-up-accounts">
                          <div
                          class="social-accounts d-flex justify-content-center"
                          >
                            <div style="margin-top:10px">Or sign up with</div>
                            <a href="#">
                              <img
                              src="../../assets/google-logo.png"
                              style="width: 50px"
                                alt=""
                                />
                            </a>
                          </div>
                        </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
</template>
