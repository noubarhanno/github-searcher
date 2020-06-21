export type IRepo = {
    full_name: string;
    owner: {
        html_url: string;
        login: string;
    };
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
};

export interface IRepos {
    terms?: {
        [key: string]: IRepo[];
    };
}
