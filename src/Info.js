// import React, { useState , useEffect} from 'react'

// const Info = () => {
//     const [name, setName] = useState('')
//     const [nickname, setNickName] = useState('')
//     useEffect(() => {

        // console.log('렌더링이 완료되었습니다.')                  - 계속 진행
        // console.log({
        //     name,
        //     nickname
        // })

    //     console.log('마운트될 때만 실행됩니다.')                     - 마운트 될 때만 진행
    // }, [])
    
    // console.log(name)                    - 특정 값이 업데이트될 때만 실행하고 싶을 때
    // }, [name])
 
    // console.log('effect')                            - 뒷정리 하기
    // console.log(name)
    // return () => {
    //     console.log('cleanup')
    //     console.log(name)
    // }
    // })
    //                         
    
                 
//     console.log('effect')                                -name, nickname 관리
//     console.log(name)
//     return () => {
//         console.log('cleanup')
//         console.log(name)
//     }
//     }, [name])


//     const onChangeName = e => {
//         setName(e.target.value)
//     }

//     const onChangeNickName = e => {
//         setNickName(e.target.value)
//     }

//     return(
//         <div>
//             <div>
//                 <input value={name} onChange = {onChangeName} />
//                 <input value={nickname} onChange = {onChangeNickName} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름:</b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임:</b> {nickname}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Info

import React, { useReducer } from 'react'

function reducer(state, action) {
    return{
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname: ''
    })
    const { name, nickname } = state;
    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} /> 
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info