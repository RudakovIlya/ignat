import React, {FC, ReactNode, useEffect, useState} from 'react'
import {Header} from '../header/Header'
import {Sidebar} from '../sidebar/Sidebar'
import styles from './Layout.module.css'

type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <>
            <Sidebar open={open} handleClose={handleClick}/>
            <Header handleOpen={handleClick}/>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}
