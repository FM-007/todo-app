import React from 'react'

import PageHeader from '../template/PageHeader'
import TodoForms from './TodoForms'
import TodoList from './TodoList'

export default props => {

    return(
        <div>
            <PageHeader name='Tarefas' small='Cadastro'></PageHeader>

            <TodoForms />

            <TodoList />

        </div>
    )
    
}