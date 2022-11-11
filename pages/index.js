import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/Timeline";
import { useState } from "react";

const HomePage = () => {

    const [searchValue, setSearchValue] = useState("");

    return <>
        <CSSReset />
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
            <Menu 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                />
            <Header />
            <Timeline 
                searchValue={searchValue}
                playlists={config.playlists}>
                Conteúdo
            </Timeline>
        </div>
    </>
        
}

export default HomePage;

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;


const StyledBanner = styled.div`
    background-color: blue;
    height: 230px;
    background-image: url(${config.bg}); 
`;
const Header = () => {
    return <StyledHeader>
        <StyledBanner />
        <section className="user-info">
            <img src={`https://github.com/${config.github}.png`} />
            <div>
                <h2>{config.name}</h2>
                <p>{config.job}</p>
            </div>
        </section>
    </StyledHeader>
}

const Timeline = ({searchValue, ...props}) => {
    const playlistsName = Object.keys(props.playlists);
    return <StyledTimeline>
        {
            playlistsName.map((name) => {
                const videos = props.playlists[name];
                return (
                    <section key={name}>
                        <h2>{name}</h2>
                        <div>
                            {videos
                                .filter((video) => video.title.toLowerCase().includes(searchValue.toLowerCase()))
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>{video.title}</span>
                                        </a>
                                    )}
                                )
                            }
                        </div>
                    </section>
                )
            })
        }
    </StyledTimeline>
}



