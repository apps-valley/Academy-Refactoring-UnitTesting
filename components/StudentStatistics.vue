<template>
  <div>
    <b-card class="w-75" data-test="stat-card" style="border-radius: 15px 25px 15px 15px; border: none;">
      <b-row data-test="stat-top-row">
        <b-col cols="5" class="no-margin col"  data-test="col">
          <Label :text="text" class="px-3 bg-gradient-white rounded-lg" icon="Grows"
            style="color: var(--color-gray);" />
        </b-col>
        <b-col data-test="col" cols="4" class="no-margin col" v-if="tabs"  >
          <b-tabs v-model="tabIndex" card style="margin-top: -20px" data-test='stat-tabs'>
            <b-tab class="tab" title="إسبوعي" :title-link-class="linkClass(0)"></b-tab>
            <b-tab class="tab" title="شهري" :title-link-class="linkClass(1)"></b-tab>
            <b-tab class="tab" title="سنوي" :title-link-class="linkClass(2)"></b-tab>
          </b-tabs>
        </b-col>
      </b-row>

      <b-row data-test="stat-bottom-row" class="py-3">
        <b-col cols="3"  data-test="col" class="col">
          <div style="color: var(--color-gray); font-size: 10px">هذا الاسبوع</div>
          236
        </b-col>
        <b-col cols="4"  data-test="col" class="col">
          <div style="color: var(--color-gray); font-size: 10px">الاسبوع الماضي</div>
          236
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import Label from './Label.vue'
  export default {
    components: {
      Label
    },
    data() {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass(idx) {
        if (this.tabIndex === idx) {
          return ['bg-primary', 'text-light', 'mytab', 'mx-1', 'py-1', 'px-2']
        } else {
          return ['bg-light', 'text-primary', 'mytab', 'mx-1', 'py-1', 'px-2']
        }
      }
    },
    props: {
      'text': String,
      'tabs': {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style>
  .mytab {
    border-radius: 40px !important;
    font-size: 10px;
  }

</style>
