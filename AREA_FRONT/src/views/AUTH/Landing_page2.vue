<!-- eslint-disable prettier/prettier -->
<script setup>
import Header_view from "../../components/header_view.vue";
</script>

<template>
    <Header_view />
    <!-- <header>
        <nav class="head navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
            <div class="container">
                <router-link to="/home"><a href="#" class="navbar-brand"><img src="../../assets/logo_landing.png" class="rounded" style="width: 20%" alt="..." /></a></router-link>
                <button type="button" class="navbar-toggler" data-bs-target="#navbarNav" data-bs-toggle="collapse"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navbar"
                >
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="mx-auto"></div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white">Profile</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </header> -->
    
    <body>
        <div class="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
            <div class="content text-center">
                <h1 class="all-good text-black" >All is good together</h1>
                <div>
                    <img src="../../assets/Logo3.png" class="w-75" alt="..." />
                </div>
                <div>
                    <router-link to="/login"><button type="button" class="btn btn-dark">Login</button></router-link>
                    <button @click="$router.push('/connexion')" type="button" class="ms-5 btn btn-secondary">Register</button>
                    <!-- <button type="button" class="ms-5 btn btn-secondary">Register</button> -->
                </div>
            </div>
            <!-- <div class="col-sm-8 col-12 text-center"> -->
            <!-- </div> -->
        </div>
    </body>
  </template>
  
  <style>
  .head {
    background-color: rgba(0, 0, 0, 0.712);
  }
  
  .all-good {
    font-family: 'Acme';
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
  