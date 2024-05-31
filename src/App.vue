<script setup>
import MainMap from "@/components/MainMap.vue";
</script>

<template>
  <main>
    <section class="main-text">
      <h1>Sankthans i Børne&shy;højde</h1>
      <p>
        <time datetime="2024-06-23">Søndag d. 23. juni 2024</time>
      </p>
      <p>Naturlegepladsen i lergravene i Nivå.</p>
      <p>Rødgrød, leg og hygge fra
        <time datetime="2024-06-23T16:30">kl. 16.30</time>.
      </p>

      <p>Bålet tændes
        <time datetime="2024-06-23T16:30">kl. 17.30</time>.
      </p>
    </section>
    <div class="main-illustration-wrapper">
      <img class="main-illustration" src="@/assets/sankthans-baal.png" alt="Maleri af børn omkring et sankthansbål">
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
  font-size: 3.75rem;
  font-weight: normal;
  line-height: 1.125em;
  z-index: 1;
  text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .1);
  margin-bottom: 1rem;
}

.main-text {
  padding: 1rem;
}

p {
  font-size: 1.25rem;
}

p + p {
  margin-top: 1em;
}

.main-illustration-wrapper {
  overflow: hidden;
  width: 100vw;
  max-width: 50rem;
  order: -1;
  margin-bottom: -8rem;
}

.main-illustration {
  display: block;
  margin: -5rem -1.125rem -1.125rem;
  width: calc(100% + 2.25rem);
  max-width: unset;
  mask-image: linear-gradient(white, transparent 95%, transparent 98%);
}

.main-map {
  margin: 2rem 0 0;
}
</style>
