import { shallow } from 'enzyme';
import { fetchUser } from '../../action/action';
import App from '../../component/App'
import Counter from '../../component/Counter'
import sinon from 'sinon'


describe('App component', () => { // check loading is true or not 
    it('loading will be true and should render loading', ()=>{
        const wrapper = shallow(<App loading='loading' />)
        expect(wrapper.find('h2').text()).toBe('Loading')
        expect(wrapper.props(loading)).toBe(true)
    })
    it('should call componentDidMount once', () => {
        const wrapper = shallow(<App fetchUser={fetchUser} />)
        const instance = wrapper.instance()
        sinon.spy(instance, 'componentDidMount')
        instance.componentDidMount();
        expect(instance.componentDidMount).toHaveBeenCalledTimes(1)
        
        //jest.spyOn(instance, 'componentDidMount')
    });


    it('should xyz function called', ()=>{ //complete description
        const wrapper = shallow(<App fetchUser={fetchUser}/>);
        const instance = wrapper.instance();
        sinon.spy(instance, 'xyz');
        wrapper.instance().xyz()
        expect(instance.xyz).toHaveBeenCalled(); //fetch
    })

})

//spies(spy) => records arguments, return values, the value of this and exception throwns.