import { shallow } from 'enzyme';
import BreadCrumb from '../components/BreadCrumb';

// check the component exists 
describe("BreadCrumb", () => {
    it("BreadCrumb Component should be rendered", () => {
        const wrapper = shallow(<BreadCrumb />);
        expect(wrapper.exists()).toBe(true);
    });

})

//check received props
