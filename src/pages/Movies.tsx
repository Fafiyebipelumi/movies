import { Heading, Pane } from 'evergreen-ui'
import { FC, useEffect, useState } from 'react'
import axios from '../api/axios'
import Movie from '../components/Movie'

const Movies: FC = () => {
    const ALL_MOVIES_URL: string = '/title/get-videos'
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const options = {
        method: 'GET',
        url: ALL_MOVIES_URL,
        params: {
            tconst: 'tt0944947',
            limit: '30',
            region: 'US'
        }
    }
    useEffect(() => {
        const AllMovies = async () => {
            setIsLoading(true)
            try {
                const response = await axios(options)
                console.log(response.data.resource.videos);
                setMovies(response.data.resource.videos)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
                setIsLoading(false)
            }
        }
        AllMovies()
    }, [])
    return (
        <Pane>
            <Heading>ALL MOVIES</Heading>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <Movie movies={movies} />
        </Pane>
    )
}

export default Movies