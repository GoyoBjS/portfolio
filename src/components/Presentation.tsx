import styles from "./Presentation.module.css";
import PreactLogo from "../assets/preact.svg";

const technologies = [
    {
        name: "React",
        icon: "../assets/react.svg",
        url: "https://reactjs.org",
    },
    {
        name: "JavaScript",
        icon: "../assets/javascript.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        icon: "../assets/typescript.svg",
        url: "https://www.typescriptlang.org",
    },
    {
        name: "Vite",
        icon: "../assets/vite.svg",
        url: "https://vitejs.dev",
    },
    {
        name: "Preact",
        icon: "../assets/preact.svg",
        url: "https://preactjs.com",
    },
    {
        name: "Java",
        icon: "../assets/java.svg",
        url: "https://www.java.com",
    },
    {
        name: "HTML",
        icon: "../assets/html.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        icon: "../assets/css.svg",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "React Native",
        icon: "../assets/react-native.svg",
        url: "https://reactnative.dev",
    },
    {
        name: "Node.js",
        icon: "../assets/nodejs.svg",
        url: "https://nodejs.org",
    },
    {
        name: "Expo",
        icon: "../assets/expo.svg",
        url: "https://expo.io",
    },
    {
        name: "Python",
        icon: "../assets/python.svg",
        url: "https://www.python.org",
    },
    {
        name: "PostgreSQL",
        icon: "../assets/postgresql.svg",
        url: "https://www.postgresql.org",
    },
    {
        name: "MongoDB",
        icon: "../assets/mongodb.svg",
        url: "https://www.mongodb.com",
    },
    {
        name: "Git",
        icon: "../assets/git.svg",
        url: "https://git-scm.com",
    },
    {
        name: "GitHub",
        icon: "../assets/github.svg",
        url: "https://github.com",
    },
    {
        name: "AWS",
        icon: "../assets/aws.svg",
        url: "https://aws.amazon.com",
    },
    {
        name: "Firebase",
        icon: "../assets/firebase.svg",
        url: "https://firebase.google.com",
    },
    {
        name: "Jira",
        icon: "../assets/jira.svg",
        url: "https://www.atlassian.com/software/jira",
    },
    {
        name: "Trello",
        icon: "../assets/trello.svg",
        url: "https://trello.com",
    },
    {
        name: "Figma",
        icon: "../assets/figma.svg",
        url: "https://www.figma.com",
    },
];
    

export default function Presentation() {
    return (
        <section>
        <h1 className={styles.presentation}>Hola, soy <span>Gregorio</span></h1>
        <h2>Desarrollador FullStack</h2>
        <div class={styles.technologies}>
            {technologies.map((technology) => (
                <a href={technology.url} target="_blank">
                    <img src={PreactLogo}alt={technology.name} />
                </a>
            ))}
        </div>
        </section>
    )
    }