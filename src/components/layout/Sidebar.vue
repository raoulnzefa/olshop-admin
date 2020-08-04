<template>
  <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading"><b-icon icon="building"></b-icon> My Admin </div>
      <div class="list-group list-group-flush">
        <a href="javascript://" @click="goTo('/')" class="list-group-item list-group-item-action bg-light"><b-icon icon="caret-right-fill" /> My Product</a>
        <a href="javascript://" @click="goTo('/about')" class="list-group-item list-group-item-action bg-light"><b-icon icon="caret-right-fill" /> About</a>
        <a href="javascript://" @click="goTo('/report')" class="list-group-item list-group-item-action bg-light"><b-icon icon="caret-right-fill" /> Report</a>
        <a href="javascript://" @click="goTo('/setting')" class="list-group-item list-group-item-action bg-light"><b-icon icon="caret-right-fill" /> Setting</a>
      </div>
  </div>
  <!-- /#sidebar-wrapper -->
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
      goTo(path) {
        // prevent Error: Avoided redundant navigation to current location
        if (this.$route.path == path) {
          return false;
        }
        this.$router.push({path: path}).catch(e => {
          console.error(e);
        });
      }
    }
}
</script>

<style scoped lang="scss">
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;

  .sidebar-heading {
    padding: 0.875rem 1.25rem;
    font-size: 1.2rem;
  }

  .list-group {
    width: 15rem;
  }
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
}

</style>