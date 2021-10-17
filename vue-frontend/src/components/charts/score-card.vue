<template>
  <q-card style="min-width: 250px">
    <q-card-section
      :style="{ 'background-color': cardColor || '#FFFFFF' }"
    >
      <div class="q-ma-md flex" style="min-width: 100%">
        <q-icon class="col text-white" size="4em" :name="cardLogo || 'fas fa-laptop'" />
        <div class="col">
          <div class="text-white text-bold text-h3">{{ textValue || "" }}</div>
          <div class="text-h6 q-pl-sm" >{{ textLabel || "" }}</div>
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
    textValue: String,
    cardLogo: String,
  },
});
</script>
