import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import TodoModal from "./TodoModal";

const TodoContainer = () => {
    return (
        <div className="">
            <div className="flex justify-between items-center mb-5">
                <TodoModal />
                <TodoFilter />
            </div>
            <div className="w-full h-full bg-primary-gradient p-2 rounded-xl">
                <div className="bg-white w-full h-full rounded-xl p-2 space-y-2">
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;
