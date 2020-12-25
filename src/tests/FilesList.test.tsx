import { shallow } from 'enzyme';
import FileList from '../components/FileList';

// check the component exists 
describe("FileList", () => {
    it("FileList Component should be rendered", () => {
        const wrapper = shallow(<FileList files={[]}/>);
        expect(wrapper.exists()).toBe(true);
    });

})

//check received props
