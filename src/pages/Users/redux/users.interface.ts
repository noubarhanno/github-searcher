export type IUser = {
    avatar_url: string;
    url: string;
    login: string;
    html_url?: string;
    details: IUserDetails;
};

export type IUserDetails = {
    login: string;
    company: string;
    email: string;
    location: string;
    public_repos: number;
    bio: string;
};

export interface IUsers {
    terms?: {
        [key: string]: IUser[];
    };
}
