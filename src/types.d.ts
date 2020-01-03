import { AnyAction } from 'redux'
import { Reducer } from 'react'
import rootReducer from 'store/rootReducer'

// tslint:disable:no-any
declare module 'Types' {
  // StateType is copied from typesafe-actions library
  export type StateType<ReducerOrMap> = ReducerOrMap extends (
    ...args: any[]
  ) => any
    ? ReturnType<ReducerOrMap>
    : ReducerOrMap extends object
    ? { [K in keyof ReducerOrMap]: StateType<ReducerOrMap[K]> }
    : never

  export type RootState = StateType<typeof rootReducer>

  export interface LayoutEvent {
    nativeEvent: {
      layout: {
        width: number
        height: number
      }
    }
  }

  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
  export type ValueOf<T> = T[keyof T]

  export interface RefObject<T> {
    // immutable
    readonly current: T | null
  }
}
