import Link from "next/link";
import { TodosItem } from "./todos-item";
import { Todo } from "@/types";

interface SectionTodosProps {
  todos: Todo[];
}

export const SectionTodos = ({ todos }: SectionTodosProps) => {
  return (
    <section className="flex flex-col gap-y-4 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">Todos</h3>
      <div className="flex flex-col gap-y-1">
        <p className="text-[1.0625rem] text-highlight mb-1">
          Main things to do
        </p>
        {todos.map((todo, index) => (
          <TodosItem
            key={index}
            title={todo.title}
            isDone={todo.status === "Completed"}
            dateDone={`(${todo.status})`}
          />
        ))}
      </div>
      <div>
        Visit{" "}
        <Link
          href="https://share-story.vercel.app/published/aa99cf4f-0d10-469e-9d70-bf179f7357c0"
          target="_blank"
          className="text-highlight underline"
        >
          this
        </Link>{" "}
        to view all.
      </div>
    </section>
  );
};
