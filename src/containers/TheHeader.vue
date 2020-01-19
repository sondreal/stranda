<template>
  <CHeader with-subheader>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      v-c-emit-root-event:toggle-sidebar-mobile
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      v-c-emit-root-event:toggle-sidebar
    />
    <CHeaderBrand
      class="mx-auto d-lg-none" 
      src="img/brand/coreui-base.svg"
      width="12"
      height="10"
      alt="CoreUI Logo"
    />
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/dashboard">
          Dashboard
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink>
          Settings
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav>
      <TheHeaderDropdownNotif/>
      <TheHeaderDropdownTasks/>
      <TheHeaderDropdownMssgs/>
      <TheHeaderDropdownAccnt/>
      <CToggler
        in-header
        class="d-md-down-none"
        v-c-emit-root-event:toggle-aside
      >
        <CIcon size="lg" name="cil-applications-settings"/>
      </CToggler>
    </CHeaderNav>
 
    <CSubheader class="px-3">
      <CBreadcrumbRouter class="border-0"/>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import TheHeaderDropdownNotif from './TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './TheHeaderDropdownTasks'
import TheHeaderDropdownMssgs from './TheHeaderDropdownMssgs'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt,
    TheHeaderDropdownNotif,
    TheHeaderDropdownTasks,
    TheHeaderDropdownMssgs
  },
  data () {
    return {
      sidebarIsMinimized: false,
    }
  },
  computed: {
    logoClasses () {
      return [
        'c-header-brand',
        { 'c-header-brand-minimized': this.sidebarIsMinimized }
      ]
    }
  },
  mounted () {
    this.$root.$on('c-sidebar-minimize-state', (state) => {
      this.sidebarIsMinimized = state
    })
  }
}
</script>
