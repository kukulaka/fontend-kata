import { shallow } from 'enzyme';
import FileList from '../components/SearchBox';

// check the component exists 
describe("SearchBox", () => {
    it("SearchBox Component should be rendered", () => {
        const wrapper = shallow(<FileList />);
    });

})
