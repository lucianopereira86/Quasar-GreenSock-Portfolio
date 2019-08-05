<template>
  <q-page>
    <div class="row bg-grey-9">
      <MyPortfolio :index="0" :col="4" :height="imgHeight">
        <!-- Esta div é meramente um elemento inserido para ocupar espaço de um MyPortfolio -->
        <div
          class="subPortfolio full-width full-height q-px-md bg-black text-white relative-position"
        >
          <div class="absolute-center">
            <span class="text-h5">
              <i>CHECK OUR PROJECTS</i>
            </span>
            <q-icon name="arrow_right_alt" size="80px"></q-icon>
          </div>
        </div>
      </MyPortfolio>
      <MyPortfolio :index="1" :col="3" :height="imgHeight * 2" />
      <MyPortfolio :index="2" :col="5" :height="imgHeight">
        <!-- Este componente é um slot dentro do componente pai -->
        <MyPortfolio :index="3" :col="12" :height="imgHeight" class="subPortfolio" />
      </MyPortfolio>
      <MyPortfolio :index="4" :col="4" :height="imgHeight" />
      <MyPortfolio :index="5" :col="4" :height="imgHeight" />
      <MyPortfolio :index="6" :col="4" :height="imgHeight" />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import MyPortfolio from '../components/MyPortfolio'
export default {
  name: 'PageIndex',
  components: {
    MyPortfolio
  },
  data () {
    return {
      imgHeight: 31
    }
  }
}
</script>

<style>
.subPortfolio {
  margin-top: -6px;
}
</style>
