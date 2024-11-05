import { takeLatest, all, call, put } from 'redux-saga/effects';
import { 
  signInFailed, 
  signInSuccess, 
  signOutFailed, 
  signOutSuccess, 
  signUpFailed, 
  signUpSuccess, 
  userActionTypes 
} from './user.action';
import { 
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth, 
  getCurrentUser, 
  signInUserWithEmailAndPassword, 
  signInWithGooglePopup, 
  signOutUser,
} from '../../utils/firebase/firebase.utils';


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails); 
    console.log('SNAPSHOT', userSnapshot);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch(error) {
    yield put(signInFailed(error));
  }
}; 

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch(error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch(error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({payload: {email, password, displayName}}) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch(error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({ payload: {user, additionalDetails}}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch(error) {
    yield put(signOutFailed(error));
  }
}

// ENTRY SAGAS
export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.checkUserSession, isUserAuthenticated);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.googleSignInStart, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.emailSignInStart, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.signUpStart, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userActionTypes.signUpSuccess, signInAfterSignUp)
} 

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.signOutStart, signOut);
}

// SAGAS AGGREGATOR
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ]);
}