import { shallow } from "enzyme";
import {mockStore} from '../../../Utils/index';
//import testStore from '../../../Utils/index'
import Container from '../../container/Container'
import reducer from "../../reducer/reducer";
import { fetchUser } from "../../action/action";

import { FETCH_USERS_SUCCESS } from "../../action/types";

import configureMockStore from 'redux-mock-store';
const testStore = configureMockStore();

describe('container test', ()=>{ 
    it('container', ()=>{
        const shallowWithStore = (component, store)=>{
            const context = {store}
            return shallow(component, {context})
        };
        const initialState = {
            loading: false,
            users: [],
            error: '',   
        }
        const store = mockStore(initialState)
        const container = shallowWithStore(<Container store={store}/>);
        expect(typeof(container)).toBe('object')
        //expect(Object.is(container, 'object')).toBe(true)
        //expect(container).toMatchObject()
    })

    it('mapDispatchToProps', ()=>{ 
        const initialState = {
            reducer: {
            loading: false,
            users: [
                {type: 'FETCH_USERS_SUCCESS'}
            ],
            error: '',
            }           
        }
        
        // const fetchUser = [
        //     {type: 'FETCH_USERS_SUCCESS'}
        // ]
        const store = testStore(initialState);
        const wrapper = shallow(<Container store={store} />);
        const actions = store.getActions();
        console.log(actions);
        expect(actions).toEqual([]);
    }) 
})