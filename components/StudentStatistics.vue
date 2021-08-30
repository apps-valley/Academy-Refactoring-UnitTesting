<template>
    <div>
        <b-card data-test="stat-card" style="width: 300px">
            <b-row data-test="stat-top-row">
                <b-col cols="6">
                   <Label text="something vfjhfghf" class="bg-gradient-white"/>
                </b-col>
                <!-- <b-col cols="6"> -->
                    <b-tabs pills align="left" active-nav-item-class="font-weight-bold bg-primary w-50">
                         <b-col cols="2">
                        <b-tab title="Tab 1" active></b-tab>
                         </b-col>
                         <b-col cols="2">
                        <b-tab title="Tab 2" ></b-tab>
                         </b-col>
                         <b-col cols="2">
                        <b-tab title="Tab 3" ></b-tab>
                         </b-col>
                    </b-tabs>
                <!-- </b-col> -->
            </b-row>

            <b-row data-test="stat-bottom-row">
                <b-col>

                </b-col>
                <b-col>

                </b-col>
            </b-row>
        </b-card>
    </div>
</template>

<script>
    import Label from './Label.vue'
export default {
   components: {Label}
}
</script>

<style scoped>
    .b-tab {
        width: 40px;
    }
</style>