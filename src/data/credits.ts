export enum Author {
    Aikoyori,
    AisuAsai,
    SAWARATSUKI
}
export const CREDITS: { [key in Author]: ICredit } = {
    [Author.Aikoyori]: {
        author: 'Aikoyori',
        twitter: 'https://twitter.com/Aikoyori',
        github: 'https://github.com/Aikoyori',
    },
    [Author.AisuAsai]: {
        author: 'Aisu Asai',
        twitter: 'https://twitter.com/AisuAsai',
    },
    [Author.SAWARATSUKI]: {
        author: 'SAWARATSUKI',
        twitter: 'https://twitter.com/sawaratsuki1004',
        github: 'https://github.com/SAWARATSUKI',
    },
};

export function getCredit(author: Author): ICredit {
    return CREDITS[author];
}