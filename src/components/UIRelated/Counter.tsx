'use client'

// Core
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
// Types
import { CounterProps } from '@/src/types/propsTypes'
// Style
import '@/src/styles/components/UIRelated/Counter.css'

export default function Counter({ endNumber, numberFor }: CounterProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.7,
    })

    return (
        <div ref={ref} className='counter-container'>
            <div className='counter-number'>
                {inView ? (
                    <div>
                        <CountUp start={0} end={endNumber} duration={2} />
                        <span>+</span>
                    </div>
                ) : (
                    <div>
                        <span>0</span>
                        <span>+</span>
                    </div>
                )}
            </div>
            <div className='counter-label'>{numberFor}</div>
        </div>
    )
}
