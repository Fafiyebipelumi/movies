import { Pane } from 'evergreen-ui'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails: FC = () => {
    const { id } = useParams()
    return (
        <Pane>Detail - {id}</Pane>
    )
}

export default MovieDetails