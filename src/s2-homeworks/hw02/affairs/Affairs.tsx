import React, {MouseEvent} from 'react'
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

    const set = (event: MouseEvent<HTMLButtonElement>) => {
        props.setFilter(event.currentTarget.value as FilterType);
    }

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

    return (
        <div>
            <div className={s.buttonContainer}>
                <button value={ALL} id={'hw2-button-all'} onClick={set} className={setClass(ALL)}>
                    All
                </button>
                <button value={HIGH} id={'hw2-button-high'} onClick={set} className={setClass(HIGH)}>
                    High
                </button>
                <button value={MIDDLE} id={'hw2-button-middle'} onClick={set} className={setClass(MIDDLE)}>
                    Middle
                </button>
                <button value={LOW} id={'hw2-button-low'} onClick={set} className={setClass(LOW)}>
                    Low
                </button>
            </div>
            <div ref={div} className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
