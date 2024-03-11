import reactImage from "../../assets/react-core-concepts.png";
import './Header.css'

const reactDescriptions = ['Fundamental', 'Crucial', "Core"];

function getRandomNextInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    return (
        <div>
            <header>
                <img src={reactImage} alt="Stylized atom"/>
                <h1>React Essentials</h1>
                <p>
                    {reactDescriptions.at(getRandomNextInt(2))} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
}

export default Header;