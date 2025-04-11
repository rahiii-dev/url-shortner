export interface UserCreateDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface UserValidateDto {
    email: string;
    password: string;
}


export interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    createAt: Date;
    updatedAt: Date;
}
