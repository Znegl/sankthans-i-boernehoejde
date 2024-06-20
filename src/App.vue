<script setup>
import MainMap from "@/components/MainMap.vue";
import { inject } from '@vercel/analytics';

inject();
</script>

<template>
  <main>
    <section class="text-section main-text-section">
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
      <h1>Velkommen i græsset</h1>
      <p>Vi glæder os til at dele en hyggelig sankthansaften med jer! For at gøre det ekstra hyggeligt, anbefaler vi at i pakker cyklerne med skovturstæpper, en lækker madpakke og noget godt at drikke.</p>
    </section>
    <section class="text-section">
      <h2>Mad & drikke</h2>
      <p>Vi serverer gratis rødgrød med fløde.</p>
      <p>Alle tager deres egen mad og drikke med.</p>
      <p>Der er to bålpladser til rådighed for grillning, men vi forventer at blive flere hundrede mennesker, så det er ikke sikkert at der er plads til at alle kan grille på samme tid.</p>
      <h3>Kaffe & kage</h3>
      <p>Der vil være mulighed for at købe både kaffe og kage ved vores kagebord. Donationer til kagebordet er også meget velkomne. Alle indtægter går til næste års arrangement.</p>
    </section>
    <section class="text-section">
      <h2>Båltænding & sang</h2>
      <p>Før bålet tændes, siger vi et par ord — ikke nogen længere båltale. Derefter synger vi i fællesskab <a href="https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/m-n/midsommervise">Midsommervisen</a> akkompagneret af lidt musik, imens bålet tændes. Børnene i storegruppen i Solstrålen (Solsikkerne) har lavet en figur til bålet.</p>
    </section>
    <section class="text-section">
      <h2>Toilet</h2>
      <p>Der er toilet med puslebord tæt på bålpladsen.</p>
    </section>
    <section class="text-section">
      <h2>Affald</h2>
      <p>Da der kun er en enkelt skraldespand i området, opfordrer vi alle til at tage deres eget affald med hjem.</p>
    </section>
    <section class="text-section">
      <h2>Parkering</h2>
      <p>Der er masser af plads til cykelparkering langs stien. Parkering af biler er der ikke meget plads til i området, så vi anbefaler at I lader bilen stå derhjemme og tager en hyggelig gå- eller cykeltur i den lune sommeraften.</p>
    </section>
    <section class="text-section">
      <h2>Hvem står bag?</h2>
      <p>
        Sankthans i Børnehøjde afholdes af en lille flok frivillige forældre på tværs af Nivå, med støtte fra <a href="https://fdfnivå.dk">FDF Nivå</a>.
      </p>
      <img class="fdf-nivaa-logo" src="@/assets/fdf-nivå-logo.svg" alt="FDF Nivås logo" >
    </section>
    <section class="text-section">
      <h2>Støt</h2>
      <p>Arrangementets eneste indtægter kommer fra kagebord og donationer. Alle indtægter går ubeskåret til drift og løbende forbedring af arrangementet.</p>
      <p>
        Donationer modtages med kyshånd på vores <a href="https://qr.mobilepay.dk/box/9bbbf8b8-b2de-407f-839f-b9e7d7602d5b/pay-in">MobilePay Box</a>.
      </p>
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  position: relative;
  z-index: 1;
  text-shadow: 0 .125rem .25rem rgba(0, 0, 0, .1);
}

h3 {
  margin-top: 2rem;
}

.text-section {
  padding: 1rem 1rem 3rem;
  max-width: 50rem;
  width: 100%;
}

.main-text-section {
  text-align: center;
}

.main-illustration-wrapper {
  overflow: hidden;
  width: 100%;
  max-width: 1920px;
  order: -1;
  margin-bottom: -8rem;
}

.main-illustration {
  display: block;
  margin: -5rem -2rem -2rem;
  width: calc(100% + 4rem);
  max-width: unset;
  max-height: 700px;
  object-fit: cover;
  mask-image: linear-gradient(white 60%, transparent 95%, transparent 98%);
}

.main-map {
  margin: 1rem 0 3rem;
}

.fdf-nivaa-logo {
  margin-top: 2rem;
  height: 5rem;
  //width: 25rem;
  max-width: 100%;
}
</style>
