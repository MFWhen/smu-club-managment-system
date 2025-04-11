<template>
  <v-card hover>
    <v-card-title>{{ club.name }}</v-card-title>
    <v-card-text>{{ club.description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="viewClub">View</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['club'],
  methods: {
    viewClub() {
      this.$router.push(`/clubs/${this.club.id}`)
    }
  }
}
</script>
