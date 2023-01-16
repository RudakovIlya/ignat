import React, {useState} from 'react'
import {v1} from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 1 - описать тип UserType - done
* 2 - указать нужный тип в useState с users - done
* 3 - дописать типы и логику функции pureAddUserCallback и проверить её тестами - done
* 4 - в файле GreetingContainer.tsx дописать типизацию пропсов - done
* 5 - в файле GreetingContainer.tsx указать нужные типы в useState с name и error - done
* 6 - в файле GreetingContainer.tsx дописать тип и логику функции setNameCallback - done
* 7 - в файле GreetingContainer.tsx дописать логику функций pureAddUser, pureOnBlur, pureOnEnter и проверить их тестами - done
* 8 - в файле GreetingContainer.tsx вычислить количество добавленных и имя последнего (totalUsers, lastUserName) - done
* 9 - в файле Greeting.tsx дописать типизацию пропсов - done
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string,
    name: string,
}

export const pureAddUserCallback = (name: string, setUsers: (users: UserType[]) => void, users: UserType[]) => {
    const user = {
        _id: v1(),
        name: name,
    }
    setUsers([...users, user]);
};

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
