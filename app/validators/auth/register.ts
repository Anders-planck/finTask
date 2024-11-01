import vine from '@vinejs/vine'

export const RegisterValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const exist = await db.from('users').where('email', value).select('id').first()
        return !exist
      }),
    password: vine.string().minLength(8),
    fullName: vine.string().minLength(3),
  })
)
