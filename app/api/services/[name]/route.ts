// Core
import { NextResponse } from 'next/server'
// Functions
import { fromKebabCase } from '@/src/utils/Functions'
// Types
import { ServiceObject } from '@/src/types/objectsTypes'
import { GetServiceRouteParamsType } from '@/src/types/propsTypes'
// Reuse services data
import { services } from '../route'

export async function GET(
    req: Request,
    context: GetServiceRouteParamsType
): Promise<NextResponse<ServiceObject | { error: string }>> {
    const { name } = await context.params

    // Convert kebab-case to normal title (e.g., web-penetration-testing → Web Penetration Testing)
    const serviceName = fromKebabCase(name)

    const service = services.find(
        (s) => s.name.toLowerCase() === serviceName.toLowerCase()
    )

    if (!service) {
        return NextResponse.json(
            { error: 'Service not found' },
            { status: 404 }
        )
    }

    return NextResponse.json(service)
}
