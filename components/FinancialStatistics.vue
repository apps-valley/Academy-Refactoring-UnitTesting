<template>
<b-card style="width: 300px; border: none; background-color: var(--color-primary); border-radius: 20px"
    :style="{ 'background': bg }"
>
    <b-row data-test="row" style="border: none" align-v="center">
      <b-col cols="4" data-test="icon-col" class="col mx-2">
        <b-avatar style="width: 60px; height: 60px;background-color: #ffffff19">
            <b-img data-test="icon" :src="dynamicImage" ></b-img>
        </b-avatar>
      </b-col> 
      <b-col cols="8" data-test="text-col-wrapper" class="col" style="color: white; margin-right: -20px">
        <div class="row" data-test="top-text">
          <div style="font-size: 12px;" class="font-weight-bolder">
             {{topText}} 
          </div>
        </div>
        <div class="row" data-test="middle-text">
            <h5 data-test="middle-title" class="pb-1">
             {{middleTitle}} 
          </h5>
            <h5 data-test="middle-paragraph">
             {{middleText}} 
          </h5>
        </div>
        <div class="row" data-test="bottom-text" style="font-size: 12px;">
           {{bottomText}} 
        </div>
      </b-col>
    </b-row>
    </b-card>
</template>

<script>
    export default {
        props: ['topText', 'middleText', 'middleTitle', 'bottomText', 'icon', 'bg'],
        computed: {
          dynamicImage() {
            if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
          }
        }
    }
</script>