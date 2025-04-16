import React from 'react';

type Props = {
    fill: string;
    size: number;
}

export const Pacman: React.FC<Props> = ({ fill, size }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="pacman3351"
            viewBox="50 0 500 300"
            width={size}
            height={size}
        >
            <style>
                {`
                .pacman3351-dot {
                    fill: ${fill};
                }
                .pacman3351-open,
                .pacman3351-mouth-top,
                .pacman3351-mouth-bottom {
                    fill: ${fill};
                }
                .pacman3351-mouth-top,
                .pacman3351-mouth-bottom {
                    animation-duration: 175ms;
                    animation-timing-function: linear;
                    animation-direction: alternate;
                    animation-iteration-count: infinite;
                    transform-origin: calc(300px/2) 150px; // center of circle
                }
                .pacman3351-mouth-top {
                    animation-name: rotate3351-counterclockwise;
                }
                .pacman3351-mouth-bottom {
                    animation-name: rotate3351-clockwise;
                }
                @keyframes rotate3351-counterclockwise {
                    100% {
                        transform: rotate(-30deg);
                    }
                }
                @keyframes rotate3351-clockwise {
                    100% {
                        transform: rotate(30deg);
                    }
                }
                .pacman3351-dot {
                    animation-name: dot3351-motion;
                    animation-duration: 600ms;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
                @keyframes dot3351-motion {
                    100% {
                        transform: translateX(-100px); // distance between dots
                    }
                }
                `}
            </style>
            <circle className="pacman3351-dot" cx="250" cy="150" r="10" />
            <circle className="pacman3351-dot" cx="350" cy="150" r="10" />
            <circle className="pacman3351-dot" cx="450" cy="150" r="10" />
            <circle className="pacman3351-dot" cx="550" cy="150" r="10" />
            <circle className="pacman3351-dot" cx="650" cy="150" r="10" />
            <path className="pacman3351-mouth-bottom" d="M 150,150 L 220.4,221.0 A 100 100 0 0 0 250,150 Z" />
            <path className="pacman3351-mouth-top" d="M 150,150 L 220.4,79.0 A 100 100 0 0 1 250,150 Z" />
            <path className="pacman3351-open" d="M 150,150 L 236.6,100 A 100 100 0 1 0 236.6,200 Z" />
        </svg>
    );
};