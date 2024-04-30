import Image from "next/image";
import Link from "next/link";

export default function CreateSpace() {
  return (
    <div className="mx-10">
        <h1 className="text-xl font-bold my-5">Create Organizations</h1>
      <p>
      "Organizations" are workspaces where users can carry out various functions.
      Bring together teams, projects, and documents under one virtual
      roof, empowering efficient collaboration like never before. With the
      ability to establish multiple organizations, invite members, and assign
      roles, Syncspace puts you in control of your collaborative endeavors.
      Whether you're coordinating with colleagues, clients, or partners, harness
      the full potential of organization-level tools to streamline file
      management and enhance productivity. Say hello to effortless collaboration
      and goodbye to scattered documents with Syncspace's Creating Organizations
      feature.
      </p>
      <div className="flex w-full justify-center items-center my-5">
            <Image
              src="/assets/org.png"
              alt=""
              height={600}
              width={500}
            />
          </div>
          <div className="flex w-full justify-center items-center my-5">
            <Image
              src="/assets/orgspace.png"
              alt=""
              height={600}
              width={500}
            />
          </div>
          <div className="absolute right-5">
        <Link href="../features/productivity" className="cursor-pointer p-2 bg-secondary rounded-md" >
          Next ➡️
        </Link>
      </div>
          
    </div>
  );
}
