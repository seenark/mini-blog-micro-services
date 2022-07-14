import { z } from "zod"

const EnvSchema = z.object({
  EVENT_BUS_URL: z.string(),
})

type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
    ? T[P]
    : T[P] | undefined
}
type TQueryEnvInfer = z.infer<typeof EnvSchema>
export type TQueryEnv = Complete<TQueryEnvInfer>
export function validateQueryEnv(config: Record<string, any>) {
  try {
    const env = EnvSchema.parse(config)
    console.log("query env", env)
    return env
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
