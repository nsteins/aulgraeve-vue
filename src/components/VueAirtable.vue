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
        <gift-card
          :record=record
          >
        </gift-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import GiftCard from './GiftCard'

export default {
  name: 'VueAirtable',
  components: {
    GiftCard
  },
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
      records: [],
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
        this.overlay = new Array(this.records.length).fill(false);
      });
    }
  }
}
</script>

