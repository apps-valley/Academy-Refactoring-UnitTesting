<template>
  <b-modal id="edit-member" centered hide-header hide-footer size="md">
    <div class="sm_padding">
      <div class="add_member_modal">
        <b-form @submit.prevent="editStudent">
          <div class="custom_input">
            <UploadFileToS3
              roletype="student"
              :userid="id"
              content_type="profile"
              @location="storeImg($event)"
              accept="image/*"
            ></UploadFileToS3>
            <div class="overlay">
              <div class="rowunded_small_img">
                <b-img
                  v-if="singleStudent && singleStudent.image"
                  :src="singleStudent.image"
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
            v-model="singleStudent.name"
            :title="singleStudent.name"
          >
            {{ $t("members.username-label") }}
          </AppInput>
          <!-- <AppInput
            rounded_radius
            type="text"
            v-model="singleStudent.certificate_name"
            :title="singleStudent.certificate_name"
          >
            اسم الشهادة
          </AppInput> -->
          <AppInput
            rounded_radius
            type="email"
            v-model="singleStudent.email"
            :title="singleStudent.email"
          >
            {{ $t("members.email-label") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="password"
            v-model="singleStudent.password"
            :title="singleStudent.password"
            :required="false"
          >
            {{ $t("members.password-label") }}
          </AppInput>

          <AppInput
            rounded_radius
            type="text"
            v-model="singleStudent.phone"
            :title="singleStudent.phone"
          >
            {{ $t("members.mobile-label") }}
          </AppInput>

          <b-row class="btns">
            <b-col sm="6">
              <Button type="submit" rounded_radius block>
                {{ $t("members.save-button") }}</Button
              >
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
		singleStudent: Object,
		getStudents: Function,
	},
	methods: {
		// edit teacher
		async editStudent() {
			this.singleStudent.is_image_updated = 0
			this.singleStudent.certificate_name = 'test'
			this.singleStudent.s3url_image = this.singleStudent.is_image_updated
				? this.singleStudent.s3url_image
				: this.singleStudent.image
			await this.$Api.students
				.editStudent(this.id, this.singleStudent)
				.then((res) => {
					if (res.status == 201) {
						// this.$toast.fire({
						//   icon: "success",
						//   title: res.statusText
						// });
						this.$bvModal.hide('edit-member')
						this.getStudents()
					}
				})
		},
		storeImg(e) {
			this.singleStudent.s3url_image = e
			this.singleStudent.image = e
			this.singleStudent.is_image_updated = 1
		},
	},
}
</script>
