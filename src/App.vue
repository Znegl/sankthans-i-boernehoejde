<script setup>
import MainMap from "@/components/MainMap.vue";
</script>

<template>
  <main>
    <h1>Sankthans i Børnehøjde</h1>
    <p>Nivås børnevenlige Sankthans-arrangement.</p>
    <p><time datetime="2024-06-23">Søndag d. 23. juni</time> kl. <time datetime="16:30">16.30</time> til <time datetime="19:00">19.00</time></p>
    <MainMap/>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
  text-align: center;
}

.main-map {
  margin: 2rem -2rem 0;
  width: calc(100% + 4rem);
}
</style>
