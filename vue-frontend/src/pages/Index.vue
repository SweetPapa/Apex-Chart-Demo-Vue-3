<template>
  <q-page class="bg-image flex flex-center">
    <div style="min-width: 100%; min-height: 100%">
      <div class="">
        <center>
        <img
          class="col q-pt-xl"
          alt="Sweet Papa Consulting Marketing Image"
          src="~assets/spc-mid-logo.png"
          style="width: 50vw; height: auto; max-width: 500px; user-drag: none; -moz-user-select: none; -webkit-user-drag: none;
"
        />
        <div class="col text-h1 text-white">Apex Charts Demo</div>
        <div class="col text-h5 text-white">by Forrester Terry <a class="text-blue text-h6" style="text-decoration:none;" href="https://github.com/SweetPapa">(@SweetPapa)</a></div>

        </center>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
<style lang="scss" scoped>
.bg-image {
  background-image: url("https://firebasestorage.googleapis.com/v0/b/spc-apexchart-demo.appspot.com/o/assets%2FSnow-night.gif?alt=media&token=7890a56d-84e4-43c8-864e-f963c7c92fe0");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(56, 55, 53, 0.8);
}
</style>
