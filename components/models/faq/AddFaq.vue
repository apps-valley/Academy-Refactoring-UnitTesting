<template>
  <!-- add Faq modal -->
  <b-modal
    ref="my-modal"
    id="add-faq"
    centered
    hide-header
    hide-footer
    size="md"
  >
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="addFaq">
          <AppInput
            rounded_radius
            type="text"
            v-model="newFaq.question"
            :title="newFaq.question"
          >
            {{ $t("faqs.question-title-label") }}
          </AppInput>

          <b-form-select
            v-model="newFaq.category"
            :options="options"
            class="mb-5"
          ></b-form-select>

          <b-form-group>
            <b-form-textarea
              rows="9"
              v-model="newFaq.answer"
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
              >
                {{ $t("faqs.add-button") }}
              </Button>
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="reset">
                {{ $t("faqs.cancle-button") }}
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
		getFaqs: Function,
	},
	data() {
		return {
			disableButton: false,
			newFaq: {
				question: '',
				answer: '',
				category: null,
			},
			options: [
				{ value: null, text: this.$t('faqs.question-type'), disabled: true },
				{ value: 'general_FAQ', text: this.$t('faqs.general-question') },
				{ value: 'teacher_FAQ', text: this.$t('faqs.teachers-question') },
				{ value: 'student_FAQ', text: this.$t('faqs.students-question') },
			],
		}
	},
	methods: {
		// add Faq
		async addFaq() {
			(this.disableButton = true),
			await this.$Api.faq
				.addFaq(this.newFaq)
				.then((res) => {
					if (res.status === 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText,
						// });
						res.data.FAQ.status = '1'
						this.$emit('faqAdded', res.data.FAQ)
						this.reset()
						this.$refs['my-modal'].hide()
					}
				})
				.catch(() => {
					this.disableButton = false
				})
		},
		// reset
		reset() {
			this.newFaq.question = ''
			this.newFaq.answer = ''
			this.newFaq.category = null
			this.$bvModal.hide('add-faq')
			this.disableButton = false
		},
	},
}
</script>
