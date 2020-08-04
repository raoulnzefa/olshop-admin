<template>
  <!-- Custom Event
    - toggleSidebar
   -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <button class="btn btn-primary" id="menu-toggle" @click="toggleSidebar()"><b-icon :icon="isSidebarOpen ? 'chevron-bar-left' : 'chevron-bar-right'"></b-icon> Toggle Menu</button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="javascript:confirm('Are you sure to logout?')"><b-icon icon="power"></b-icon> Logout <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNavbar',
  props: ['isSidebarOpen'],
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    }
  }
}
</script>