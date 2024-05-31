<script setup>
import MainMap from "@/components/MainMap.vue";
</script>

<template>
  <main>
    <section class="text-section">
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
    <section class="text-section">
      <h2>Hvem står bag?</h2>
      <p>
        Sankthans i Børnehøjde afholdes af en lille flok frivillige på tværs af Nivå, med støtte fra <a href="https://fdfnivå.dk">FDF Nivå</a>.
      </p>
      <img class="fdf-nivaa-logo" src="@/assets/fdf-nivå-logo.svg" alt="FDF Nivås logo" >
    </section>
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
  position: relative;
  z-index: 1;
  text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .1);
}

.text-section {
  padding: 1rem;
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
  mask-image: linear-gradient(white 60%, transparent 95%, transparent 98%);
}

.main-map {
  margin: 3rem 0;
}

.fdf-nivaa-logo {
  margin-top: 2rem;
  height: 5rem;
  //width: 25rem;
  max-width: 100%;
}
</style>
