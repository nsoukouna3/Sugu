
function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <div className='text-center'>Copyright© {currentYear} Soukouna </div>
        
    )
}
export default Footer;