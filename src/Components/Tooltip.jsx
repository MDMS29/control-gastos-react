import { useState } from "react"


const Tooltip = ({ children, title }) => {
    const [ver, setVer] = useState(false)

    return (
        <div className='relative' onMouseEnter={() => setVer(true)} onMouseLeave={() => setVer(false)}>
            <button>
                {children}
            </button>
            <span className={`absolute ${ver ? 'flex' : 'hidden'}`}>{title}</span>
        </div>
    )
}

export default Tooltip