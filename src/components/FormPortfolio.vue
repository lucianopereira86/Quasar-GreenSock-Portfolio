<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{portfolio.id === 0? 'Add' : 'Edit'}} Portfolio</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="row">
        <div class="col-6 relative-position">
          <div class="my-img-container" v-if="portfolio.image">
            <img :src="portfolio.image" class="my-img" />
            <div class="full-width text-center">
              <q-btn class="q-ma-md" @click="selectImg()">Change Image</q-btn>
            </div>
          </div>
          <div v-else class="absolute-center">
            <q-btn color="primary" outline class="q-mb-lg" @click="selectImg()">Choose Image</q-btn>
          </div>
        </div>
        <div class="col-6 flex flex-center row">
          <div class="col-12">
            <MyInput :label="'Company Name'" :form="portfolio" :model="'company'" :max="30" />
          </div>
          <div class="col-12">
            <MyInput :label="'Service Name'" :form="portfolio" :model="'service'" :max="50" />
          </div>
          <div class="col-2 text-left q-mt-lg">
            <q-btn @click="newPortfolio()">New</q-btn>
          </div>
          <div class="col-10 text-right q-mt-lg">
            <q-btn
              :disabled="portfolio.id === 0"
              color="negative"
              @click="removePortfolio()"
              class="q-mr-md"
            >Delete</q-btn>
            <q-btn
              v-if="portfolio.id === 0"
              color="positive"
              @click="addPortfolio()"
              :flat="isDisabled()"
              :disabled="isDisabled()"
            >Save</q-btn>
            <q-btn
              v-if="portfolio.id > 0"
              color="positive"
              @click="updatePortfolio()"
              :flat="isDisabled()"
              :disabled="isDisabled()"
            >Save</q-btn>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <!-- Input type=file invisível para que seja possível realizar o upload de imagens -->
    <input
      id="library"
      type="file"
      accept="image/jpg, image/jpeg, image/png, image/gif"
      library
      style="display:none;"
    />
  </q-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MyInput from './MyInput'
export default {
  props: {
    portfolio: Object,
    clearPortfolio: Function
  },
  components: {
    MyInput
  },
  computed: {
    ...mapState('General', ['portfolios'])
  },
  methods: {
    ...mapMutations('General', ['ADD_PORTFOLIO', 'UPDATE_PORTFOLIO', 'REMOVE_PORTFOLIO']),
    selectImg () {
      // Clica no 'input type=file' programaticamente
      const self = this
      let idInput = '#library'
      window.$(idInput).trigger('click')

      window.$(idInput).unbind().on('change', function () {
        var input = this
        if (input.files.length > 0) {
          // O conteúdo da imagem selecionada é inserido no objeto portfolio
          let file = input.files[0]
          var reader = new FileReader()
          reader.onload = function (e) {
            var base64 = e.target.result
            self.portfolio.image = base64
          }
          reader.readAsDataURL(file)
        }
      })
    },
    isDisabled () {
      // Bloqueia o botão de inserir se algum dado não for informado ou se o limite de portfólios foi alcançado
      return this.portfolio.image.length === 0 || this.portfolio.company.length === 0 ||
        this.portfolio.service.length === 0
    },
    newPortfolio () {
      this.clearPortfolio()
    },
    addPortfolio () {
      this.ADD_PORTFOLIO({ ...this.portfolio })
      this.clearPortfolio()
    },
    updatePortfolio () {
      this.UPDATE_PORTFOLIO({ ...this.portfolio })
      this.clearPortfolio()
    },
    removePortfolio () {
      this.REMOVE_PORTFOLIO(this.portfolio.id)
      this.clearPortfolio()
    }
  }
}
</script>

<style scoped>
.my-img-container {
  overflow: hidden;
  text-align: center;
}
.my-img {
  max-height: 30vh;
}
</style>
