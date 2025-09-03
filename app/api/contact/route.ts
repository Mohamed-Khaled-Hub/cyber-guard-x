// Core
import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'
// Types
import { ContactFormData } from '@/src/types/objectsTypes'

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body: ContactFormData = await request.json()
        const { firstName, lastName, email, phone, message } = body

        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: 'Invalid email format' },
                { status: 400 }
            )
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        })

        // Email content
        const mailOptions = {
            from: process.env.SMTP_EMAIL, // sender address
            to: process.env.CONTACT_EMAIL, // recipient (your business email)
            replyTo: email, // user's email for replies
            subject: `New Contact Form Submission from ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
                        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
                        <h3 style="color: #007bff; margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
                        <p><strong>Note:</strong> This email was sent from the CyberGuardX contact form. 
                        You can reply directly to this email to respond to ${firstName}.</p>
                        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                </div>
            `,
            text: `
New Contact Form Submission

Contact Details:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This email was sent from the CyberGuardX contact form.
You can reply directly to this email to respond to ${firstName}.
Timestamp: ${new Date().toLocaleString()}
            `,
        }

        // Send email
        await transporter.sendMail(mailOptions)

        return NextResponse.json(
            { success: true, message: 'Email sent successfully!' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to send email. Please try again later.',
            },
            { status: 500 }
        )
    }
}
