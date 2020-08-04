<template>
  <div id="app">

    <div id="wrapper"
      :class="['d-flex', isSidebarOpen ? null : 'toggled']"
      >

      <!-- Sidebar -->
      <sidebar />

      <!-- Page Content -->
      <div id="page-content-wrapper">

        <!-- Navbar -->
        <top-navbar @toggleSidebar="doToggleSidebar()" :isSidebarOpen="isSidebarOpen" />

        <router-view/>
      </div>
      <!-- /#page-content-wrapper -->

    </div>
  <!-- /#wrapper -->

  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    'top-navbar': TopNavbar
  },
  data() {
    return {
      isSidebarOpen: true
    }
  },
  methods: {
    doToggleSidebar() {
      this.isSidebarOpen = ! this.isSidebarOpen;
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#wrapper {
  overflow-x: hidden;

  &.toggled #sidebar-wrapper {
    margin-left: 0;
  }
}

#page-content-wrapper {
  min-width: 100vw;
}

@media (min-width: 768px) {
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

</style>
