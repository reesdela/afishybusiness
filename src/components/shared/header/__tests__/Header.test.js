import renderer from 'react-test-renderer'
import Header from '../Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
    it('renders correctly', () => {
        const testRenderer = renderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON()
        expect(testRenderer).toMatchSnapshot()
    })
})