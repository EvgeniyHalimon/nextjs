export type addresType = {
    street : string,
    suite : string,
    city : string,
    zipcode : string,
}

export type contactType = {
    id: string,
    name: string,
    email: string,
    address: addresType,
}

export type postType = {
    title: string,
    body: string
}