import AddTodoForm from "@/components/AddTodoForm";

export default function Home() {
  return (
    <main className="container">
      {/* <pre>{JSON.stringify(todos, undefined, 2)}</pre> */}
      <AddTodoForm />
    </main>
  );
}
