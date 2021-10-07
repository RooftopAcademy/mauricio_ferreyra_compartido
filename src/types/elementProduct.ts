import level from "../enum/LevelEnum";

type elementProduct = {
    id: number,
    name: string,
    duration: string,
    level: level,
    points: number,
    views: number,
    photo_tutor: string,
    name_tutor: string,
    description: string,
    image: string,
    languaje: string,
    price: number
    theme: {
        id: number,
        name: string,
        video: {
            id: number,
            name: string,
            url: string
        }[]
    }[]
}

export default elementProduct