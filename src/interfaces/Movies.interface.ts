type ImageProp = {
    height: number
    url: string
    id?: number | string
    width: number
}

type parentTitleProp = {
    id: number | string
    image: ImageProp
    title: string
    titleType: string
    year: number
}

type primaryTitleProp = {
    episode: number
    id: number | string
    image: ImageProp
    season: number
    title: string
    titleType: string
    year: number
}

interface Movies {
    audioLanguage: string
    contentType: string
    description: string
    durationInSeconds: number
    id: number | string
    image: ImageProp
    parentTitle: parentTitleProp
    primaryTitle: primaryTitleProp
    title: string
}

export interface MoviesProps {
    movies: Movies[]
}