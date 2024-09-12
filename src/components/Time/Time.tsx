import "./Time.css"

type MembroTime = {
    name: string;
    rm: string;
    imgSrc: string;
    linkedin: string;
    github: string;
    email: string;
};

const MembroTime: MembroTime[] = [
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

const Time: React.FC = () => {
    return (
        <div className="team">
            <ul className="fotos">
                {MembroTime.map((member, index) => (
                    <li key={index} className="integrante_content">
                        <img src={member.imgSrc} alt="Foto do Membro" />
                        <section className="caixa-integrante">
                            <h3>{member.name}</h3>
                            <h3>{member.rm}</h3>
                            <div className="integrante_social_media">
                                <a href={member.linkedin} className="integrante-link">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                                <a href={member.github} className="integrante-link">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href={member.email} className="integrante-link">
                                    <i className="fa-solid fa-envelope"></i>
                                </a>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Time;