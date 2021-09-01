<template>
    <b-card  style="width: 230px; border-radius: 15px 25px 15px 15px; border: none;">
      <b-container>
        <b-row>
          <b-col cols="3" align-self="right" class="col"> 
            <div class=" d-flex align-items-center " style="height: 50px; width: 50px; border-radius: 15px 25px 15px 15px; background-color: var(--color-sky); margin-right: -20px">
              <div class="text-center mr-3">
                <b-img data-test="count-icon" :src="dynamicImage" ></b-img>
              </div>
            </div>
          </b-col>

          <b-col cols="8" style="margin-top: 8px"  class="col">
            <div data-test="count-number" class="text-primary" style="font-size: 14px;">{{count}}</div>
            <div data-test="desc" style="color: var(--color-gray); font-size: 14px; margin-top: -2px">{{text}}</div>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
</template>

<script>
export default {
    props: ['icon', 'text', 'count'],
    computed: {
      dynamicImage() {
        if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
      }
    }
}
</script>
