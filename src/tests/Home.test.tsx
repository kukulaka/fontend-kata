import { shallow } from 'enzyme';
import { renderHook, act } from "@testing-library/react-hooks";
import { getFileData } from '../api/getFileData';
import Home from '../pages/Home';

// check the component exists 
describe("Home", () => {
    it("Home Component should be rendered", () => {
        const wrapper = shallow(<Home />);
    });
})


// test the intial state

describe("use the fetch", () => {
    it("initial allFiles state is loading and data empty", () => {
        const { result } = renderHook(() => getFileData().then(response => {
            return response;
        }));

        expect(result.current).toStrictEqual({ loading: true, allFiles:[]});
    });
})
