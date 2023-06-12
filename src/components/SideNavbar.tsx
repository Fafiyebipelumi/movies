import { FC, Fragment } from 'react'
import { SideSheet, Paragraph } from 'evergreen-ui';
// import { dashboard } from '@fortawesome/free-solid-svg-icons';

interface showProps {
    isShown: boolean
    closeShow: () => void
}
const SideNavbar: FC<showProps> = ({ isShown, closeShow }) => {
    return (
        <Fragment>
            <SideSheet
                position='left'
                isShown={isShown}
                width={350}
                onCloseComplete={closeShow}
            >
                <Paragraph margin={40}>Basic Example and It's good to use Side Sheet</Paragraph>
            </SideSheet>
            {/* <Button onClick={openShow}>Show Basic Side Sheet</Button> */}
        </Fragment>
    )
}

export default SideNavbar;