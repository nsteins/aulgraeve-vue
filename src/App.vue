<template>
  <v-app>
  <div id="app">
    <v-container fluid>
      <v-row>
        <v-col
            cols="3"
        >
        </v-col>

        <v-col>
          <h1>Aul Graeve Gifts</h1>
          <h2>2022</h2>
          <vue-airtable :base="base_2022" :columns="['Photos', 'Description']" filter=""></vue-airtable>
          <h2>2021</h2>
          <vue-airtable :base="base_2021" :columns="['Photos', 'Description']" filter=""></vue-airtable>
          <h2>2020</h2>
          <vue-airtable :base="base_2020" :columns="['Photos', 'Description']" filter=""></vue-airtable>
        </v-col>

        <v-col
            cols="3"
        >
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-app>
</template>

<script>
console.log(process.env.VUE_APP_AIRTABLE_API_KEY)

import VueAirtable from './components/VueAirtable'

export default {
  name: 'app',
  components: {
    VueAirtable
  },
  data: function () {
    return {
      base_2020: 'gift_pics',
      base_2021: 'gift_pics_2021'
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>