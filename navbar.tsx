import Link from 'next/link'
function Navbar(){
    return(
        <div>
            <Link href ='/'>Home</Link>
            <Link href ='/about'>About</Link>
            <Link href ='/contact'>contact</Link>
        </div>
    )
}
export default Navbar