import { render } from '@testing-library/react'
import Spinner from './Spinner'
 
it('renders homepage unchanged', () => {
  const SpinnerTest = render(<Spinner />)
  expect(SpinnerTest).toMatchSnapshot()
})
