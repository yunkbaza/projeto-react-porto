import styled from 'styled-components';

type MembroTimeType = {
    name: string;
    rm: string;
    imgSrc: string;
    linkedin: string;
    github: string;
    email: string;
};

const MembroTime: MembroTimeType[] = [
    {
        name: 'Allan Gabriel Baeza Amirati',
        rm: 'RM556771 - 1TDSPF',
        imgSrc: './img/foto_allan.jpeg',
        linkedin: 'https://www.linkedin.com/in/allan-baeza-a281b1233/',
        github: 'https://github.com/yunkbaza',
        email: 'mailto:rm556771@fiap.com.br',
    },
    {
        name: 'Breno Gustavo dos Santos',
        rm: 'RM557509 - 1TDSPF',
        imgSrc: './img/foto_breno.png',
        linkedin: 'https://www.linkedin.com/in/brenogustavo/',
        github: 'https://github.com/gitbreno',
        email: 'mailto:rm557509@fiap.com.br',
    },
    {
        name: 'Lívia de Oliveira Lopes',
        rm: 'RM556281 - 1TDSPR',
        imgSrc: './img/foto_livia.png',
        linkedin: 'https://www.linkedin.com/in/livia-lopes-808a01295',
        github: 'https://github.com/livialopes55',
        email: 'mailto:rm556281@fiap.com.br',
    },
];

const TeamContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const PhotosList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

const MemberContent = styled.li`
    padding: 40px;
`;

const MemberImage = styled.img`
    width: 200px;
    margin: 0 35px 30px;
    border: 3px solid #000000;
    border-radius: 50%;
`;

const MemberBox = styled.section`
    padding: 10px;
    position: relative;
    margin-top: -70px;
    border: 3px solid #000000;
    border-radius: 20px;
    background-color: #007AFF;
    text-align: center;
`;

const MemberName = styled.h3`
    margin: 0;
`;

const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 10px;
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: #ffffff;
    font-size: 30px;
`;

const Time: React.FC = () => {
    return (
        <TeamContainer>
            <PhotosList>
                {MembroTime.map((member, index) => (
                    <MemberContent key={index}>
                        <MemberImage src={member.imgSrc} alt={`Foto de ${member.name}`} />
                        <MemberBox>
                            <MemberName>{member.name}</MemberName>
                            <MemberName>{member.rm}</MemberName>
                            <SocialMedia>
                                <SocialLink href={member.linkedin}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </SocialLink>
                                <SocialLink href={member.github}>
                                    <i className="fa-brands fa-github"></i>
                                </SocialLink>
                                <SocialLink href={member.email}>
                                    <i className="fa-solid fa-envelope"></i>
                                </SocialLink>
                            </SocialMedia>
                        </MemberBox>
                    </MemberContent>
                ))}
            </PhotosList>
        </TeamContainer>
    );
};

export default Time;
