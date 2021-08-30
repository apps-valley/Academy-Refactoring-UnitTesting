<template>
  <div>
    <div v-if="isLoading" class="loading_img_div">
      <p class="text-primary">{{ $t('uploading-file') }}</p>
    </div>
    <div>
      <b-form-file
        v-model="uploadedFile"
        @input="uploadFile($event)"
        :label="label"
        :accept="accept"
      />
      <!-- <input type="hidden" @change="uploadFile($event)"> -->
    </div>
  </div>
</template>

<script>
import S3 from 'aws-s3'

export default {
	props: {
		accept: String,
		content_type: {
			type: String,
		},
		courseid: {
			default: null,
		},
		userid: {
			default: null,
		},
		roletype: {
			type: String,
			default: 'admin',
		},
		filetype: {
			type: String,
			default: 'images/*',
		},
	},
	data() {
		return {
			uploadedFile: null,
			isLoading: false,
			label: '',
		}
	},
	computed: {
		getUserID() {
			let user = this.$store.getters.getUser
			if (user) {
				return user.id
			}
		},
		s3Keys() {
			return this.$auth.user.s3_keys
		},
		config() {
			return {
				bucketName: 'academitesting',
				dirName: `${window.location.host}/${this.roletype}/${
					this.content_type == 'profile'
						? 'profile'
						: this.content_type == 'courseContent'
							? 'courseContent'
							: 'siteAssets'
				}`,
				accessKeyId: process.env.NUXT_ENV_AWS_ACCESS_KEY_ID,
				secretAccessKey: process.env.NUXT_ENV_AWS_SECRET_ACCESS_KEY,
				region: process.env.NUXT_ENV_AWS_REGION,
				s3Url: 'https://academitesting.s3.amazonaws.com',
			}
		},
		S3Client() {
			return new S3(this.config)
		},
	},

	methods: {
		uploadFile(e) {
			console.log(e)
			console.log(this.uploadedFile)
			let fileExtention = this.uploadedFile.name.split('.').pop()
			this.$emit('file-extention', fileExtention)
			let today = new Date()
			let date =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear()
			let time =
        today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds()
			let myNewFile
			myNewFile = new File(
				[this.uploadedFile.name],
				`${this.userid || this.roletype != 'admin' ? 'admin-' : ''}${
					this.roletype == 'admin'
						? this.getUserID
						: this.userid
							? this.userid
							: null
				}-${
					this.courseid ? this.courseid : null
				}-${date}-${time}.${fileExtention}`
			)
			// console.log(myNewFile.name);
			// if (this.filetype == "video/*") {
			//   let _this = this;
			//   let myVideos, video;
			//   let getVideoTime = this.uploadedFile;
			//   myVideos = getVideoTime[0];
			//   video = document.createElement("video");
			//   video.preload = "metadata";
			//   video.src = URL.createObjectURL(this.uploadedFile);
			//   console.log("video.src", video.src);
			//   video.addEventListener("loadedmetadata", function () {
			//     console.log(video.duration);
			//     var video_duration = video.duration.toFixed(2);
			//   });
			//   // video.onloadedmetadata = function () {
			//   //   window.URL.revokeObjectURL(video.src);
			//   //   console.log(video)
			//   //   let duration = video.duration;
			//   //   myVideos.duration = duration;
			//   //   _this._data.videoTime = myVideos.duration;
			//   //   console.log('tiiiiiiiiiiiiiiiime')
			//   //   console.log(_this._data.videoTime)

			//   //   _this.$emit("video-time", _this._data.videoTime);
			//   //   // _this.$emit("check-video-or-image", "video");
			//   // };
			//   // if (!getVideoTime.length) return;

			//   // const reader = new FileReader();
			//   // reader.readAsDataURL(getVideoTime[0]);
			// }
			if (this.uploadedFile) {
				this.isLoading = true
				this.S3Client.uploadFile(
					this.uploadedFile,
					myNewFile.name.split('.')[0]
				).then((res) => {
					this.isLoading = false
					this.$emit('location', res.location)
				})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
</style>
