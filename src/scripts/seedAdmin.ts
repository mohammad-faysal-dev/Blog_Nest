
import { prisma } from "../lib/prisma"
import { UserRole } from "../middlewares/auth"

async function seedAdmin() {
    try {
        const adminData = {
            name: "Admin3",
            email: "admin3@gmail.com",
            role: UserRole.ADMIN,
            password: "admin123",
            emailVerified: true
        }
        const existingUser = await prisma.user.findUnique({
            where: {
                email: adminData.email
            }

        })
        if (existingUser) {
            throw new Error("user already exist")
        }
        const signInAdmin = await fetch("http://localhost:3000/api/auth/sign-up/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: JSON.stringify(adminData)
        })
        console.log(signInAdmin)
        if (signInAdmin.ok) {
            await prisma.user.update({
                where: {
                    email: adminData.email
                },
                data: {
                    emailVerified: true
                }
            })
        }
    }
    catch (error) {
        console.error(error)
    }
}
seedAdmin()