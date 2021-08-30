<template>
  <!-- edit Faq modal -->
  <b-modal
    ref="my-modal"
    id="edit-Faq"
    centered
    hide-header
    hide-footer
    size="md"
  >
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="editFaq">
          <AppInput
            rounded_radius
            type="text"
            v-model="singleFaq.question"
            :title="singleFaq.question"
          >
             {{ $t("faqs.question-title-label") }}
          </AppInput>
          <b-form-select
            v-model="singleFaq.category"
            :options="options"
            class="mb-5"
          ></b-form-select>

          <b-form-group>
            <b-form-textarea
              rows="9"
              v-model="singleFaq.answer"
              :placeholder="$t('faqs.descripe-question-placeholder')"
            ></b-form-textarea>
          </b-form-group>
          <b-row class="btns">
            <b-col sm="6">
              <Button
                :disabled="disableButton"
                type="submit"
                rounded_radius
                block
                bg_blue
                >{{ $t("faqs.edit-button") }}</Button
              >
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="closeModal"
                >{{ $t("faqs.cancle-button") }}
              </Button>
            </b-col>
          </b-row>
        </b-form>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
	props: {
		singleFaq: { type: Object, default: {} },
	},
	data() {
		return {
			disableButton: false,
			options: [
				{ value: null, text: this.$t('faqs.question-type'), disabled: true },
				{ value: 'general_FAQ', text: this.$t('faqs.general-question') },
				{ value: 'teacher_FAQ', text: this.$t('faqs.teachers-question') },
				{ value: 'student_FAQ', text: this.$t('faqs.students-question') },
			],
		}
	},
	methods: {
		// edit Faq
		async editFaq() {
			(this.disableButton = true),
			await this.$Api.faq
				.editFaq(this.singleFaq.id, this.singleFaq)
				.then((res) => {
					if (res.status === 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText,
						// });
						this.$emit('faqEdited')
						this.$bvModal.hide('edit-Faq')
						this.$refs['my-modal'].hide()
						this.disableButton = false
					}
				})
				.catch(() => {
					this.disableButton = false
				})
		},
		closeModal() {
			this.$bvModal.hide('edit-Faq')
		},
	},
}
</script>
