import { shallow } from 'enzyme'
import Counter from './../../component/Counter.js'
import { regionName } from './../../mock/mock.js'

describe('Counter component', () => {
    
    it('should call componentDidMount once', () => {
        const componentDidMountSpy = jest.spyOn(Counter.prototype, 'componentDidMount');
        const component = shallow(<Counter/>);
        expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });
    
    // state is updated or not


    it('map function', () => { // wrap
        const wrapper = shallow(<Counter/>)
        //const state = wrapper.setState({region})
        //expect(region).toEqual(state);
        const region = regionName.map((node) => node)
        expect(region).toEqual([
            {
                "id": 1,
                "name": "Americas"
            },
            {
                "id": 2,
                "name": "Asia"
            },
            {
                "id": 3,
                "name": "Europe"
            },
            {
                "id": 4,
                "name": "Africa"
            }
        ]);
    })
}) 