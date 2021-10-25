import './Header.css'

export default function Header() {
  const current = new Date()
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`

  return (
    <>
      <header className='header'>
        <br />

        <p className='quote'>
          "Only compare yourself if you know you’re better than the other
          person"
        </p>
        <p className='date'> {date}</p>
      </header>
    </>
  )
}
