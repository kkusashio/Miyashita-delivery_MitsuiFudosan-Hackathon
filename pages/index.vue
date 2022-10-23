<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="sale_items" />
    <br/><br/><br/>
    <v-container>
      <h1 class="text-sm-h6 text-h5">友達登録をして今すぐ自由な休憩を体験しよう！</h1>
      <br/><br/>
      <v-row justify="center">
        <v-img class="mt-5 imgsmall" src="/qrqrqr.png"></v-img>
      </v-row>
      
      <br/>
      <v-row justify="center">
        <v-btn depressed color="primary" class="text-sm-h5" min-height="100" min-width="300" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=237lwpha" target="_blank" rel="noopener noreferrer">友達登録</v-btn>
      </v-row>
      <br/><br/><br/>

      <h1 class="text-sm-h4 text-h6">混雑状況の確認を行う</h1>
      <v-row justify="center">
        <v-img class="mt-5 imgimg" src="/annai.jpg"></v-img>
      </v-row>
      <v-row justify="center">
        <v-btn nuxt to="/map" depressed color="primary" class="text-sm-h5 mb-5 mt-5" >混雑マップ</v-btn>
      </v-row>

      <br/><br/><br/>

      <h1 class="text-sm-h4 text-h6">おすすめのお店！</h1>
      <v-row justify="center">
        <v-img class="mt-5 imgimg" src="/kinniku.jpg"></v-img>
      </v-row>
      <v-row justify="center">
        <v-btn nuxt to="/store" depressed color="primary" class="text-sm-h5 mb-5 mt-5" >お店一覧</v-btn>
      </v-row>
    </v-container>

    <Footer />
    <ScrollTop />
  </div>
</template>

<script>

export default {
    async created() {
        this.sale_items = await this.$content("products").where({ onSale: true }).fetch();
        this.products = await this.$content("products").fetch();
    },
    data() {
        return {
            products: null,
            sale_items: null,
        };
    },
};
</script>

<style>
.imgimg {
  width: 100vh;
}
.imgsmall {
  max-width: 30vh;
}
</style>