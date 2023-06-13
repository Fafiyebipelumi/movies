import { FC } from 'react'
import { Avatar, Heading, Pane } from 'evergreen-ui';
import { GiHamburgerMenu } from 'react-icons/gi'

interface openProps {
    openShow: () => void
}
const Navbar: FC<openProps> = ({ openShow }) => {
    return (
        <Pane display="flex" alignItems='flex-start' justifyContent='space-between' padding={16} background="white" borderRadius={3} borderBottom='1px solid black' width='100%'
            position="sticky"
            top={0}
            zIndex={1}>
            {/* <IconButton icon="menu" appearance="default" onClick={() => setIsSideSheetOpen(true)} /> */}
            <GiHamburgerMenu onClick={openShow} style={{ cursor: 'pointer', fontSize: '2rem', color: 'black' }} />
            <Heading size={600} marginX={50} fontSize={25}>MOVIESIMDB</Heading>
            <Pane display='flex' alignItems='center' justifyContent='space-between'>
                <Avatar name='Fafiyebi Oluwapelumi' size={40} />
            </Pane>
        </Pane>
    )
}

export default Navbar;