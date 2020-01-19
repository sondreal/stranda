<template>
  <CSidebar 
    :minimize="minimize"
    unfoldable
    :show.sync="show"
  >
    <CSidebarBrand 
      :imgFull="{ width: 118, height: 46, alt: 'Logo', src: 'img/brand/stranda-logo.png'}"
      :imgMinimized="{ width: 118, height: 46, alt: 'Logo', src: 'img/brand/stranda-logo.png'}"
      :wrappedInLink="{ href: 'https://stranda.net/', target: '_blank'}"
    />
    <!-- <CSidebarHeader/> -->
    <!-- <CSidebarForm/> -->
    <CRenderFunction flat :contentToRender="nav"/>
    <!-- <CSidebarFooter/> -->
    <CSidebarMinimizer 
      class="c-d-md-down-none" 
      @click.native="minimize = !minimize"
    />
  </CSidebar>
</template>

<script>
import nav from './_nav'
export default {
  name: 'TheSidebar',
  data () {
    return {
      minimize: false,
      nav,
      show: 'responsive'
    }
  },
  mounted () {
    this.$root.$on('toggle-sidebar', () => {
      const sidebarOpened = this.show === true || this.show === 'responsive'
      this.show = sidebarOpened ? false : 'responsive'
    })
    this.$root.$on('toggle-sidebar-mobile', () => {
      const sidebarClosed = this.show === 'responsive' || this.show === false
      this.show = sidebarClosed ? true : 'responsive'
    })
  }
}
</script>
