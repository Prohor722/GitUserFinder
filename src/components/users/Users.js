import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'

const Users = ({user,loading}) => {

    if(loading){
        return <Spinner/>
    }
    else{
        return (
            <div style={userStyle}>
                {user.map(users =>(
                    <UserItem  key={users.id} user={users}/> 
                                            )
                                    )
                }
            </div>
        )
    }
}

Users.propTypes={
    loading: PropTypes.bool.isRequired,
    users: PropTypes.array
}

const userStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
