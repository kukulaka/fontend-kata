import Search from 'antd/lib/input/Search';
import { shallow } from 'enzyme';
import SearchBox from '../components/SearchBox';

// check the component exists 
describe("SearchBox", () => {
    it("SearchBox Component should be rendered", () => {
        const wrapper = shallow(<SearchBox />);
    });

})
