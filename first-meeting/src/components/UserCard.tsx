import { useState } from "preact/hooks";
import { User } from "../types";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility((prevState) => !prevState);
  };

  return (
    <div className="border rounded mb-3 p-3 hover:bg-slate-100">
      <h2>{user.username}</h2>
      <a href={"tel:+" + user.phone} className="block">
        {user.phone}
      </a>

      <button
        className="px-2 py-1 my-4 w-32 rounded text-white bg-cyan-700 hover:bg-cyan-800"
        onClick={toggleVisibility}
      >
        {visibility ? "Hide user data" : "Show user data"}
      </button>

      {visibility && (
        <div className="userData p-2 border border-stone-300">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.website}</p>
        </div>
      )}
    </div>
  );
}
