<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
    <v-toolbar flat>
      <v-icon large>account_circle</v-icon>
      <v-btn flat>로그인</v-btn>
      <v-btn flat>회원가입</v-btn>

    </v-toolbar>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      flat
      app
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title >
        <router-link to="/">
          <logo class="logo"  width="200"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      <span>&copy; 2019</span>

    </v-footer>
  </v-app>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'local_dining',
          title: '배달업체',
          to: '/delivery'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
    }
  }
}
</script>
<style>
.logo {
  margin-top: 10px;
}
.mini-card {
  padding: 10px;
}

.container {
  max-width: 954px;
}
</style>

