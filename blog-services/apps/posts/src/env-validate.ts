import { z } from "zod"

const EnvSchema = z.object({
  EVENT_BUS_URL: z.string(),
})

export type TPostEnv = z.infer<typeof EnvSchema>

export function PostEnvValidate(
  config: Record<string, any>,
): Record<string, any> {
  try {
    const env = EnvSchema.parse(config)
    console.log("Post ENV:", env)
    return env
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
