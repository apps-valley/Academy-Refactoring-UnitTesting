<template>
  <!-- add category modal -->
  <b-modal id="add-category" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="addUniversity">
          <AppInput
            rounded_radius
            type="text"
            v-model="newUniversity.name"
          >
           {{ $t('content-manegment.category-name-label') }}
          </AppInput>

          <div class="custom_input matrial">
            <UploadFileToS3 content_type='siteAssets' @location="storeMainImg($event)" accept="image/*"></UploadFileToS3>
            <div class="overlay">
              <div>
                <b-img v-if="newUniversity.image != null" :src="newUniversity.image"></b-img>
                <b-img v-else src="~assets/images/icons/Upload.svg"></b-img>
              </div>
              <Title small gray>
                {{ $t('content-manegment.drag-the-department-logo-image-from-your-device-here') }}
                </Title>
            </div>
          </div>

          <div class="custom_input matrial">
            <UploadFileToS3 content_type='siteAssets' @location="storeSmallImg($event)" accept="image/*"></UploadFileToS3>
            <div class="overlay">
              <div>
                <b-img v-if="newUniversity.sm_image != null" :src="newUniversity.sm_image"></b-img>
                <b-img v-else src="~assets/images/icons/Upload.svg"></b-img>
              </div>
              <Title small gray
                >
                {{ $t('content-manegment.drag-the-department-small-logo-image-from-your-device-here') }}
                </Title
              >
            </div>
          </div>

          <b-row class="btns">
            <b-col sm="6">
              <Button type="submit" rounded_radius block bg_blue
                >
                {{ $t('content-manegment.add-new-category-button') }}
                </Button
              >
            </b-col>
            <b-col sm="6">
              <Button rounded_radius block @click.native="reset">
                {{ $t('content-manegment.cancle-button') }}
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
		getAllUniversities: Function
	},
	data() {
		return {
			newUniversity: {
				name: '',
				image: null,
				sm_image: null
			}
		}
	},
	methods: {
		// add university
		async addUniversity() {
			await this.$Api.universities
				.addUniversity(this.newUniversity)
				.then(res => {
					if (res.status === 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText
						// });
						this.reset()
						this.getAllUniversities()
					}
				})
		},
		storeMainImg(e) {
			this.newUniversity.image = e
		},
		storeSmallImg(e) {
			this.newUniversity.sm_image = e
		},
		// reset
		reset() {
			this.newUniversity.name = ''
			this.newUniversity.image = ''
			this.newUniversity.sm_image = ''
			this.$bvModal.hide('add-category')
		},
	}
}
</script>
