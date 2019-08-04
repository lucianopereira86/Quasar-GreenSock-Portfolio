<template>
  <q-dialog v-model="show" maximized>
    <q-card>
      <q-bar class="q-pa-lg bg-grey-9 text-white">
        <div>
          <span class="text-h5">Dashboard</span>
        </div>
        <q-space />
        <q-btn flat v-close-popup size="md">Close</q-btn>
      </q-bar>
      <q-separator />
      <q-card-section>
        <span class="text-h5">Gallery {{`(${portfolios.length})`}}</span>
        <q-separator />
        <div class="text-left gallery">
          <ul class="ul-horizontal">
            <li
              v-for="(portfolio) in portfolios"
              :key="portfolio.id"
              class="li-horizontal cursor-pointer q-pa-xs"
              style="border: 1px solid grey"
              @click="updatePortfolio(portfolio)"
            >
              <q-img
                class="my-dashboard-img full-width full-height"
                :src="portfolio.image"
                spinner-color="white"
              ></q-img>
              <div>
                <span class="text-bold">{{portfolio.company}}</span>
              </div>
              <div>
                <span class="caption">{{portfolio.service}}</span>
              </div>
            </li>
          </ul>
        </div>
      </q-card-section>
      <q-card-section>
        <FormPortfolio :portfolio="portfolio" :clearPortfolio="clearPortfolio" />
      </q-card-section>
    </q-card>
    <!-- Input type=file invisível para que seja possível realizar o upload de imagens -->
    <input
      id="library"
      type="file"
      accept="image/jpg, image/jpeg, image/png, image/gif"
      library
      style="display:none;"
    />
  </q-dialog>
</template>

<script>
import { mapState } from 'vuex'
import FormPortfolio from './FormPortfolio'
export default {
  components: {
    FormPortfolio
  },
  data () {
    return {
      show: false,
      portfolio: {
        id: 0,
        image: '',
        company: '',
        service: ''
      },
      portfolioReset: null
    }
  },
  computed: {
    ...mapState('General', ['portfolios'])
  },
  mounted () {
    // Inicializa o model de reset
    this.portfolioReset = { ...this.portfolio }
  },
  methods: {
    open (callback) {
      this.callback = callback
      this.show = true
    },
    updatePortfolio (portfolio) {
      this.portfolio = { ...portfolio }
    },
    clearPortfolio () {
      this.portfolio = { ...this.portfolioReset }
    }
  }
}
</script>

<style scoped>
.gallery {
  height: 200px !important;
  width: 100% !important;
}
.my-dashboard-img {
  height: 160px !important;
  width: 160px !important;
}
.ul-horizontal {
  list-style-type: none;
  white-space: nowrap;
  overflow-x: auto;
  padding-left: 0;
}

.li-horizontal {
  display: inline-block;
}
</style>
