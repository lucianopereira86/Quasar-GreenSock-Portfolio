<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-center bg-grey-9">
        <q-toolbar-title>
          <!-- <div class="relative-position"> -->
          <span class="text-h5 text-white">Dynamic Portolio</span>
          <!-- </div> -->
        </q-toolbar-title>
        <q-btn
          icon="dashboard"
          round
          outline
          color="white"
          @click="openDashboard()"
          class="cursor-pointer"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <DialogDashboard ref="DialogDashboard" />
  </q-layout>
</template>

<script>
import DialogDashboard from '../components/DialogDashboard'
export default {
  name: 'MyLayout',
  components: {
    DialogDashboard
  },
  methods: {
    openDashboard () {
      this.$refs.DialogDashboard.open()
    }
  }
}
</script>

<style>
</style>
