import dotenv from 'dotenv'

dotenv.config()
export const isDev = process.env.NODE_ENV !== 'production'

const requiredEnvs = [
    'MONGO_URL',
    'PORT',
    'PASSWORD_SALT'
] as const

interface Envs {
    [key: string]:  number | string
}

const envs: Envs = requiredEnvs.reduce((acc: Envs, key: string) => {
    acc[key] = process.env[key] as  number | string
    return acc
}, {} as Envs)

const missingEnvs: string[] | number[] = requiredEnvs.filter((key) => !envs[key])

if (missingEnvs.length > 0) {
    console.error('ENV Error, the following ENV variables are not set:')
    console.table(missingEnvs)
    console.log(missingEnvs)
    throw new Error('Fix Env and rebuild')
}

export const {
    MONGO_URL,
    PORT,
    PASSWORD_SALT
} = process.env
