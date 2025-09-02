// Core
import { NextResponse } from 'next/server'
// Functions
import { fromKebabCase } from '@/src/utils/Functions'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
// Reuse services data
import { services } from '../route'

export async function GET(
    req: Request,
    { params }: { params: { name: string } }
): Promise<NextResponse<ServiceObject | { error: string }>> {
    const { name } = params

    // Convert kebab-case to normal title (e.g., web-penetration-testing → Web Penetration Testing)
    const serviceName = fromKebabCase(name)

    const service = services.find((s) => s.name === serviceName)

    if (!service) {
        return NextResponse.json(
            { error: 'Service not found' },
            { status: 404 }
        )
    }

    return NextResponse.json(service)
}
