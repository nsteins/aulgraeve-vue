<template>
    <v-card height="100%" 
            class="card-outer"
            raised tile >

          <v-img
            :src="record.fields['Photos'][0]['thumbnails']['large']['url']"
            class="image"
            aspect-ratio=1
            v-on:click="overlay = !overlay"
          ></v-img>

          <v-overlay
            :z-index="zIndex"
            :value="overlay"
            
          >

            
            <v-carousel>
                
              <v-carousel-item
                v-for="(item,i) in record.fields['Photos']"
                :key="i"
                :src="item['thumbnails']['large']['url']"
                class="carousel"
              >
              <v-col class="text-right">
                <v-btn
                        fab
                        dark
                        small
                        color="Grey"
                        v-on:click="overlay = !overlay"
                        class="mx-2 close-btn"
                        >
                        X
                    </v-btn>
              </v-col>

                </v-carousel-item>
            </v-carousel>
          </v-overlay>

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
</template>

<script>
export default {
  name: 'VueAirtable',
  props: [
    'record'
  ],
  data: function () {
    return {
      overlay: false,
      zIndex: 10
    };
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