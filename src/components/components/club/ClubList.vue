<template>
  <v-row>
    <v-col 
      v-for="club in clubs" 
      :key="club.id" 
      cols="12" md="6" lg="4"
    >
      <club-card :club="club" />
    </v-col>
  </v-row>
</template>

<script>
import ClubCard from '@/components/club/ClubCard.vue'

export default {
  components: { ClubCard },
  data: () => ({
    clubs: [
      { id: 1, name: 'Coding Club', description: 'For tech enthusiasts' },
      { id: 2, name: 'Debate Society', description: 'Public speaking club' }
    ]
  })
}

import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('club', ['clubs'])
  }
}

</script>
