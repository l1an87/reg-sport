/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PROJECT_PUBLIC_NAME: string
	readonly PROJECT_PUBLIC_PORT: string
	readonly PROJECT_PUBLIC_API_PATH: string
	readonly PROJECT_PUBLIC_API_HOST: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}