import { FC } from 'react'
import { Pane, Heading } from 'evergreen-ui';

const Navbar: FC = () => {
    return (
        <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Heading size={600}>My App</Heading>
        </Pane>
    )
}

export default Navbar