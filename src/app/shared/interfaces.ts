

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IUserLogin {
    email: string;
    password: string;
}
