'use client';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ScoreIndicator() {
    const score = 75;

    return (
        <div className="w-14 h-14">
            <CircularProgressbar
                value={score}
                text={`${score}`}
                styles={buildStyles({
                    textSize: '18px',
                    pathColor: '#469607',       // Green
                    textColor: '#469607',
                    trailColor: '#69C62036',
                })}
            />
        </div>
    );
}

export default ScoreIndicator;
