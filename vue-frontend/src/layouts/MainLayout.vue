<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer()"
        />

        <q-toolbar-title>Vue Demo </q-toolbar-title>

        <div>Built with Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-white">
      <img
        class="q-pa-sm q-mt-md"
        alt="SPC logo"
        src="~assets/spc.png"
        style="width: 200px; height: auto"
      />
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Home",
    caption: "Homepage",
    icon: "home",
    link: "/",
  },
    {
    title: "Chart Dashboard",
    caption: "Demo of Apex Charts",
    icon: "graph",
    link: "/dashboard",
  },
  {
    title: "Credits",
    caption: "Tools I Used to Build This Site",
    icon: "graph",
    link: "/",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
</script>

<style lang="scss" scoped>
.bgColor {
  background-color: black;
}
</style>