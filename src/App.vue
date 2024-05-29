<script setup>
import MainMap from "@/components/MainMap.vue";
</script>

<template>
  <main>
    <h1>Sankt&shy;hans i Børne&shy;højde</h1>
    <p>Nivås børnevenlige Sankthans-arrangement.</p>
    <p>
      <time datetime="2024-06-23">Søndag d. 23. juni</time>
      kl.
      <time datetime="16:30">16.30</time>
      til
      <time datetime="19:00">19.00</time>
    </p>
    <div class="img-wrapper">
      <img src="@/assets/fire.png" alt="Sankthansbål">
    </div>
    <MainMap/>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

h1 {
  font-family: Lilita One, Work Sans, sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
}

p + p {
  margin-top: 1em;
}

.img-wrapper {
  overflow: hidden;
  width: 100vw;
  max-width: 50rem;
  order: -1;
}

img {
  display: block;
  margin: -5rem -1.125rem -1.125rem;
  width: calc(100% + 2.25rem);
  max-width: unset;
}

.main-map {
  margin: 2rem 0 0;
  width: calc(100% + 4rem);
}
</style>
