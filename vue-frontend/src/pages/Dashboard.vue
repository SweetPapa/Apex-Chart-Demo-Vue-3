<template>
  <q-page>
    <div>
      <!-- Score Cards -->
      <div class="row q-pa-xl" style="min-width: 100%">
        <score-card
          class="q-ma-md col"
          v-for="scorecard in chartData.scorecard"
          v-bind:key="scorecard.textLabel"
          :textLabel="scorecard.textLabel"
          :textValue="scorecard.textScore"
          :cardColor="scorecard.cardColor"
          :cardLogo="scorecard.logoTag"
        />
      </div>

      <!-- Donut Chart -->
      <div class="row q-pa-xl">
        <apexchart
          width="325"
          type="donut"
          :options="chartData.piechart.options"
          :series="chartData.piechart.series"
          :labels="chartData.piechart.labels"
        ></apexchart>
      </div>
      <div class="row q-pa-xl"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { chartData } from "../js/dummyData";
import scoreCard from "../components/charts/score-card.vue";

export default defineComponent({
  name: "Dashboard",
  setup() {
    return {
      chartData
    };
  },
  components: {
    scoreCard
  }
});
</script>

<style lang="scss" scoped>
</style>
