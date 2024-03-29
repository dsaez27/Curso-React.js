import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import Swal from 'sweetalert2';


configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    close: jest.fn(),
}));
