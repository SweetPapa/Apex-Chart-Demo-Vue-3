<template>
  <q-page class="bg-image">
    <div class="">
      <div class="row q-pa-xl" style="min-width: 100%;">
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
      <div class="row q-pa-xl"></div>
      <div class="row q-pa-xl"></div>
      <div class="row">
        <div>Example Bar Chart</div>
        <apexchart
          width="500"
          type="bar"
          :options="options"
          :series="series"
        ></apexchart>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import scoreCard from "../components/charts/score-card.vue";
import { chartData } from "../js/dummyData";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      chartData,
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  components: {
    scoreCard,
  },
  created() {
    // Populate the score cards
  },
});
</script>
<style lang="scss" scoped>
.bg-image {
}
</style>
