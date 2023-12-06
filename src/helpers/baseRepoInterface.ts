export default interface IBaseRepo<T> {
    create(data: T): Promise <T>
    find?(query: T): Promise<T[]>
    findOne?(query: T): Promise<T>
    update?(query: T, data: T): Promise<T>
    delete?(query: T): Promise<T>
}