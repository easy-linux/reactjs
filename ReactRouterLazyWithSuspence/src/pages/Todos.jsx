import React, { useMemo, Suspense } from "react";
import { useParams, useLoaderData, Await } from "react-router";
import { Link } from "react-router-dom";
import Todo from "../components/Todo.jsx";
import Loader from "../components/Loader.jsx";

export const Todos = () => {
  const { id } = useParams();
  const { data } = useLoaderData();

//   const content = useMemo(() => {
//     if (data) {
//       if (Array.isArray(data)) {
//         return data.map((todo) => (
//           <Link to={`/todos/${todo.id}`} key={todo.id} className={"link"}>
//             <Todo todo={todo} />
//           </Link>
//         ));
//       }
//       return <Todo todo={data} />;
//     }
//     return null;
//   }, [data]);

  return (
    <div>
      {id && <div className="header">Todo</div>}
      {!id && <div className="header">Todos</div>}
      <div>
        <Suspense fallback={<Loader>Loading data</Loader>}>
          <Await resolve={data}>
            {(ResolvedData) => {
              if (Array.isArray(ResolvedData)) {
                return ResolvedData.map((todo) => (
                  <Link to={`/todos/${todo.id}`} key={todo.id} className={"link"}>
                    <Todo todo={todo} />
                  </Link>
                ));
              }
              return <Todo todo={ResolvedData} />;
            }}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Todos;
