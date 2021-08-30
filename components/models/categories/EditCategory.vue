<template>
  <!-- edit category modal -->
  <b-modal id="edit-category" centered hide-header hide-footer size="lg">
    <div class="sm_padding">
      <div class="add_cat_modal">
        <b-form @submit.prevent="editUniversity">
          <AppInput
            rounded_radius
            type="text"
            v-model="singleUniversity.name"
            :title="singleUniversity.name"
          >
            {{ $t("content-manegment.category-name-label") }}
          </AppInput>

          <div class="custom_input mb-4">
            <UploadFileToS3
              content_type="siteAssets"
              @location="storeMainImg($event)"
              accept="image/*"
            ></UploadFileToS3>
            <div class="overlay">
              <div class="rowunded_small_img">
                <b-img
                  :src="singleUniversity.image"
                  v-if="singleUniversity.image"
                ></b-img>
                <i v-else class="fa fa-user"></i>
              </div>
              <Title small gray>
                {{
                  $t(
                    "content-manegment.drag-the-department-logo-image-from-your-device-here"
                  )
                }}
              </Title>
              <Button bg_blue rounded_radius>
                {{ $t("content-manegment.change-button") }}
              </Button>
            </div>
          </div>

          <div class="custom_input mb-4 material">
            <UploadFileToS3
              @location="storeSmallImg($event)"
              content_type="siteAssets"
              accept="image/*"
            ></UploadFileToS3>
            <div class="overlay">
              <div class="rowunded_small_img">
                <b-img
                  :src="singleUniversity.sm_image"
                  v-if="singleUniversity.sm_image"
                ></b-img>
                <i v-else class="fa fa-user"></i>
              </div>
              <Title small gray>
                {{
                  $t(
                    "content-manegment.drag-the-department-small-logo-image-from-your-device-here"
                  )
                }}
              </Title>
              <Button bg_blue rounded_radius>
                {{ $t("content-manegment.change-button") }}
              </Button>
            </div>
          </div>

          <b-row class="btns mt-5">
            <b-col md="4" sm="6" class="mb-3 mb-sm-0">
              <Button type="submit" rounded_radius block bg_blue
                >
                {{ $t("content-manegment.save-button") }}
                </Button
              >
            </b-col>
            <b-col md="4" sm="6">
              <Button
                class="remove_btn"
                rounded_radius
                @click.native="delUniversity"
                >{{ $t("content-manegment.delete-category-button") }}</Button
              >
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
		id: Number,
		singleUniversity: Object,
		getAllUniversities: Function,
	},
	methods: {
		// edit universities
		async editUniversity() {
			// main img
			this.singleUniversity.is_image_updated != 1
				? (this.singleUniversity.image = this.singleUniversity.image) &&
          (this.singleUniversity.is_image_updated = 0)
				: ''
			// small img
			this.singleUniversity.is_sm_image_updated != 1
				? (this.singleUniversity.is_sm_image_updated = 0) &&
          (this.singleUniversity.sm_image = this.singleUniversity.sm_image)
				: ''
			//  this.singleUniversity.sm_image =  this.singleUniversity.image;
			await this.$Api.universities
				.editUniversity(this.id, this.singleUniversity)
				.then((res) => {
					console.log(res)
					if (res.status == 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText
						// });
						this.$bvModal.hide('edit-category')
						this.getAllUniversities()
						location.reload()
					}
				})
		},
		storeMainImg(e) {
			this.singleUniversity.image = e
			this.singleUniversity.is_image_updated = 1
		},
		storeSmallImg(e) {
			this.singleUniversity.sm_image = e
			this.singleUniversity.is_sm_image_updated = 1
		},

		// delete university
		async delUniversity() {
			await this.$Api.universities.delUniversity(this.id).then((res) => {
				if (res.status >= 200 && res.status < 300) {
					// this.$toast.fire({
					//   icon: "success",
					//   title: res.statusText
					// });
					this.$bvModal.hide('edit-category')
					this.getAllUniversities()
					location.reload()
				}
			})
		},
	},
}
</script>
