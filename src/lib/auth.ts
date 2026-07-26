import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
// If your Prisma file is located elsewhere, you can change the path

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  trustedOrigins: [process.env.APP_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: true,
      },
      phone: {
        type: "string",
        required: false,
      },
      status: {
        type: "string",
        required: true,
        defaultValue: "ACTIVE",
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
      const info = await transporter.sendMail({
        from: `"Prisma Blog" <${process.env.APP_USER}>`,
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
</head>

<body style="margin:0;padding:0;background:#f4f4f7;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:40px 0;">
    <tr>
      <td align="center">

        <table width="600" cellpadding="0" cellspacing="0"
          style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="background:#2563eb;padding:30px;">
              <h1 style="margin:0;color:#ffffff;font-size:30px;">
                Prisma Blog
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px;">

              <h2 style="margin-top:0;color:#111827;">
                Verify your email address
              </h2>

              <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                Hello <strong>${user.name ?? "User"}</strong>,
              </p>

              <p style="font-size:16px;line-height:1.8;color:#4b5563;">
                Thanks for creating your <strong>Prisma Blog</strong> account.
                Before you can start using your account, please verify your email
                address by clicking the button below.
              </p>

              <!-- Button -->
              <div style="text-align:center;margin:40px 0;">
                <a
                  href="${verificationUrl}"
                  style="
                    background:#2563eb;
                    color:#ffffff;
                    text-decoration:none;
                    display:inline-block;
                    padding:16px 34px;
                    border-radius:8px;
                    font-size:16px;
                    font-weight:bold;
                  "
                >
                  Verify Email
                </a>
              </div>

              <p style="font-size:15px;color:#6b7280;">
                If the button above doesn't work, copy and paste this URL into your browser:
              </p>

              <p style="word-break:break-all;">
                <a
                  href="${verificationUrl}"
                  style="color:#2563eb;text-decoration:none;"
                >
                  ${verificationUrl}
                </a>
              </p>

              <hr style="margin:35px 0;border:none;border-top:1px solid #e5e7eb;" />

              <p style="font-size:14px;color:#6b7280;">
                This verification link will expire after some time for security
                reasons.
              </p>

              <p style="font-size:14px;color:#6b7280;">
                If you did not create an account with Prisma Blog, you can safely
                ignore this email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:25px;text-align:center;">

              <p style="margin:0;font-size:14px;color:#9ca3af;">
                Need help? Contact our support team.
              </p>

              <p style="margin:12px 0 0;font-size:13px;color:#9ca3af;">
                © ${new Date().getFullYear()} Prisma Blog. All rights reserved.
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
      });
      console.log("Message sent:", info.messageId);
    },
  },
});
