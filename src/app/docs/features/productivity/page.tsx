import Image from "next/image";
import Link from "next/link";

export default function Productivity() {
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold my-5">Boost Project Productivity</h1>
      <p>
        Syncspace revolutionizes project productivity by providing a
        comprehensive suite of tools designed to streamline collaboration and
        optimize workflow efficiency. With features like seamless document
        management and sharing, customizable workspaces, and organization-level
        tools, Syncspace empowers teams to work smarter, not harder. By creating
        centralized workspaces within Syncspace, teams can easily access, edit,
        and collaborate on documents in real-time, eliminating the need for
        cumbersome email chains and file versioning issues. The ability to
        assign roles and permissions ensures that every team member has the
        appropriate level of access, promoting accountability and minimizing
        confusion. Additionally, Syncspace customizable workspaces allow users
        to tailor their environment to suit their specific project requirements,
        fostering creativity and productivity. With Syncspace, projects move
        forward seamlessly, deadlines are met with ease, and teams achieve their
        goals faster than ever before.
      </p>
      <div className="flex w-full justify-center items-center my-5">
        <Image
          src="/assets/productivity.jpeg"
          alt=""
          height={400}
          width={400}
        />
      </div>
      <div className="absolute right-5">
        <Link href="../features/collaboration" className="cursor-pointer p-2 bg-secondary rounded-md" >
          Next ➡️
        </Link>
      </div>
    </div>
  );
}
