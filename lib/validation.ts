import { z } from "zod"

export const bankAuthSchema = z.object({
    routingNumber: z
        .string()
        .min(9, "Routing number must be exactly 9 digits")
        .max(9, "Routing number must be exactly 9 digits")
        .regex(/^\d{9}$/, "Routing number must contain only digits"),
    accountNumber: z
        .string()
        .min(4, "Account number must be at least 4 digits")
        .max(17, "Account number must be at most 17 digits")
        .regex(/^\d+$/, "Account number must contain only digits"),
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(50, "Username must be at most 50 characters"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must be at most 100 characters"),
})

export type BankAuthFormData = z.infer<typeof bankAuthSchema>
