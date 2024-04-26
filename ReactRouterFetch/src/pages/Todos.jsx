import React, { useMemo } from "react";
import { useParams, useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Todo from "../components/Todo.jsx";

const Todos = () => {
    const {id} = useParams()
    const data = useLoaderData()
    
    const content = useMemo(() => {
        if(data){
            if(Array.isArray(data)){
                return data.map((todo) => (
                    <Link to={`/todos/${todo.id}`} key={todo.id} className={'link'}>
                        <Todo todo={todo} />
                    </Link>
                ))
            }
            return (
                <Todo todo={data} />
            )
        }
        return null
    }, [data])
    
    return (
        <div>
            {id && <div className="header">Todo</div>}
            {!id && <div className="header">Todos</div>}
            <div>
                {content}
            </div>
        </div>
    );
};

export default Todos;
