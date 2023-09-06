import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import styles from './Project.module.css';

export default function Project() {
    const [text, setText] = useState([
        {
            id: 0,
            img: '/img/shareddiary.png',
            title: '공유일기(참여율: 100%)',
            skills: 'HTML, CSS, TypeScript, React, NodeJS',
            comment:
                '행복했던일이나 슬펏던일들을 그냥 지나가기에는 너무 아쉬은날들이 많다고 느껴져서 그런 날들을 기록할수있도록 만든 프로젝트입니다.',
            view: 'https://timely-youtiao-22dcc8.netlify.app/',
            git: 'https://github.com/KoreaLSW/SharedDiary_client',
            git2: 'https://github.com/KoreaLSW/SharedDiary_server',
            ti_client: 'https://benkyoshirou.tistory.com/24',
            ti_server: 'https://benkyoshirou.tistory.com/25',
        },
        {
            id: 1,
            img: '/img/football.png',
            title: 'FootBall(참여율: 100%)',
            skills: 'HTML, CSS, TypeScript, React, NodeJS',
            comment:
                '평소에 축구보는걸 좋아해서 축구에 대한 정보나 축구에 관한 이야기를 나눌수있도록 커뮤니티를 만들어 보았습니다.',
            view: 'http://leicestercity.store/',
            git: 'https://github.com/KoreaLSW/football_project',
        },
        {
            id: 2,
            img: '/img/mainportfolio.gif',
            title: '나의포트폴리오',
            skills: 'HTML, CSS, JavaScript, React, FireBase',
            comment:
                'React와 FireBaseAPI를 사용하여 포트폴리오 반응형 웹페이지를 만들어보았습니다.\n 애니메이션과 FireBaseAPI를 통해 Comment에서 간단하게 글을 쓸수있는 기능을 넣었습니다.',
            view: 'https://korealsw.github.io/',
            git: 'https://github.com/KoreaLSW/Portfolio_reactMain',
        },

        {
            id: 3,
            img: '/img/weather.gif',
            title: '날씨 알리미',
            skills: '· HTML, CSS, JavsaScript, React',
            comment:
                'KakaoMapAPI와 OpenWearherAPI를 사용하여 날씨를 알려주는 웹페이지를 만들어 보았습니다\n온도에 따라 옷추천해주는 기능과 KaKaoMapAPI를 이용하여 맵의 위치를 클릭하면 해당 위치의 온도를 알려주는 기능을 만들었습니다.',
            view: 'https://friendly-torrone-28699c.netlify.app/',
            git: 'https://github.com/KoreaLSW/Portfolio_Weather',
        },
    ]);

    return (
        <div id='Project' className={styles.project}>
            <h2 className={styles.title}>Project</h2>
            <div className={styles.container}>
                <ul className={styles.project_list}>
                    {text &&
                        text.map((value) => (
                            <ProjectItem key={value.id} value={value} />
                        ))}
                </ul>
            </div>
        </div>
    );
}
