<template>
    <v-slide-group>
      <v-slide-item v-for="(p,i) in products" :key="`hotProduct-${i}`">
        <v-card link color="surface" width="400" class="el ma-2 mb-5 mr-5">
          <v-img height="300" :src="p.image">
            <template #placeholder>
              <v-row class="fill-height" justify="center" align="ccenter">
                <v-procres-circular
                width="2"
                size="100"
                color="primary"
                indeterminate
                ></v-procres-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title class="primary--text text-md-body-3 font-weight-bold">
          {{p.name}}
          </v-card-title>
          <v-card-text class="black--text pb-3">
          {{p.price}}
          </v-card-text>
          <v-card-text class="primary--text pb-3">
            <v-chip x-small label outlined class="mr-1" link href="https://sites.google.com/view/kllincubation" target="_blank" rel="noopener noreferrer">
              link to website
            </v-chip>
          </v-card-text>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </template>
  
  <script>
  export default {
    props:{
      products: Array,
    }
  };
  </script>
  
  <style></style>