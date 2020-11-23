<template>
  <v-container grid-list-lg fluid>
    <v-layout fill-height row wrap>
      
      <v-flex
        class="flex-column"
        v-for="record in records" 
        :key="record.id"
        md4
        sm6
      >
        <v-card height="100%" 
            class="card-outer"
            raised tile >

          <!-- <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in record.fields['Photos']"
              :key="i"
              :src="item['thumbnails']['large']['url']"
            ></v-carousel-item>
          </v-carousel> -->
          <v-img
            :src="record.fields['Photos'][0]['thumbnails']['large']['url']"
            class="image"
            aspect-ratio=1
            
          ></v-img>

          <v-card-text style="font-size:1rem;">{{record.fields['Description']}}</v-card-text>

          <!-- <v-card-actions class='card-actions'>
            <v-btn
              class="pink mx-2"
              fab
              dark
              small
            >
              <v-icon dark>
                mdi-heart
              </v-icon>
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'VueAirtable',
  props: [
    'base',
    'columns',
    'filter',
    'sort'
  ],
  data: function () {
    return {
      apiUrl: 'https://api.airtable.com/v0/appdOgZCedimiinrq/',
      apiKey: process.env.VUE_APP_AIRTABLE_API_KEY, // Always use a read-only account token
      records: []
    };
  },
  mounted: function () {
    if (!this.base || !this.columns) {
      return console.error('Please specify `base` and `columns` attributes for <vue-airtable> component.');
    }
    this.getData();
  },
  watch: {
    table: function (newTable, oldTable) {
      this.getData();
    }
  },
  methods: {
    getData: function () {
      axios({
        url: this.apiUrl + this.base,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        },
        params: {
          filterByFormula: this.filter || '',
          sort: this.sort || ''
        }
      }).then((res) => {
        this.records = res.data.records;
      });
    }
  }
}
</script>

<style>
  .card-outer {
  position: relative;
  padding-bottom: 15px;
  }
  .card-actions {
    position: absolute;
    bottom: 0;
  } 
</style>