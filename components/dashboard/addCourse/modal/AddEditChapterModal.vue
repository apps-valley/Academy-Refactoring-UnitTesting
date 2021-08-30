<template>
  <!-- add-new-unit -->
  <b-modal
    id="add-new-unit"
    centered
    hide-header
    hide-footer
    size="md"
    @hide="hideModal"
    ref="my-modal"
  >
    <div class="sm_padding">
      <div class="add_member_modal">
        <form @submit.prevent="addEditChapter">
          <AppInput
            rounded_radius
            type="text"
            v-model="addNewChapter.title"
            :title="addNewChapter.title"
          >
            {{ $t("content-manegment.chapter-name-label") }}
          </AppInput>
          <b-row class="btns mt-3">
            <b-col lg="6" sm="12">
              <Button rounded_radius bg_blue class="w-100" type="submit">
                {{
                  this.chapterToggle
                    ? $t("content-manegment.edit-button")
                    : $t("content-manegment.add-button")
                }}
              </Button>
            </b-col>
            <b-col lg="6" sm="12">
              <Button
                rounded_radius
                class="w-100 bg-transparent text-black-50"
                type="button"
                @click.native="$bvModal.hide('add-new-unit')"
              >
                {{ $t("content-manegment.cancle-button") }}
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
	props: ['course_id', 'singleChapter', 'chapterToggle'],
	data() {
		return {
			addNewChapter: {
				title: '',
			},
		}
	},
	watch: {
		singleChapter() {
			this.addNewChapter = { ...this.singleChapter }
		},
	},
	methods: {
		hideModal() {
			this.$emit('update-chapter-toggle', false)
			if (!this.chapterToggle) {
				this.addNewChapter = {
					title: '',
				}
			}

			this.$refs['my-modal'].hide()
		},
		async addEditChapter() {
			let finalData = {
				title: this.addNewChapter.title,
				course_id: this.course_id,
			}
			let chapter
			if (this.chapterToggle) {
				chapter = 'course/updateChapter'
				finalData.id = this.addNewChapter.id
			} else {
				chapter = 'course/addNewChapter'
			}
			this.$store.dispatch(chapter, finalData).then((res) => {
				if (res.status_code == 201) {
					this.hideModal()
				}
			})
		},
	},
}
</script>
