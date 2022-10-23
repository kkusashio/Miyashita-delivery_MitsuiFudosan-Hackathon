<template>
    <div>
        <v-app-bar 
        color="surface" 
        height="100" 
        class="el" 
        app 
        :style="{ padding : $vuetify.breakpoint.mdAndUp ? '0px 100px': '' }"
        >
        <v-toolbar-title 
        @click="$router.push('/')" 
        class="text-md-h5 font-weight-bold pointer">
        <img src="/logo.png"  height="100px">
        </v-toolbar-title>
        
        <v-spacer/>
        <v-btn nuxt to="/store" icon>
            <v-icon size="20">mdi-store-outline</v-icon>
        </v-btn>
        <v-btn nuxt to="/map" icon>
            <v-icon size="20">mdi-map</v-icon>
        </v-btn>
        <v-divider vertical class="mx-md-5 mx-2"/>
        <v-btn nuxt to="/profile" icon>
            <v-icon size="20">mdi-account</v-icon>
        </v-btn>
        </v-app-bar>
    </div>
</template>