<template>
  <section>
    <header><h1>Melo Valutawisselaar</h1></header>
    <valuta-kiezen></valuta-kiezen>
  </section>
</template>

<script>
import valutaKiezen from './components/valutaKiezen.vue';
export default {
  components: { valutaKiezen },
};

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #f4f4f4; 
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin: 2rem auto;
  border-radius: 8px;
  padding: 1rem;
  background-color: #4CAF50; 
  color: white;
  text-align: center;
  width: 85%;
  max-width: 35rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin: 1rem auto;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 85%;
  max-width: 35rem;
  background-color: white; 
}

#app h2 {
  font-size: 1.8rem; 
  border-bottom: 2px solid #ccc;
  color: #4CAF50; 
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #FFD700; 
  background-color: #FFD700; 
  color: white;
  padding: 0.1rem 1.2rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
}

#app button:hover,
#app button:active {
  background-color: #DAA520; 
  border-color: #DAA520;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
}

select {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
}

select option {
  padding: 8px;
  background-color: #f8f8f8;
  color: #333;
}

select option:hover {
  background-color: #e2e2e2;
}


</style>