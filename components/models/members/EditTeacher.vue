<template>
  <b-modal id="edit-member" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_member_modal">
        <b-form @submit.prevent="editTeacher">
          <div class="custom_input">
            <UploadFileToS3
              roletype="teacher"
              :userid="id"
              content_type="profile"
              @location="storeImg($event)"
              accept="image/*"
            ></UploadFileToS3>
            <div class="overlay">
              <div class="rowunded_small_img">
                <b-img
                  v-if="singleTeacher && singleTeacher.image"
                  :src="singleTeacher.image"
                  fluid
                ></b-img>
                <i v-else class="fa fa-user"></i>
              </div>
              <Title extra_small gray>{{
                $t("members.upload-your-personal-image-title")
              }}</Title>
              <Button bg_blue rounded_radius>{{
                $t("members.upload-button")
              }}</Button>
            </div>
          </div>
          <AppInput
            rounded_radius
            type="text"
            v-model="singleTeacher.name"
            :title="singleTeacher.name"
          >
            {{ $t("members.username-label") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="email"
            v-model="singleTeacher.email"
            :title="singleTeacher.email"
          >
            {{ $t("members.email-label") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="password"
            v-model="singleTeacher.password"
            :title="singleTeacher.password"
            :required="false"
          >
            {{ $t("members.password-label") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="text"
            v-model="singleTeacher.phone"
            :title="singleTeacher.phone"
          >
            {{ $t("members.mobile-label") }}
          </AppInput>

          <b-row class="btns">
            <b-col sm="6">
              <Button type="submit" rounded_radius block>{{
                $t("members.save-button")
              }}</Button>
            </b-col>
            <b-col sm="6">
              <Button
                rounded_radius
                block
                @click.native="$bvModal.hide('edit-member')"
                >{{ $t("members.cancle-button") }}</Button
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
		singleTeacher: Object,
		getTeachers: Function,
	},
	methods: {
		// edit teacher

		async editTeacher() {
			this.singleTeacher.is_image_updated = 0
			this.singleTeacher.is_image_updated != 1
				? (this.singleTeacher.s3url_image = this.singleTeacher.image)
				: ''

			await this.$Api.teachers
				.editTeacher(this.id, this.singleTeacher)
				.then((res) => {
					if (res.status == 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText
						// });
						this.$bvModal.hide('edit-member')
						this.getTeachers()
					}
				})
		},
		storeImg(e) {
			this.singleTeacher.s3url_image = e
			this.singleTeacher.image = e
			this.singleTeacher.is_image_updated = 1
		},
	},
}
</script>
