import { z } from "zod"

export const bankAuthSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name must be at most 50 characters"),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name must be at most 50 characters"),
    ssnLast4: z
        .string()
        .length(4, "SSN must be 4 digits")
        .regex(/^[0-9]+$/, "SSN must contain only digits"),
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
