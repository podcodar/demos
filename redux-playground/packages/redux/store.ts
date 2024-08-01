import { configureStore } from '@reduxjs/toolkit'
// ...

import { loadProfile, loadProfileFailed, loadProfileSuccess, reducer } from './github-fetch'


export const store = configureStore({
  reducer: {
    github: reducer as any,
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// store.subscribe(() => {
//   const { status = '', username = '' } = store.getState().github

//   if (status === 'loading') {
//     fetch(`https://api.github.com/users/${username}`)
//       .then(res => res.json())
//       .then(data => store.dispatch(loadProfileSuccess(data)))
//       .catch(e => store.dispatch(loadProfileFailed(e.message)))
//   }
// })

export async function fetchProfile(username: string) {
  store.dispatch(loadProfile(username))

  try {
    const res = await fetch(`https://api.github.com/users/${username}`)

    if (!res.ok) throw new Error(res.statusText)

    const data = await res.json()
    store.dispatch(loadProfileSuccess(data))
  } catch (e) {
    store.dispatch(loadProfileFailed(e.message))
  }
}

// // action
// const Action = {
//   type: 'falar',
//   payload: 'Olha mundo!'
// }

// // action creation
// function falar(talk: string) {
//   return {
//     type: 'falar',
//     payload: talk
//   }
// }


// store.dispatch(falar("Ola mundo"))



// // 1. idle - ocioso
// // 2. loading - carregando
// // 3. loaded - carregado
// // 4. failed - erro


// function reducer(state=initialState, action) {
//   switch (action.type) {
//     case 'falar':
//       return {
//         ...state,
//         speaking: action.payload
//       }
//     case 'andar':
//       return {
//         ...state,
//         v: action.payload
//       }
//   }
//   return state
// }

// reducer(null, {})
