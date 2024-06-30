/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllTasksQuery } from "@/redux/api/api";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
    const { data, isLoading } = useGetAllTasksQuery(undefined);
    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <TodoModal />
                <TodoFilter />
            </div>
            <div className="w-full h-full bg-primary-gradient p-2 rounded-xl">
                <div className="bg-white w-full h-full rounded-xl p-2 space-y-2">
                    {data.data.map((el: any, idx: number) => (
                        <TodoCard key={idx} {...el} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
