import Search from 'antd/lib/input/Search';
import { shallow, mount } from 'enzyme';
import SearchBox from '../components/SearchBox';


// check the component exists 
describe("SearchBox", () => {
    it("SearchBox Component should be rendered", () => {
        const wrapper = shallow(<SearchBox driveName="test" files={[]} />);
        expect(wrapper.exists()).toBe(true);
    });
});

// test props are received

//test on enter

//test on search 

// test that search works

// test error is displayed

//test breadcrumb exisits

//test FileList exists and props


