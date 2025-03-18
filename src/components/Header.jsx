import chef from '../assets/chef.png'
export default function Header() {
    return (
        <header>
            <img src={chef} alt="Chef"/>
            <h1 className='cook'>Cook <span className='hub'>Hub</span></h1>
        </header>
    )
}