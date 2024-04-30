import Image from "next/image";
import Link from "next/link";

export default function Customizer() {
  return (
    <div className="mx-10">
        <h1 className="text-xl font-bold my-5">Customizable Workspace</h1>
      <p>
        Enjoy easy workspace customization on Syncspace to carry
        out various functions seamlessly. Tailor your workspace to fit your
        unique needs and preferences effortlessly. Whether you are collaborating
        on a project with your team or organizing your personal documents,
        Syncspace empowers you to create the perfect environment. With
        customizable layouts, themes, and organization tools, you can design a
        workspace that reflects your workflow and enhances productivity. Say
        goodbye to one-size-fits-all solutions and embrace the freedom to mold
        your workspace to match your vision. Join Syncspace and unlock the
        potential of personalized collaboration today.
      </p>
      <div className="flex w-full justify-center items-center my-5">
            <Image
              src="/assets/workspace-white.png"
              alt=""
              height={600}
              width={500}
            />
          </div>
          <p className="text-center">Syncspace User Workspace</p>
          <div className="absolute right-5">
        <Link href="../features/create-organization" className="cursor-pointer p-2 bg-secondary rounded-md" >
          Next ➡️
        </Link>
      </div>
    </div>
  );
}
