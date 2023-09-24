export type NewType = {
    uuid: number
    title: string
    description: string
    image_url: string
    url: string
}

export type NewsType = {
    page: number
    results: NewType[]
}