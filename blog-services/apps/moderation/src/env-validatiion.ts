import { z } from "zod"

const EnvSchema = z.object({
  EVENT_BUS_URL: z.string(),
})

export type TModerationEnv = z.infer<typeof EnvSchema>

export function validateEnv(config: Record<string, any>) {
  try {
    const env = EnvSchema.parse(config)
    console.log("Moderation ENV:", env)
    return env
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}
