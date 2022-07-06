
import { shallow } from "enzyme";
import Dropdown from "../../component/dropdown";


describe('Dropdown Component Test', ()=>{
    it('Dropdown Test', ()=>{
        const wrapper = shallow(<Dropdown/>)
        expect(wrapper.exists('lable')).toEqual(true)
    })
    it('select tag test', ()=>{
        const values = ['Asia', 'Americas', 'Afric', 'Europe']
        const wrapper = shallow(<Dropdown values={values}/>)
        expect(wrapper.find('option')).toHaveLength(4)
        
    })
})
