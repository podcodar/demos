
// Action
// Action Creator
// Reducer

import { Reducer } from "react";
import { Action } from "redux";




// // 1. idle - ocioso
// // 2. loading - carregando
// // 3. loaded - carregado
// // 4. failed - erro



// State definition

type Status = 'idle' | 'loading' | 'loaded' | 'failed'

interface State {
  status: Status;
  profileData: object | undefined;
  error: string | undefined;
  username: string;
}

export const INITIAL_STATE: State = {
  profileData: undefined,
  error: undefined,
  username: '',
  status: 'idle',
}

type MyAction = Action & { payload: string | object }

export const reducer: Reducer<State, MyAction> = (
  state,
  action,
): State => {
  switch (action.type) {
    case 'load-profile':
      return {
        ...state,
        status: 'loading',
        username: action.payload as string,
      }
    case 'load-profile-success':
      return {
        ...state,
        status: 'loaded',
        profileData: action.payload as object,
      }
    case 'load-profile-failed':
      return {
        ...state,
        status: 'failed',
        error: action.payload as string,
      }
    case 'load-profile-failed':
      return {
        ...state,
        status: 'failed',
        error: action.payload as string,
      }
  }
  return INITIAL_STATE
}


// Action Creators

export function loadProfile(payload: string) {
  return {
    type: 'load-profile',
    payload,
  }
}

export function loadProfileSuccess(payload: object) {
  return {
    type: 'load-profile-success',
    payload,
  }
}

export function loadProfileFailed(payload: object) {
  return {
    type: 'load-profile-failed',
    payload,
  }
}
