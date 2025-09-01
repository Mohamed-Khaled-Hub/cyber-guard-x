// Functions
import { renderClasses } from '@/src/utils/Functions'
// Types
import { ContainerProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/ContainersRelated/Container.css'

export default function Container({
    children,
    className,
    noPadding,
    addMargin,
}: ContainerProps) {
    return (
        <div
            className={renderClasses(
                'container',
                noPadding && 'no-padding',
                addMargin && 'margined',
                className
            )}
        >
            {children}
        </div>
    )
}
