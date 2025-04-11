<template>
  <v-app>
    <app-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '@/components/navigation/AppHeader.vue'

export default {
  components: { AppHeader }
}
</script>
