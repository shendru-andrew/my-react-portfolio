import React, {useState} from 'react'

export default function NavBar() {

    const [onScroll, setOnScroll] = useState(false)
    const scrolling = () => {
        if (window.scrollY >= 64) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    }

    window.addEventListener('scroll', scrolling)

  return (
    <header className={!onScroll ? 'sticky-top d-flex justify-content-between py-2' : 'sticky-top d-flex justify-content-between py-2 header_scroll'}>
        <a href='' className={!onScroll ? 'text-black text-decoration-none ms-5' : 'text-decoration-none ms-5 header_scroll_text'}><h1 className='raleway fw-bolder logo'><span className='fst-italic'>A</span>E</h1></a>
        <ul className='d-flex align-items-center list-unstyled gap-5 me-5 fs-5 fw-bold'>
            <li><a href='' className={!onScroll ? 'text-decoration-none text-black raleway' : 'text-decoration-none header_scroll_text raleway'}>{'<About/>'}</a></li>
            <li><a href='' className={!onScroll ? 'text-decoration-none text-black raleway' : 'text-decoration-none header_scroll_text raleway'}>{'<Projects/>'}</a></li>
            <li><a href='' className={!onScroll ? 'text-decoration-none text-black raleway' : 'text-decoration-none header_scroll_text raleway'}>{'<Contact/>'}</a></li>
        </ul>
    </header>
  )
}
