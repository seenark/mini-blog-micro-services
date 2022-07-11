import { z } from "zod"

const EnvSchema = z.object({
  POSTS_URL: z.string(),
  COMMENTS_URL: z.string(),
  QUERY_URL: z.string(),
  MODERATION_URL: z.string(),
})

export type TEventBusEnv = z.infer<typeof EnvSchema>

export function envValidate(config: Record<string, any>): Record<string, any> {
  try {
    const env = EnvSchema.parse(config)
    console.log("Event Bus ENV:", env)
    return env
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
