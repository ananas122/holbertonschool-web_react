import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { StyleSheetTestUtils } from 'aphrodite';

configure({ adapter: new Adapter() });
StyleSheetTestUtils.suppressStyleInjection();