import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return (
    <div className="flex flex-col">
      {user && <h1>Welcome {user.firstName}</h1>}
    </div>
  );
}
