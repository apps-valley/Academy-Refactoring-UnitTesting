<template>
  <b-modal id="edit-unit" centered hide-header hide-footer size="md">
      <div class="sm_padding">
        <div class="add_member_modal">
          <form @submit.prevent="editUnit">
            <AppInput
              rounded_radius
              type="text"
              v-model="singleChapter.title"
              :title="singleChapter.title"
            >
              أسم الوحدة
            </AppInput>
            <b-row class="btns mt-3">
              <b-col lg="6" sm="12">
                <Button rounded_radius bg_blue class="w-100" type="submit">تعديل</Button>
              </b-col>
              <b-col lg="6" sm="12">
                <Button rounded_radius class="w-100 bg-transparent text-black-50" type="button" @click.native="$bvModal.hide('edit-unit')">الغاء</Button>
              </b-col>
            </b-row>
          </form>
        </div>
      </div>
  </b-modal>
</template>

<script>
export default {
	props: {
		singleChapter: {
			type: Object,
			required: true
		}
	},
	methods: {
		editUnit() {
			console.log(this.singleChapter)
			this.$emit('editChapter', this.singleChapter)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
