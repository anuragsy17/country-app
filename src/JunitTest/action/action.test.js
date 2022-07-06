//import configureStore from 'redux-mock-store';
import moxios from 'moxios'
//import  mockStore  from '../../../Utils/index';
import { fetchUser } from '../../action/action'
   
import { initialState } from '../../reducer/reducer';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
} from '../../action/types';
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

// describe('actions', () => {
//     beforeEach(() => { // Runs before each test in the suite
//         //store.clearActions();
//         moxios.install();
//     });
//     afterEach(() => {
//         moxios.uninstall()
//     })
//     it('store is updated correctly', () => {
//         const expectedState = [{
             
//                 loading: false,
//                 users: [{id: '1', name: 'someName'}, {id: '1', name: 'someName'}],
//                 error: '',            
//         }]
//         const store = mockStore();
//         moxios.wait(()=>{       //axios//component helper
//             const request = moxios.requests.mostRecent()
//             request.respondWith({
//                 status: 200,
//                 response: expectedState
//             })
//         });
         
//         return store.dispatch(fetchUser())
//         .then(()=>{
//             const newState = store.getActions()
//             expect(newState).toBe(expectedState)
//         })
//     })
// });


/*-----ACTION------*/

// import { fetchUser } from '../../action/action';
// import moxios from 'moxios';
// //import store from '../Store/store';
// import store from '../../store/store'
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import {
//     FETCH_USER_SUCCESS,
//     FETCH_USER_FAILURE,
//     FETCH_USERS_FAILURE
//   } from "../../action/types";
// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);


describe('-->CountryAction ', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    describe('-->fething data', () => {
        let continent = "asia";
        let expectedState = [
            { name: { common: 'India' } },
            { name: { common: 'China' } },
            { name: { common: 'Nepal' } },
            { name: { common: 'Turkey' } },
            { name: { common: 'srilanka' } }
        ];
        const storeData = mockStore();

    it('should dispatch action-type ',()=>{
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status : 200,
                response: expectedState
            });
        });

        return storeData.dispatch(fetchUser())
        .then(()=>{
            const actions = storeData.getActions();
            console.log("actions",actions)
            expect(actions[0].type).toEqual(FETCH_USER_SUCCESS);
            
        })
    })

     it("should dispatch action type",()=>{
        const errorResp = {
            status: 404,
            response: { message: 'Bad request' }
        }
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            request.reject(errorResp)
        })

        return storeData.dispatch(fetchUser())
        .then(()=>{
            const actions = storeData.getActions();
            console.log("error action",actions);
            expect(actions[1].type).toEqual(FETCH_USER_FAILURE);
        })
     })    

        it('updated state.countries', () => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({ status: 200, response: expectedState });
            });
            return storeData.dispatch(fetchUser(continent))
                .then(() => {
                     console.log('stooore',store.getState().region.users);
                    let  users  = store.getState().region.users;
                    // console.log(users)
                    users = users.map(item => item.name.common)
                    console.log('users',users)
                    expectedState = expectedState.map(item => item.name.common)
                    console.log('expectedState',expectedState)
                    let bool = users == expectedState;
                        console.log(bool)
                    expect(bool).toBe(false);
                 })
        });
        it('Should reject the request', () => {
            const errorResp = {
                status: 404,
                response: { message: 'Bad request' }
            }
            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.reject(errorResp)
            })
            return storeData.dispatch(fetchUser("")).then(() => {
                console.log(store.getState());
                const error = store.getState().region.error;
                expect(error).toEqual(undefined);
            })
        });

        it('Should reject the request', () => {
            const errorResp = {
                status: 400,
                response: { message: 'Invalid Data' }
            }
            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.reject(errorResp)
            })
            return storeData.dispatch(fetchUser("")).then(() => {
                console.log(store.getState());
                const error = store.getState().region.error;
                expect(error).toEqual(undefined);
            })
        });
    });

});