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
  display: flex;
  justify-content: center;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: #4CAF50;
  color: white;
  text-align: center;
}

#app {
  width: 100%;
  max-width: 35rem;
  padding: 1rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  margin: 1rem 0;
  border-radius: 8px;
  padding: 1rem;
  background-color: white;
}

#app h2 {
  font-size: 1.8rem;
  border-bottom: 2px solid #ccc;
  color: #4CAF50;
  margin-bottom: 1rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #FFD700;
  background-color: #FFD700;
  color: white;
  padding: 0.5rem 1.2rem;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
}

#app button:hover,
#app button:active {
  background-color: #DAA520;
  border-color: #DAA520;
}

select {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 1rem;
}

select option {
  padding: 8px;
  background-color: #f8f8f8;
  color: #333;
}

select option:hover {
  background-color: #e2e2e2;
}

input[type='number'] {
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.dropdown {
  color: #FFF;
  padding: 10px 150px;
  position: relative;
  text-align: center;
  margin-left: 80px;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  background-color: #4CAF50;
  width: max-content;
  border-radius: 8px;
}

.dropdown:hover {
  background-color: #444;
  border-bottom-color: #DAA520;
}

.dropdown option {
  color: #333;
  background-color: #f8f8f8;
}

.dropdown option:hover {
  background-color: #e2e2e2;
}

.input-bedrag {
  color: #333;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid transparent;
  display: block;
  width: 100%;
  box-sizing: border-box;
  transition: 0.4s;
  background-color: #f8f8f8;
}

.input-bedrag:focus {
  outline: none;
  border-color: #DAA520;
  background-color: #fff;
}

.input-bedrag::placeholder {
  color: #bbb;
}

</style>