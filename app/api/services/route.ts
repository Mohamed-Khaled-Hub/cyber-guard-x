// Core
import { NextResponse } from 'next/server'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'

// Shared mock data (could also be moved to a separate file to avoid duplication)
export const services: ServiceObject[] = [
    {
        imgSrc: '/assets/images/services/web-penetration-testing.svg',
        name: 'Web Penetration Testing',
        description:
            "comprehensive penetration testing services to identify system vulnerabilities,validate current security measures, and provide a complete remedy roadmap",
        extraInfo: [
            {
                imgSrc: '/assets/images/services/web-penetration-testing2.svg',
                description:
                    'comprehensive penetration testing services to identify system vulnerabilities,validate current security measures, and provide a complete remedy roadmap',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/web-penetration-testing-off1.svg',
                name: 'Chatbots',
                description:
                    'a tailored chatbot designed to inhance your buiseness',
            },
            {
                imgSrc: '/assets/images/services/web-penetration-testing-off2.svg',
                name: 'Chatbots',
                description:
                    'a tailored chatbot designed to inhance your buiseness',
            },
            {
                imgSrc: '/assets/images/services/web-penetration-testing-off3.svg',
                name: 'Chatbots',
                description:
                    'a tailored chatbot designed to inhance your buiseness',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/network-penetration-testing.svg',
        name: 'Network Penetration Testing',
        description:
            'comprehensive penetration testing services to identify system vulnerabilities,validate current security measures, and provide a complete remedy roadmap',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/network-penetration-testing2.svg',
                description:
                    'comprehensive penetration testing services to identify system vulnerabilities, validate current security measures, and provide a complete remedy roadmap',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-chat-int.jpg',
                name: 'Chat Integrations',
                description:
                    'Seamless connection with CRM and third-party APIs.',
            },
            {
                imgSrc: '/images/services/offer-chat-analytics.jpg',
                name: 'Analytics Dashboard',
                description:
                    'Track user conversations and performance metrics.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/auditing.svg',
        name: 'Auditing',
        description:
            'Letting CyberGuardX LLC conduct your Security Auditing will reduce the chances of cyber threats going undetected, compliance violations, and security configurations that could expose sensitive data, as many organizations suffer breaches and reputational loss due to weak controls and poor security oversight.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/auditing2.svg',
                description:
                    'A clear picture of your current security posture Detailed audit reports highlighting gaps, weaknesses, and strengths Classification of risks with impact analysis Evidence-based compliance checks against industry standards Actionable fixes and best-practice recommendations',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/grc.svg',
        name: 'GRC',
        description:
            'Letting CyberGuardX LLC handle your Governance, Risk, and Compliance will minimize your organization’s exposure to regulatory fines, operational risks, and data breaches . Our specialists conduct a full assessment of your GRC framework to uncover critical gaps that threaten compliance and business continuity. then help you understand, address, and strengthen your controls to meet industry standards and requirements',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/grc2.svg',
                description:
                    'A structured governance and risk management framework tailored to your business Compliance mapping with regulatory requirements and standards Risk registers with priority levels and mitigation strategies Long-term guidance for sustainable compliance and security maturity',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/soc.svg',
        name: 'SOC As a Service',
        description:
            'Hackers don’t keep office hours, and threats can surface at any moment. With SOC-as-a-Service, your systems are monitored 24/7 to detect and respond to attacks in real time. This ensures incidents are contained early, minimizing damage and keeping your business secure.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/soc2.svg',
                description:
                    '24/7 monitoring of networks, endpoints, and cloud environments Real-time detection and response to threats and anomalies Centralized log management and incident reporting Threat intelligence feeds to stay ahead of emerging attacks',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/mobile-penetration-testing.svg',
        name: 'Mobile Penetration Testing',
        description:
            'comprehensive penetration testing services to identify system vulnerabilities,validate current security measures, and provide a complete remedy roadmap',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/mobile-penetration-testing2.svg',
                description:
                    'comprehensive penetration testing services to identify system vulnerabilities,validate current security measures, and provide a complete remedy roadmap',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/saas.svg',
        name: 'SaaS Solutions',
        description:
            'Instant access to powerful cloud software with no setup required. Always secure, updated, and ready to scale with your business. Flexible solutions that save time, cut costs, and boost efficiency.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/saas2.svg',
                description:
                    'Software delivered over the internet, ready to use Scales easily with your business needs, no extra setup Always updated and maintained by the provider for you',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/customized.svg',
        name: 'Customized Software Development',
        description:
            'We build software fully tailored to your business processes, giving you complete control over features, design, and integrations. Our solutions are flexible, scalable, and designed to grow with you. With customized development, you get exactly what you need — no unnecessary extras.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/customized2.svg',
                description:
                    'Tailored to fit your exact business goals Gives you full control over features, design, and integrations gives you the exact features you need without any    unnecessary extras',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/customized.svg',
        name: 'Customized Software Development',
        description:
            'We build software fully tailored to your business processes, giving you complete control over features, design, and integrations. Our solutions are flexible, scalable, and designed to grow with you. With customized development, you get exactly what you need — no unnecessary extras.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/customized2.svg',
                description:
                    'Tailored to fit your exact business goals Gives you full control over features, design, and integrations gives you the exact features you need without any    unnecessary extras',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/maintenance.svg',
        name: 'Maintenance & Support',
        description:
            'Our maintenance and support services ensure your systems remain secure, reliable, and optimized for peak performance. With continuous monitoring, proactive updates, and rapid assistance, we give you the confidence to focus on growth while we handle the technical side.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/maintenance2.svg',
                description:
                    'We stay by your side long-term so you can focus on growth. Count on our team for quick, reliable help whenever you need it Ongoing updates and support to keep your system running without interruption to give you peace of mind',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/ai.svg',
        name: 'AI & Automation Services',
        description:
            'Our AI and automation services help businesses save time, reduce costs, and boost efficiency. From chatbots and OCR to predictive analytics, we provide smart tools that optimize workflows and deliver valuable insights. With intelligent automation.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/ai2.svg',
                description:
                    'AI chatbots and virtual assistants Optimize workflows using smart automation tools for daily tasks Unlock growth with AI-powered analytics, predictions, and personalization',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/cloud.svg',
        name: 'Cloud Solutions & Integration',
        description:
            'Seamless migration, hosting, and integration on leading cloud platforms like AWS, Azure, and GCP. Our solutions ensure your systems stay connected, scalable, and secure. With expert cloud management.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/cloud2.svg',
                description:
                    'Connect all your tools and data in one secure place Tailored integrations that streamline workflows and save time Scalable, reliable, and always accessible for your team',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/web.svg',
        name: 'Web Application Development',
        description:
            'We build fast, secure, and responsive web applications that deliver a seamless user experience across all devices. Our platforms are designed with the latest technologies to keep your business future-ready and competitive. Flexible and scalable.',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/web2.svg',
                description:
                    'Designed with great modern technologies to keep your business future-ready Seamless online access for your customers, anytime and anywhere Flexible to grow with your business and easy to keep updated',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/images/services/offer-custom.jpg',
                name: 'Custom Development',
                description:
                    'Fully tailored systems to meet specific business workflows.',
            },
            {
                imgSrc: '/images/services/offer-support.jpg',
                name: 'Long-Term Support',
                description:
                    'Ongoing updates, bug fixes, and new feature rollouts.',
            },
        ],
    },
]

export async function GET(): Promise<NextResponse<ServiceObject[]>> {
    return NextResponse.json(services)
}
