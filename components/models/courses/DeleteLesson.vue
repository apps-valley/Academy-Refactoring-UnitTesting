<template>
<!-- delete lesson -->
  <b-modal id="delete-lesson" centered hide-header hide-footer size="md">
      <div class="sm_padding">
        <div class="add_member_modal">
          <form @submit.prevent="deleteLesson">
            <p class="title">هل تريد بالفعل حذف الدرس</p>
            <p  class="lesson-name">"{{singleLesson.title}}"</p>
            <b-row class="btns mt-5">
              <b-col sm="6">
                <Button rounded_radius class="w-100 bg-danger" type="submit">نعم تأكيد </Button>
              </b-col>
              <b-col sm="6">
                <Button rounded_radius
                        class="w-100 bg-transparent text-black-50"
                        type="button" @click.native="$bvModal.hide('delete-lesson')">
                        الغاء
                </Button>
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
		singleLesson: {
			type: Object,
			required: true
		}
	},
	methods: {
		deleteLesson() {
			this.$emit('deleteLesson', this.singleLesson)
		},
	}
}
</script>

<style lang="scss" scoped>

</style>
