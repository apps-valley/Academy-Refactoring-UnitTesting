import redirectSSL from 'redirect-ssl'

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'academi-admin',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
				crossorigin: 'anonymous',
				href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css'
			}
		]
	},

	server: {
		port: 8000, // default: 3000
		host: '127.0.0.1', // default: localhost,
		timing: true
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~assets/scss/main.scss'],
	loading: '~/components/ui/Spinner.vue',

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~plugins/axiosConfig',
		'~plugins/api',
		'~plugins/toast',
		'~plugins/sweetAlert',
		'~plugins/aws',
		{ src: '~plugins/vuedraggable.js' },
		{ src: '~plugins/vuescroll.js', ssr: false },
		{ src: '~/plugins/vuex-persist', ssr: false }
	],

	router: {
		base: '/admin/'
	},

	generate: {
		dir: 'admin',
		subFolders: false,
		fallback: true
	},

	serverMiddleware: [
		redirectSSL.create({ enabled: process.env.NUXT_ENV_MODE === 'prod' })
	],

	components: [
		{
			path: '~/components',
			pathPrefix: false
		}
	],

	vue: {
		config: {
			productionTip: true,
			devtools: true,
			performance: true
		}
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: ['@nuxtjs/moment', '@nuxtjs/color-mode', '@nuxtjs/svg'],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		['@nuxtjs/axios'],
		'@nuxtjs/auth-next',
		'nuxt-i18n'
	],
	auth: {
		plugins: [{ src: '~plugins/axiosConfig.js' }]
	},
	// translation config
	i18n: {
		defaultLocale: 'ar',
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.json', name: 'En' },
			{ code: 'ar', iso: 'ar-eg', file: 'ar.json', name: 'Ar' }
		],
		detectBrowserLanguage: false,
		lazy: true,
		langDir: 'locales/',
		strategy: 'no_prefix',
		vueI18n: {
			fallbackLocale: 'ar'
		}
	},
	styleResources: {
		scss: ['./assets/scss/*.scss']
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['epic-spinners'],
		publicPath: '/admin/',
		extend(config, ctx) {},
		babel: {
			compact: true,
			plugins: [
				['@babel/plugin-proposal-private-property-in-object', { loose: true }]
			]
		}
	}
}
