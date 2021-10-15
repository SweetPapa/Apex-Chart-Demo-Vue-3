<template>
  <router-view />
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue';
import VueApexCharts from "vue3-apexcharts";


export default defineComponent({
  name: 'App',
  beforeCreate(){
    const app = getCurrentInstance().appContext.app
    app.use(VueApexCharts)
  }
})
</script>
