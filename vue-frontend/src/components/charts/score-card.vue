<template>
  <q-card style="min-width: 150px">
    <q-card-section
      :style="{ 'background-color': cardColor || '#FFFFFF' }"
    >
      <div class="q-pa-sm flex" style="min-width: 100%">
        <q-icon class="col text-white" size="3em" :name="cardLogo || 'fas fa-laptop'" />
        <div class="col q-mr-sm" >
          <div class="text-white text-bold text-h4">{{ textValue || "" }}</div>
          <div class="text-h6" >{{ textLabel || "" }}</div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "score-card",
  setup() {
    return {};
  },
  props: {
    cardColor: String,
    textLabel: String,
    textValue: String || Number,
    cardLogo: String,
  },
});
</script>
