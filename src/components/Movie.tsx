import { Heading, Image, Pane } from 'evergreen-ui'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { MoviesProps } from '../interfaces/Movies.interface'

const Movie: FC<MoviesProps> = ({ movies }) => {
    return (
        <Pane display='flex' flexWrap='wrap' width='100%' alignItems='center' justifyContent='center'>
            {movies.map(movie => (
                <Pane key={movie.id} display='flex' flexWrap='wrap' width='100%' alignItems='center' justifyContent='center' flex={2} marginX={20}>
                    <Link to={`/movie${movie.id}`} style={{ textDecoration: 'none' }}>
                        <Image src={movie.image.url} alt='movie-img' width={200} height={150} />
                        <Pane>
                            <Heading>{movie.title}</Heading>
                        </Pane>
                    </Link>
                </Pane>
            ))}
        </Pane>
    )
}

export default Movie