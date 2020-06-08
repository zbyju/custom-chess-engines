<template>
  <div class="home">
    <p>Config: {{ config }}</p>
    <Board />
  </div>
</template>

<script>
import Board from "@/components/Board.vue";

export default {
  name: "Home",
  components: {
    Board
  },
  data() {
    return {
      config: this.$route.params.config
    };
  }
};
</script>
