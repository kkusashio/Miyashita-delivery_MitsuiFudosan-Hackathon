<template>
  <div>
    <Nav />
    <br />
    <h1>ようこそ <span class="orange--text">{{user}}</span> さん</h1>
    <br />
    <v-container class="grey lightne-5">
      <v-row>
        <v-col>
          <v-img src="/currentrank.png"></v-img>
        </v-col>
        <v-col>
          Miyashita Deliveryを　
          <span class="texto">{{usedtime}}</span>　回使用しました
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <h1>ランク表</h1>
    <br />
    <v-img src="/rank.png"></v-img>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        user:'test user',
        usedtime:5,
      }
    }
  };
</script>

<style>
.texto{
  font-size: 2rem;
  color:orange;
}
</style>