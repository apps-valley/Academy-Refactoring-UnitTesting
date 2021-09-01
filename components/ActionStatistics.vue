<template>
  <b-card style="border-radius: 25px 40px 25px 25px; width: 350px; border: 2px solid var(--color-secondry);">
    <b-row data-test="row" align-v="center" align-h="right">
      <b-col data-test="icon-col" cols="3" style="margin-right: -10px">
        <b-avatar style="width: 50px; height: 50px;" class="bg-gradient-secondary">
          <!-- TODO: data-test menu needs to be styled -->
          <b-img data-test="icon" :src="dynamicImage"></b-img>
        </b-avatar>
      </b-col>

      <b-col cols="8" style="margin-right: -25px">
        <div style="font-size: 12px">
          {{title}}
        </div>

        <div style="font-size: 16px; color: var(--color-secondry)">
          {{text}}
        </div>
      </b-col>
      <b-col cols="1">
        <!-- TODO: button icon needs to be dynamic for later -->
        <!-- TODO: Need to provide an icon api for the buttons -->
        <Button circle icon="certification"
          style="width:40px;
          height: 40px;
          padding: 0;
          border-radius: 100px;
          background-color: #24e8a632;
          border: none"
        />
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
  import Button from './Button.vue'
  export default {
    components: {
      Button
    },
    props: ['icon', 'title', 'text'],
    computed: {
      dynamicImage() {
        if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
      }
    }
  }

</script>
