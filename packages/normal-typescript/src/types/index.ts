export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

export interface ApiError {
    message: string;
    code: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface CreateUserRequest {
    name: string;
    email: string;
}

export interface UpdateUserRequest {
    id: string;
    name?: string;
    email?: string;
}