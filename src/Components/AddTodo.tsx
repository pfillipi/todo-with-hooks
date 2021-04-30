import { AddTodoProps } from "../types"
import { ReactComponent as PlusIcon } from "../assets/svg/plus.svg"

export const AddTodo = ({
  handleSubmitTodo,
  task,
  handleChange,
}: AddTodoProps) => (
  <form onSubmit={handleSubmitTodo}>
    <input type="text" name="task" value={task} onChange={handleChange} />
    <button type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
  </form>
)
