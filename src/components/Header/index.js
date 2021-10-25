import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <>
      <header className='header'>
        <br />
        <FontAwesomeIcon className="w-6" size="xs" icon={faStar} />
        <p className='quote'>
          "Only compare yourself if you know you’re better than the other
          person"
        </p>
        <p className='date'> {date}</p>
      </header>
    </>
  )
}

{/* <i class="fas fa-star"></i> */}
