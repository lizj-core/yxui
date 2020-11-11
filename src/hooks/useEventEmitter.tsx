import { DependencyList, useCallback, useContext, useEffect } from 'react'
import { EventEmitterRCContext } from '../components/EventEmitterRC'
import { BaseEvents } from '../utils/events'

function useEmit<Events extends BaseEvents>() {
  const em = useContext(EventEmitterRCContext)
  return useCallback(
    <E extends keyof Events>(type: E, ...args: Events[E]) => {
      em.emit(type, ...args)
    },
    [em],
  )
}

export function useEventEmitter<Events extends BaseEvents>() {
  const emit = useEmit()
  return {
    useListener: <E extends keyof Events>(
      type: E,
      listener: (...args: Events[E]) => void,
      deps: DependencyList = [],
    ) => {
      const em = useContext(EventEmitterRCContext)
      useEffect(() => {
        em.add(type, listener)
        return () => {
          em.remove(type, listener)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [listener, type, ...deps])
    },
    emit,
  }
}