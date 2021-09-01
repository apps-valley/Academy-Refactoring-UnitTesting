<template>
    <b-card style="border-radius: 25px 100px 100px 25px; width: 300px; background-color: var(--color-primary); border: none; color: white">
        <b-row data-test="row" align-v="center" align-h="right">
          <b-col class="col" cols="4" >
            <b-avatar style="background-color: #ffffff19; width: 50px; height: 50px" data-test='icon' >
              <b-img  :src="dynamicImage" ></b-img>
            </b-avatar>
          </b-col>

          <b-col cols="8" class="col" style="margin-right: -25px">
            <div style="font-size: 12px">
               {{title}}
            </div>

            <div style="font-size: 16px">
               {{count}}
            </div>
          </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        props: ['icon', 'title', 'count'],
        computed: {
          dynamicImage() {
            if (this.icon) return require(`@/assets/images/icons/${this.icon}.svg`)
          }
        }
    }
</script>
