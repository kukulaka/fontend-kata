import { shallow } from 'enzyme';
import { renderHook, act } from "@testing-library/react-hooks";
import Home from '../pages/Home';
import {getFileData} from '../api/getFileData';
import jsonData from '../files.json';


// check the component exists 
describe("Home", () => {
    it("Home Component should be rendered", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.exists()).toBe(true);
    });
})

// hooks

describe("get all the files and set state", () => {
    it("data is fetched and loading is complete", async () => {
        const mockedState = { loading: false, error: "", fileData: jsonData };
      const { result } = renderHook(() =>
        getFileData()
      );
  
      expect(await result.current).toStrictEqual({
      mockedState
    });

    });
})

const whenStable = async () =>
    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
// mock loading to see if it stays on no data

it("should render loading", async () => {
    const props = { allFiles: jest.fn().mockResolvedValueOnce([]), loading: jest.fn().mockResolvedValueOnce(true), error: jest.fn().mockResolvedValueOnce(false) };
    const wrapper = shallow(<Home {...props}></Home>);
    await whenStable();
    expect(wrapper.find('p').text()).toBe('Loading your drive, please wait');
});

//error render

it("should render error", async () => {
    const props = { allFiles: jest.fn().mockResolvedValueOnce([]), loading: jest.fn().mockResolvedValueOnce(false), error: jest.fn().mockResolvedValueOnce("YAY AN ERROR") };
    const wrapper = shallow(<Home {...props}></Home>);
    const errorDisplay = wrapper.find("#errorContainer");
    await whenStable();
    expect(errorDisplay).toBeTruthy();
});

