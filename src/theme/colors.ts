type TColors = {
    [key: string]: {
        [key: string]: string | string[];
    };
};
const colors: TColors = {
    common: {
        white: '#fff',
        black: '#000',
        transparent: 'transparent',
        blacks: [
            'rgba(0,0,0,.025)',
            'rgba(0,0,0,.05)',
            'rgba(0,0,0,.1)',
            'rgba(0,0,0,.2)',
            'rgba(0,0,0,.3)',
            'rgba(0,0,0,.4)',
            'rgba(0,0,0,.5)',
            'rgba(0,0,0,.6)',
            'rgba(0,0,0,.7)',
            'rgba(0,0,0,.8)',
            'rgba(0,0,0,.9)',
        ],
        whites: [
            'rgba(255,255,255,.025)',
            'rgba(255,255,255,.05)',
            'rgba(255,255,255,.1)',
            'rgba(255,255,255,.2)',
            'rgba(255,255,255,.3)',
            'rgba(255,255,255,.4)',
            'rgba(255,255,255,.5)',
            'rgba(255,255,255,.6)',
            'rgba(255,255,255,.7)',
            'rgba(255,255,255,.8)',
            'rgba(255,255,255,.9)',
        ],
    },
    primary: {
        light: '#0E5AA7',
    },
    text: {
        light: '#e4e4e4',
        main: '#c4c4c4',
        dark: '#818181',
    },
    body: {
        default: '#d4d4d4',
    },
    error: {
        main: '#FF0000',
    },
};

export default colors;
