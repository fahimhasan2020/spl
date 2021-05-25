<template>
  <div>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      :height="windowHeight"
      transition-prev="fade"
      transition-next="fade"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
    <div class="flexa social-btns">
      <div class="q-pa-md">
        <div class="row">
          <div class="col-12 col-md-6" style="text-align: center">
            <h5>Download our app</h5>
            <h1>SPL</h1>
          </div>
          <div class="col-12 col-md-4">
            <a class="app-btn blu flex vert" href="http:apple.com">
              <i class="fab fa-apple"></i>
              <p>Available on the <br/> <span class="big-txt">IOS</span></p>
            </a>
            <a class="app-btn blu flex vert" href="http:google.com">
              <i class="fab fa-google-play"></i>
              <p>Get it on <br/> <span class="big-txt">Android</span></p>
            </a>
          </div>


        </div>
      </div>
    </div>
    <div>
      <h1>features</h1>
    </div>
    <div class="footr">
      <div class="row">
        <div class="col-12 col-md-3">
          <h3>Disclaimer</h3>
          <p style="color: #937e7e;width: 250px">SPL games is multi gaming platform, builts on the basis of online game. You can earn money from our application.</p>
        </div>
        <div class="col-12 col-md-3">
          <h4>Useful links</h4>
          <ol>
            <li>Home</li>
            <li>Login</li>
            <li>Register</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ol>
        </div>
        <div class="col-12 col-md-3">
          <h4>Check our app</h4>
          <ol>
            <li>Download android</li>
            <li>Download Ios</li>
          </ol>
        </div>
        <div class="col-12 col-md-3">
          <h4>Follow us on social media</h4>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
      <p>Copyright &copy; spl.games 20021, All rights reserved.</p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Index',
  meta: {
    title: 'SPL | Super Premier League',
    noscript: {
      default: 'Ops! Your browser does not support javascript'
    },
    meta: {
      description: { name: 'description', content: 'SPL' },
      keywords: { name: 'keywords', content: 'SPL' }
    }
  },
  data () {
    return {
      name: 'Home',
      slide: 1,
      autoplay: true,
      windowHeight: 0
    }
  },
  methods: {
    onSubmit () {
      //
    }
  },
  created(){
    this.windowHeight = (window.innerHeight - 50) + 'px'
  }
}
</script>
<style>
.flexa {
  height: 300px;
  background-color: #adadad;
}

.app-btn {
  width: 45%;
  max-width: 160px;
  color: #fff;
  padding-top: 15px;
  padding-left: 10px;
  margin: 20px 10px;
  text-align: left;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Lucida Grande", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
}
.app-btn.blu {
  background-color: #101010;
  transition: background-color 0.25s linear;
}
.app-btn.blu:hover {
  background-color: #454545;
}
.app-btn i {
  width: 20%;
  text-align: center;
  font-size: 28px;
  margin-right: 7px;
}
.app-btn .big-txt {
  font-size: 17px;
  text-transform: capitalize;
}
.footr{
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: #391a05;
}
</style>
