<template>
  <v-container>
    <h1 class="mb-6">University Clubs</h1>
    <club-list />
  </v-container>
</template>

<script>
import ClubList from '@/components/club/ClubList.vue'

export default {
  components: { ClubList }
}
</script>