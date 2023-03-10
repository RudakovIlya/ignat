import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'
import {useAutoAnimate} from "@formkit/auto-animate/react";

type AffairsPropsType = {
    data: Array<AffairType>,
    setFilter: (filter: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
    filter: FilterType,
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const setClass = (filter: FilterType) => {
        return `${s.button} ${s[filter]} ${(props.filter === filter ? ' ' + s.active : '')}`
    }

    const ALL: FilterType = 'all';
    const HIGH: FilterType = 'high';
    const MIDDLE: FilterType = 'middle';
    const LOW: FilterType = 'low';

    const [div] = useAutoAnimate<HTMLDivElement>()

    const setFilter = (filter: FilterType) => () => props.setFilter(filter)

    return (
        <div>
            <div className={s.buttonContainer}>
                <button value={ALL} id={'hw2-button-all'} onClick={setFilter('all')} className={setClass(ALL)}>
                    All
                </button>
                <button value={HIGH} id={'hw2-button-high'} onClick={setFilter('high')} className={setClass(HIGH)}>
                    High
                </button>
                <button value={MIDDLE} id={'hw2-button-middle'} onClick={setFilter('middle')}
                        className={setClass(MIDDLE)}>
                    Middle
                </button>
                <button value={LOW} id={'hw2-button-low'} onClick={setFilter('low')} className={setClass(LOW)}>
                    Low
                </button>
            </div>
            <div ref={div} className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
