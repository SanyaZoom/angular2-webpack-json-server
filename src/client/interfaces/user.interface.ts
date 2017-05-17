export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public company: string,
        public posts: any
    ){}
}