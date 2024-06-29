import TodoContainer from "./components/todo/TodoContainer";
import Container from "./components/ui/Container";

function App() {
    return (
        <Container>
            <h1 className="text-3xl text-center font-semibold uppercase">
                My Tasks
            </h1>
            <TodoContainer />
        </Container>
    );
}

export default App;
