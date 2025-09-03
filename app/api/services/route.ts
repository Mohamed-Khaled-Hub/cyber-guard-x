// Core
import { NextResponse } from 'next/server'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'

// Shared mock data
export const services: ServiceObject[] = [
    {
        imgSrc: '/assets/images/services/web-penetration-testing.svg',
        logo: '/assets/images/services/web-penetration-testing-logo.svg',
        name: 'Web Penetration Testing',
        description:
            ' Reduces the risk of being hacked or exposed to critical vulnerabilities that could compromise sensitive data. Many organizations suffer due to poor development practices and lack of security awareness. Our expert researchers thoroughly examine your applications, identify the most critical flaws, and provide clear guidance to help you understand, reproduce, and mitigate vulnerabilities before attackers can exploit them.',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/web-penetration-testing2.svg',
                description:
                    'A detailed list of vulnerabilities with classification and threat levels Documentation of corrective changes applied during the test Records of devices, systems, and protocols used Immediate fixes along with long-term recommendations',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/network-penetration-testing.svg',
        logo: '/assets/images/services/network-penetration-testing-logo.svg',
        name: 'Network Penetration Testing',
        description:
            'Hackers exploit weaknesses in network architecture to gain access to sensitive data such as personal information and financial systems, they can steal data, extort money. An infrastructure penetration test orensures that your systems and security measures are aligned with best practices. At the time of testing, no standard or publicly known weaknesses remain in the target system, and any discovered bugs can be fixed before they lead to an attack or security breach',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/network-penetration-testing2.svg',
                description:
                    'Brief on tests conducted, key findings, and achievements List of vulnerabilities with classification and threat levels Corrective changes applied during the process Documentation of devices, systems, and protocols used Immediate fixes and long-term recommendations',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/auditing.svg',
        logo: '/assets/images/services/auditing-logo.svg',
        name: 'Auditing',
        description:
            'Letting CyberGuardX LLC conduct your Security Auditing will reduce the chances of cyber threats going undetected, compliance violations, and security configurations that could expose sensitive data, as many organizations suffer breaches and reputational loss due to weak controls and poor security oversight.',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/auditing2.svg',
                description:
                    'A clear picture of your current security posture Detailed audit reports highlighting gaps, weaknesses, and strengths Classification of risks with impact analysis Evidence-based compliance checks against industry standards Actionable fixes and best-practice recommendations',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/grc.svg',
        logo: '/assets/images/services/grc-logo.svg',
        name: 'GRC',
        description:
            'Letting CyberGuardX LLC handle your Governance, Risk, and Compliance will minimize your organization’s exposure to regulatory fines, operational risks, and data breaches . Our specialists conduct a full assessment of your GRC framework to uncover critical gaps that threaten compliance and business continuity. then help you understand, address, and strengthen your controls to meet industry standards and requirements',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/grc2.svg',
                description:
                    'A structured governance and risk management framework tailored to your business Compliance mapping with regulatory requirements and standards Risk registers with priority levels and mitigation strategies Long-term guidance for sustainable compliance and security maturity',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/soc.svg',
        logo: '/assets/images/services/soc-logo.svg',
        name: 'SOC As a Service',
        description:
            'Hackers don’t keep office hours, and threats can surface at any moment. With SOC-as-a-Service, your systems are monitored 24/7 to detect and respond to attacks in real time. This ensures incidents are contained early, minimizing damage and keeping your business secure.',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/soc2.svg',
                description:
                    '24/7 monitoring of networks, endpoints, and cloud environments Real-time detection and response to threats and anomalies Centralized log management and incident reporting Threat intelligence feeds to stay ahead of emerging attacks',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/mobile-penetration-testing.svg',
        logo: '/assets/images/services/mobile-penetration-testing-logo.svg',
        name: 'Mobile Penetration Testing',
        description:
            ' Mobile Application Penetration Testing is the process of evaluating the security of mobile applications to uncover vulnerabilities that could put sensitive data at risk. Our mobile app pen test bring extensive experience in infrastructure and web penetration testing, This expertise enables us to thoroughly assess native apps, hybrid apps, web apps, and advanced web applications, ensuring a complete view of your mobile security and provide a complete remedy roadmap',
        type: 'cyber',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/mobile-penetration-testing2.svg',
                description:
                    'A complete report on the mobile app’s security posture Identified vulnerabilities with classification and risk levels Testing insights across native, hybrid, and web-based app components Assessment of backend integrations and data flow security',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/saas.svg',
        logo: '/assets/images/services/saas-logo.svg',
        name: 'SaaS Solutions',
        description:
            'Instant access to powerful cloud software with no setup required. Always secure, updated, and ready to scale with your business. Flexible solutions that save time, cut costs, and boost efficiency.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/saas2.svg',
                description:
                    'Software delivered over the internet, ready to use Scales easily with your business needs, no extra setup Always updated and maintained by the provider for you',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/customized.svg',
        logo: '/assets/images/services/customized-logo.svg',
        name: 'Customized Software Development',
        description:
            'We build software fully tailored to your business processes, giving you complete control over features, design, and integrations. Our solutions are flexible, scalable, and designed to grow with you. With customized development, you get exactly what you need — no unnecessary extras.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/customized2.svg',
                description:
                    'Tailored to fit your exact business goals Gives you full control over features, design, and integrations gives you the exact features you need without any    unnecessary extras',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/maintenance.svg',
        logo: '/assets/images/services/maintenance-logo.svg',
        name: 'Maintenance and Support',
        description:
            'Our maintenance and support services ensure your systems remain secure, reliable, and optimized for peak performance. With continuous monitoring, proactive updates, and rapid assistance, we give you the confidence to focus on growth while we handle the technical side.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/maintenance2.svg',
                description:
                    'We stay by your side long-term so you can focus on growth. Count on our team for quick, reliable help whenever you need it Ongoing updates and support to keep your system running without interruption to give you peace of mind',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/ai.svg',
        logo: '/assets/images/services/ai-logo.svg',
        name: 'AI and Automation Services',
        description:
            'Our AI and automation services help businesses save time, reduce costs, and boost efficiency. From chatbots and OCR to predictive analytics, we provide smart tools that optimize workflows and deliver valuable insights. With intelligent automation.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/ai2.svg',
                description:
                    'AI chatbots and virtual assistants Optimize workflows using smart automation tools for daily tasks Unlock growth with AI-powered analytics, predictions, and personalization',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/cloud.svg',
        logo: '/assets/images/services/cloud-logo.svg',
        name: 'Cloud Solutions and Integration',
        description:
            'Seamless migration, hosting, and integration on leading cloud platforms like AWS, Azure, and GCP. Our solutions ensure your systems stay connected, scalable, and secure. With expert cloud management.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/cloud2.svg',
                description:
                    'Connect all your tools and data in one secure place Tailored integrations that streamline workflows and save time Scalable, reliable, and always accessible for your team',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
    {
        imgSrc: '/assets/images/services/web.svg',
        logo: '/assets/images/services/web-logo.svg',
        name: 'Web Application Development',
        description:
            'We build fast, secure, and responsive web applications that deliver a seamless user experience across all devices. Our platforms are designed with the latest technologies to keep your business future-ready and competitive. Flexible and scalable.',
        type: 'software',
        extraInfo: [
            {
                imgSrc: '/assets/images/services/web2.svg',
                description:
                    'Designed with great modern technologies to keep your business future-ready Seamless online access for your customers, anytime and anywhere Flexible to grow with your business and easy to keep updated',
            },
        ],
        whatWeCanOffer: [
            {
                imgSrc: '/assets/images/services/offer1.svg',
                name: 'Proven Expertise',
                description:
                    'Experienced team delivering reliable and innovative software solutions',
            },
            {
                imgSrc: '/assets/images/services/offer2.svg',
                name: 'End-to-End Services',
                description:
                    'From design and development to deployment and ongoing support',
            },
            {
                imgSrc: '/assets/images/services/offer3.svg',
                name: 'Scalable Solutions',
                description:
                    'Applications that grow with your business and adapt to your needs.',
            },
        ],
    },
]

export async function GET(): Promise<NextResponse<ServiceObject[]>> {
    return NextResponse.json(services)
}
