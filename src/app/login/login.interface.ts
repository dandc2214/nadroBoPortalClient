/**
 * This interface holds user data info
 */
export interface LoginInterface {
    username: string;
    access_token: string;
    roles: UserRolesInterface;
}

export interface UserRolesInterface{
    [index: number]: string;
}